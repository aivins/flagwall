#!/bin/bash
convert -resize 128x128 "${1}" src/images/icon128.png
convert -resize 48x48 "${1}" src/images/icon48.png
convert -resize 32x32 "${1}" src/images/icon32.png
convert -resize 16x16 "${1}" src/images/icon16.png