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
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');
  grunt.registerTask('default', ['jshint', 'serve']);


};