#!/usr/bin/env bash

# change directory to the project root
cd "$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/.." || exit 1

git commit -am \
  "add latest data: $(date -u +'%a %b %e %H:%M:%S UTC %Y')"
