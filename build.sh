#!/bin/bash

rm -rf build
mkdir -p build/ga
version=$(cat package.json | jq -r ".version")

include=("package.json" "index.js" "public")
for path in ${include[@]}; do
  cp -R $path build/ga
done

pushd build/ga
  npm install --production
popd

tar czvf build/kibana-ga-v${version}.tar.gz -C build ga
