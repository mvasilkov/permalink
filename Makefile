jshint = node_modules/.bin/jshint
mocha = node_modules/.bin/mocha
npm = npm

all: dependencies jshint mocha

dependencies:
	$(npm) install

jshint:
	$(jshint) permalink.js

mocha:
	$(mocha) -R spec
