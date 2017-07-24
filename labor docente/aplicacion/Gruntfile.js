module.exports= function(grunt){
    grunt.initConfig({
        ngdocs:{
            all:["app_client/**/*.js"]
        }
    });

    grunt.loadNpmTasks("grunt-ngdocs");
    grunt.registerTask("default",["ngdocs"]);

};