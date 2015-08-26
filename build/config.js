var bourbon = "./vendor/bower/bourbon/app/assets/stylesheets"
var publicAssets = "./public/assets";
var sourceFiles  = "./client/assets";


module.exports = {
  publicAssets: publicAssets,
  browserSync: {
    proxy: 'localhost:3000',
    files: ['./app/views/**']
  },
  sass: {
    src: "./client/app/**/*.{sass,scss,tag}",
    dest: publicAssets + "/stylesheets",
    settings: {
      indentedSyntax: false, // Disabling .sass syntax!
      imagePath: '/assets/images', // Used by the image-url helper
      includePaths: [bourbon]
    }
  },
  images: {
    src: sourceFiles + "/images/**",
    dest: publicAssets + "/images"
  },
  browserify: {
    bundleConfigs: [
      {
        entries: './app/init.js',
        dest: publicAssets + '/javascripts',
        outputName: 'app.js',
        extensions: ['.js']
      },
      {
        entries: './test.js',
        dest: './generated',
        outputName: 'test.js',
        extensions: ['.js']
      }
    ]
  },
  test: {
    src_files: [
      "generated/test.js"
    ],
    framework: "jasmine2",
    test_page: "test.html",
    launch_in_dev: ["chrome"],
  }
};
