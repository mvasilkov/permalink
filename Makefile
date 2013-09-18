jshint = node_modules/.bin/jshint
mocha = node_modules/.bin/mocha
browserify = node_modules/.bin/browserify
npm = npm

all: jshint mocha test_client/assert.js

node_modules: package.json
	@ $(npm) install

jshint: node_modules
	@ $(jshint) permalink.js test/*.js

mocha: node_modules
	@ $(mocha) -R spec

test_client/assert.js: node_modules
	@ $(browserify) -r assert -s assert -o $@
