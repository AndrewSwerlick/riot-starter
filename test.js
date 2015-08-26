// This is using the require-globify browserify plugin. It expands the wildcards
// out into a seperate require for each test file
require('./app/**/__tests__/*.js', {mode: 'expand'});
