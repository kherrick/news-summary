#!/usr/bin/env bash
# news-update.sh — Headless news semantic clustering via Gemma 2B
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
REPORTS_DIR="$ROOT_DIR/reports"
mkdir -p "$REPORTS_DIR"

SC="npx --yes shadow-claw"
MODEL="${MODEL:-onnx-community/gemma-4-E2B-it-ONNX}"
PROVIDER="${PROVIDER:-transformers_js_local}"
PROMPT_INPUT="$REPORTS_DIR/news-prompt-input.txt"
CAT_OUTPUT="$REPORTS_DIR/news-categories.txt"

echo "📡 Step 1: Ingesting and deduplicating news feeds..."
node "$SCRIPT_DIR/fetch-news.mjs"

echo "🤖 Step 2: Running semantic thematic clustering ($MODEL via $PROVIDER)..."
export TRANSFORMERS_JS_REQUEST_TIMEOUT_MS="${TRANSFORMERS_JS_REQUEST_TIMEOUT_MS:-600000}"

cat "$PROMPT_INPUT" | $SC agent run \
  --workspace "$ROOT_DIR/.cache" \
  --database-dir "$ROOT_DIR/.cache/database" \
  --provider "$PROVIDER" \
  --model "$MODEL" \
  --tools none \
  --system-prompt-file "$ROOT_DIR/.cache/MEMORY.md" \
  --no-stream \
  -y \
  -o "$CAT_OUTPUT" \
  "You are a news taxonomist. Group the following numbered articles into 4 to 6 thematic sections.
Suggested sections:
## AI & Technology
## Privacy, Security & Regulation
## Hardware & Computing
## Space & Science
## Software Development & Open Source
## Culture, Society & Mobility

For each section, write the markdown heading (##) followed by the article IDs belonging to it.
Example format:
## AI & Technology
5, 12, 17, 23

## Hardware & Computing
16, 24

Output ONLY the headings and article numbers. Do not include greetings, explanations, or article titles."

echo "📝 Step 3: Reconstructing verified README.md..."
node "$SCRIPT_DIR/render-summary.mjs"
