#!/usr/bin/env bash

# 1. (One-time) Prewarm / download the Gemma ONNX model weights
npx shadow-claw agent model download onnx-community/gemma-4-E2B-it-ONNX

# 2. Run the end-to-end update script
npm run news:update

# (or ./bin/news-update.sh)
# 3. Rebuild static site
npm run build
