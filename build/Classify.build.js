/**
 * More configuration options at:
 * https://github.com/jrburke/r.js/blob/master/build/example.build.js
 */
({
    appDir: "../src",
    baseUrl: "./",
    dir : "../dist",
    modules: [{ "name": "Classify"}],
    uglify: {
        beautify: false,
        unsafe : true
    },
    findNestedDependencies : true
})