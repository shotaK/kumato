#!/bin/bash

build() {
    echo 'building react'

    rm -rf extension/*

    export INLINE_RUNTIME_CHUNK=false
    export GENERATE_SOURCEMAP=false

    react-scripts build

    mkdir -p extension
    mv build/* extension
    rm -R build

    mv extension/index.html extension/popup.html
    mv extension/pageBlocked.html extension/pageBlocked.html
    cp public/background.js extension/background.js
    cp public/content.js extension/content.js
}

build
