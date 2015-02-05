module.exports = function(grunt) {

  grunt.initConfig({

angular_architecture_graph: {
            diagram: {
                files: {
                    // "PATH/TO/OUTPUT/FILES": ["PATH/TO/YOUR/FILES/*.js"]
                    "architecture": [
                        "js/*.js"
                    ]
                }
            }
        }

  });


  grunt.loadNpmTasks('grunt-angular-architecture-graph');
  
};