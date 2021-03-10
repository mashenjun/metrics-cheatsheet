SHELL := bash

PROJECT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

TOOLS_PATH = $(CURDIR)/tools

.PHONY: buidl-linux, build-macos

build-linux:
	@${TOOLS_PATH}/linux/site_generator -i ./data -o ./build -s ./static -t ./templates

build-macos:
	@${TOOLS_PATH}/macos/site_generator -i ./data -o ./build -s ./static -t ./templates