jshint = node_modules/.bin/jshint
mocha = node_modules/.bin/mocha
npm = npm

all: node_modules jshint mocha

node_modules: package.json
	@ $(npm) install

jshint: node_modules
	@ $(jshint) permalink.js test/*.js

mocha: node_modules
	@ $(mocha) -R spec
