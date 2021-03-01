#!/bin/bash

PROTO_DIR=./proto/

# Generate Js code
npx ./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out=${PROTO_DIR} \
    --plugin=proto-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./proto \
    proto/*.proto

# Generate Typescript code
npx ./node_modules/.bin/grpc_tools_node_protoc \
    --plugin=proto-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DIR} \
    -I ./proto \
    proto/*.proto