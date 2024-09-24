#!/bin/bash

if [ -f "pacakge.json ]; then
	echo "Found package.json, installin packages..."
	
	npm install --save-dev --save-exact prettier
	npm init @eslint/config@latest
	
