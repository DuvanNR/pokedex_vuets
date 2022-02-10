#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

#  deploying
git push -f https://github.com/DuvanNR/pokedexvue_ts.git master:gh-pages

cd -