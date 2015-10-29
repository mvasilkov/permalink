jshint = node_modules/.bin/jshint
mocha = node_modules/.bin/mocha
browserify = node_modules/.bin/browserify
bower = node_modules/.bin/bower
npm = npm

all: jshint mocha test_client/assert.js bower_components

node_modules: package.json
	@ $(npm) install

jshint: node_modules
	@ $(jshint) permalink.js test/*.js

mocha: node_modules
	@ $(mocha)

test_client/assert.js: node_modules
	@ $(browserify) -r assert -s assert -o $@

bower_components: node_modules bower.json
	@ $(bower) install
