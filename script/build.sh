#!/bin/bash

build() {
    echo 'building react'

    rm -rf dist/*

    export INLINE_RUNTIME_CHUNK=false
    export GENERATE_SOURCEMAP=false

    craco build

    mkdir -p dist
    mv build/* dist
    rm -R build

    mv dist/index.html dist/popup.html
    cp public/background.js dist/background.js
    cp public/content.js dist/content.js
}

build
