module.exports = function(grunt) {



  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: [
              'css/**/*.css',
              'pages/**/*.html',
              'js/**/*.js',
              'img/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}',
              'lib/**/*'
            ],
      tasks: ['jshint'],    
    },   
    serve: {
      options: {
        port: 9000
      }      
    },
    copy: {
      generated: {
        files:[
          {expand:true, src:['pages/**/*.html'], dest:'dist/'}
        ]
      }
    },
    useminPrepare: {
      html: ['pages/index.html'],
      options:{
        dest: 'dist/pages/'
      }
    },
    filerev: {
      options: {
        algorithm: 'md5',
        length: 8
      },
      images: {
        src: 'img/**/*.{jpg,jpeg,gif,png,webp}',
        dest: 'dist/img/'
      }
    },
    usemin: {
      html: ['dist/pages/index.html'],
      options: {
        assetsDirs: ['img']      
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files:[{
          expand:true,
          src: 'dist/{,*/}*.html',
          dest: './'
        }]
      }
  }, 
  clean:{
    dist: {
      files:[{
      dot: true,
      src: [
            '.tmp',
            ' dist/'
            ]
      }]
    }
  }


});

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-filerev')
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');




  grunt.registerTask('default', ['jshint', 'serve']);
  grunt.registerTask('build', [
    'clean:dist',
    'copy:generated',
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'filerev',
    'usemin',
    'htmlmin'
  ]);

};