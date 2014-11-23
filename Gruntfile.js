module.exports = function(grunt) {

  // Configuration de Grunt
	grunt.initConfig({
		copy: {
		 	main: {
		    	src: 'src/fonts',
		    	dest: 'build/fonts'
		  	},
		},
	    inline: {
	        dist: {
	            src: ['src/index.html', 'src/partials/*'],
	            dest: ['build/'],
	        }
	    },
		compass: {                  // Task
			dist: {                   // Target
				options: {              // Target options
					sassDir: 'src/sass',
					cssDir: 'build',
					environment: 'production'
				}
			}
		},
		watch: {
			css: {
				files: ['src/sass/*.scss'],
				tasks: ['compass']
			},
			js: {
				files: ['src/js/*.js'],
				tasks: ['concat']
			},
			bower: {
				files: ['bower.json'],
				tasks: ['bower']
			},
			index: {
				files: ['src/index.html', 'src/partials/*'],
				tasks: ['inline']
			},
			image: {
				files: ['src/img/*'],
				tasks: ['imagemin']
			},

			fonts: {
				files: ['src/fonts/'],
				tasks: ['copy']
			}		
        },
		concat: {
			dist: {
				src: ['src/js/app.js','src/js/horloge.js', 'src/js/service.js', 'src/js/directive.js', 'src/js/controller.js'], // la source
				dest: 'build/main.js' // la destination finale
			}
		},
		uglify: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/js/app.js', 'src/js/horloge.js', 'src/js/service.js', 'src/js/directive.js', 'src/js/controller.js'],
				dest: 'build/main.js'
			}
		},

		imagemin: {
		    png: {
		    	options: {
		    		optimizationLevel: 7
		    	},
		    	files: [
		        {
		    		// Set to true to enable the following options…
		    		expand: true,
		    		// cwd is 'current working directory'
		    		cwd: 'src/img/',
		     		src: ['**/*.png'],
		    		// Could also match cwd line above. i.e. project-directory/img/
		    		dest: 'build/img/',
		    		ext: '.png'
		        }
		      ]
		    },
		    jpg: {
		    	options: {
		    		progressive: true
		    	},
		    	files: [
			        {
			        	// Set to true to enable the following options…
			        	expand: true,
			        	// cwd is 'current working directory'
			        	cwd: 'src/img/',
			        	src: ['**/*.jpg'],
			        	// Could also match cwd. i.e. project-directory/img/
			        	dest: 'build/img/',
			        	ext: '.jpg'
			        }
		     	]
		    }
		},
		bower: {
    		install: {
    			options: {
    				targetDir: 'build/bower_components',
    			}
    		}
  		},

		coffee: {
			compile: {
				files: {
					'src/js/main.js': 'src/js/coffee/main.coffee',
                    'src/js/memory.js': 'src/js/coffee/memory.coffee',
                    'src/js/card.js': 'src/js/coffee/card.coffee' // 1:1 compile
		    	}
			}
		}
	})

	// Import du package
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-inline');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.registerTask('dist', ['uglify:dist']);

	grunt.registerTask('default', ['concat:dist', 'compass:dist', 'imagemin', 'inline:dist', 'copy:main', 'bower:install', 'concat:dist', 'uglify:dist'])
}