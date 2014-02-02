/*
 * Assemble, component generator for Grunt.js
 * https://github.com/assemble/
 *
 * Copyright (c) 2013 Upstage
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // pkg : grunt.file.readJSON('package.json'),
    // site: grunt.file.readYAML('src/data/site.yml'),

    assemble: {
      // Task-level options
      options: {
        prettify: {indent: 2},
        marked: {sanitize: false},
        engine: 'handlebars',
        helpers: 'helper-*.js'
      },
      site: {
        // Target-level options
        options: {
          data: 'data.json'
        },
        files: [
          { src: ['index.html.mustache'], dest: 'index.html' }
        ]
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: {
      all: ['index.{html}']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task to be run.
  grunt.registerTask('default', ['clean', 'assemble']);
};
