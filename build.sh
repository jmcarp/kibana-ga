#!/bin/bash

rm -rf build
mkdir -p build/ga

include=("package.json" "index.js" "public")
for path in ${include[@]}; do
  cp -R $path build/ga
done

pushd build/ga
  npm install --production
popd

tar cvf build/release.tar.gz -C build ga
