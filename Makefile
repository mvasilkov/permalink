jshint = node_modules/.bin/jshint
mocha = node_modules/.bin/mocha
npm = npm

all: dependencies jshint test

dependencies:
	$(npm) install

jshint:
	$(jshint) permalink.js

test:
	$(mocha)
