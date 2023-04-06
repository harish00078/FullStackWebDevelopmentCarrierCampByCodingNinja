// here we are setting-up the (gulp) for our  application development:

// for that first we have to import the (gulp):

const gulp = require("gulp");

// second we have to import the (gulp-sass) library:through which we are converting our (sass) code into the (css) code:
const sass = require("gulp-sass");

// third we have to import the (gulp-cssnano) library:through which we are compresing our (css) code:
const cssnano = require("gulp-cssnano");

// fourth we have to import the (gulp-rev) library:through which we can modified our (code) file-names:
// so that we can differentiate between the newer (code) files that we are sending to the (browser) with the (older) onces which were already present there:
// this library basically add the (hashcode) with the code (file-name):so that we can creating differentiate between newer and the older files:
const rev = require('gulp-rev');

// => for using (gulp):we have to create (tasks):

// here we create one of the (task):In this task we are (minifinig) or we can say (compressing) the (css):
// we gave a name to this task is (css):
gulp.task("css", function () {


  console.log("minifying css...");

  // first we have to provide the source of the (folder) or (files) to the (gulp):that we want to compress:
  // here double stars (**) means every folder or every sub-folder which is present in the (sass) folder:
  // and single star (*) means every file with extension (.scss):which where present on those (folders):we want to compress:
  gulp.src("./assets/sass/**/*.scss")

    // second we have to convert those (sass) files into the (css) files:
    // for that we are using the (sass) library of the (gulp):
    // for using the (sass) library of the (gulp) in the (task):we have to use the (.pipe) function:
    // (.pipe) => (.pipe) is basically a function that we use to (call) the (gulp) middlewares: In the (gulp) task that we are creating:
    .pipe(sass())

    // after converting them from the (sass) file to the (css) file:with the help of the (sass) library:
    // know we have (compress) those (css) files:with the help of the gulp (cssnano) library:
    // for using that (cssnano) library in the (gulp) task: we have to use the (.pipe) function:
    .pipe(cssnano())

    // after compressing those (css) files:we have to (put) them into the (folder):
    // for giving the (folder):were we want to store those (compress) files:we have to use the (dest) function of the (gulp):

    // this (path) is for the (development) mode:it will we different for the (production) mode:
    // for the (production) mode:we will create the folder with the name of (public):and under that (public) folder: we have multiple folders which were related to all the files that we want to compress and we store those multiple compress files acc to the (folders) that we have coreted for them:

    .pipe(gulp.dest("./assets.css"));

  // after compressing the (files) and (stored) them in the folder:
  // IMP = know we have to return them with the (changed-name):so that the browser compiler can differentiate between the (older) files with the (newer) files:
  // we can change the files old-name:with the help of by  simply adding the (hash-code) strings with there (old-names):

  // here we are returning the (Compressed) files:that we have stored in ('./assets.css'):
  // so we have to return the every compressed file and the folder:so that's why we are using the stars (**) to represent that every file or folder should get returned:of the compressed files:

  return gulp.src("./assets/**/*.css")

      // we have to (rename) it:so that browser compiler can differentiate between the (old) files and the (newer) files:
      // we can do that with the help of by addding the  (hash-code) strings in it:
      // for adding that (hash-code) strings :we have to use the (rev) library of the (gulp):
      .pipe(rev())

      // after re-naming the files:know we have to (store) them in the (folder):
      // for giving the path of the (folder) to the gulp (task):where we want to store those (Files):
      // for that we have to use the (dest) function of the (gulp) library:
      // IMP => where the (production) environment can use those (compressed) and (renamed) (assets) files:
      .pipe(gulp.dest("./public/assets"))


  // after that we have to create the (manifest):
  // we can create the (manifest) with the help of the (manifest) function of the gulp's (rev) library:
  // => what is (manifest):a manifest is a file that contains a list of assets and their corresponding file paths, used to map asset URLs to their file system paths.

  // A manifest is typically used in conjunction with build tools like Gulp to manage the build process and optimize assets for production. By generating a manifest file that maps asset URLs to their corresponding file paths, the build process can easily reference the correct asset file when it is requested by the application.

  // This allows developers to easily version and cache-bust assets, since the manifest can be used to update URLs to point to the correct version of an asset. Manifests can also be used to selectively include or exclude certain assets from the build process, based on criteria like file type, location, or other metadata.

  // IMP =  Overall, the manifest is an important tool for managing assets in a web application, and can help streamline the build process and improve performance.

  .pipe(rev.manifest({

    // In manifest:we have to gave the (folder) which will have all the (compressed) or (renamed) files:
    cwd:'public',
    // merge will basically create the (public) name (folder):if its not created already:
    merge: true


  })) 

  // know after creating the manifest:we have to again put these files in the (directory) or (folder):were we are previously storing them for the (production) environment  mode: 
  .pipe(gulp.dest('./public/assets'));


});
