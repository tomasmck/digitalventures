module.exports = function(grunt) {

    grunt.initConfig({
        mutationTest: {
            options: {
                testFramework: 'mocha',
                code: ['src/*.js', 'node_modules/**/*.js'],
                specs: 'test/*.js',
                mutate: 'src/*.js'
            },
            target: {
                code: ['src/*.js'],
                specs: 'test/*.js',
                mutate: 'src/*.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-mutation-testing');

    grunt.registerTask('default', ['mutationTest']);

};