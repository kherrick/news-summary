#!/usr/bin/env bash

# change directory to the project root
cd "$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/.." || exit 1

npm start --silent > README.md \
  && sed -i 's/[[:space:]]*$//' README.md \
  && cat -s README.md > README.md.tmp \
  && mv README.md.tmp README.md \
  && sed -i '1d;$d' README.md \
  && npm run build:html \
  && sed -i '1s;^;<body>\n;' ./content.html \
  && echo '</body>' >> ./content.html \
  && sed -i '/<body><\/body>/{r ./content.html
d}' ./templates/index.template.html \
  && cp ./templates/index.template.html index.html \
  && git checkout HEAD -- ./templates/index.template.html \
  && rm -f ./content.html \
  && npm run build:html:prettify
