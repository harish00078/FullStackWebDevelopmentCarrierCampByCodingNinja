// here we are setting-up the (gulp) for our  application development:

// for that first we have to import the (gulp):

const gulp = require('gulp');

// second we have to import the (gulp-sass) library:through which we are converting our (sass) code into the (css) code:
const sass = require('gulp-sass');

// third we have to import the (gulp-cssnano) library:through which we are compresing our (css) code:
const cssnano = require('gulp-cssnano');

// fourth we have to import the (gulp-rev) library:through which we can modified our (code) file-names:
// so that we can differentiate between the newer (code) files that we are sending to the (browser) with the (older) onces which were already present there:
// this library basically add the (hashcode) with the code (file-name):so that we can creating differentiate between newer and the older files:
const rev = require('gulp-rev');


// => for using (gulp):we have to create (tasks):

// here we create one of the (task):In this task we are (minifinig) or we can say (compressing) the (css):
// we gave a name to this task is (css):
gulp.task('css',function(){

  console.log('minifying css...');

  // first we have to provide the source of the (folder) or (files) to the (gulp):that we want to compress:
  // here double stars (**) means every folder or every sub-folder which is present in the (sass) folder:
  // and single star (*) means every file with extension (.scss):which where present on those (folders):we want to compress:
  gulp.src('./assets/sass/**/*.scss')

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
  .pipe(gulp.dest('./assets.css'));


  // after compressing the (files) and (stored) them in the folder:
  // IMP = know we have to return them with the (changed-name):so that the browser compiler can differentiate between the (older) files with the (newer) files:


  

})