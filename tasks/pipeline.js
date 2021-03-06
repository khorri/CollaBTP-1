/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
	'styles/bootstrap.min.css',
	'styles/font-awesome.min.css',
	'styles/animate.css',
	'styles/pnotify.custom.css',
	'styles/ngDialog.css',
	'styles/ngDialog-theme-flat.css',
	'styles/jquery.dataTables.css',
	'styles/dataTables.bootstrap.css',
	'styles/dataTables.responsive.css',
	'styles/select2.css',
    'styles/main.css',
	
	
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [
  // Load sails.io before everything else	
	'js/dependencies/sails.io.js',
	// Dependencies like jQuery, or Angular are brought in here
	'js/dependencies/jquery.js',
	'js/dependencies/jquery.dataTables.js',
	'js/dependencies/bootstrap.min.js',
	'js/dependencies/select2.min.js',
	'js/dependencies/angular.js',
	'js/dependencies/angular-sails.js',
	'js/dependencies/angular-route.js',
	'js/dependencies/angular-sanitize.js',
	'js/dependencies/angular-resource.js',
	'js/dependencies/angular-filter.js',
	'js/dependencies/angular-ui.js', 
	'js/dependencies/angular-select2.js',
	'js/dependencies/angular-animate.js',
	'js/dependencies/moment.js',
	'js/dependencies/angular-moment.js',
	'js/dependencies/pnotify.custom.js',
	'js/dependencies/angular-pnotify.js',
	'js/dependencies/ngDialog.js',
	'js/dependencies/angular-datatables.js',
	'js/dependencies/dataTables.responsive.js',
	

	'js/coreApp/**/*.js'	

  // All of the rest of your client-side js files
  // will be injected here in no particular order. 
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
