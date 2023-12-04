// só digitar grunt pra rodar !

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      build: ["build", "dist"],
    },
    package: grunt.file.readJSON("package.json"),
    less: {
      development: {
        options: {
          compress: true,
        },
        files: [
          {
            src: "src/less/main.less",
            dest: "build/main.css",
          },
        ],
      },
    },
    cssmin: {
      production: {
        files: [
          {
            expand: true,
            src: "build/main.css",
            dest: "dist/",
          },
        ],
      },
    },
    uglify: {
      development: {
        files: [
          {
            src: "src/js/script.js",
            dest: "./build/script.min.js",
          },
        ],
      },
    },
    htmlmin: {
      development: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: [
          {
            src: "src/index.html",
            dest: "./build/index.html",
          },
        ],
      },
    },
    watch: {
      files: ["src/less/*.less", "src/js/*.js", "src/*.html", "build/*.css"],
      tasks: ["clean", "less", "uglify", "htmlmin", "cssmin"],
    },
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["watch"]);
};
