# Carto Engine Test

Based on Webpack library starter, a webpack based boilerplate for producing libraries (Input: ES6, Output: universal library)

## Getting started

Just hit index.html and it will load the map (Goal 1 of the Engine Test). If you want to see the internals, check the `src` folder. 

1. Build the library
  * Run `npm install` to get the project's dependencies
  * Run `npm run build` to produce minified version of your library.
3. Development mode
  * Having all the dependencies installed run `npm run dev`. This command will generate an non-minified version of your library and will run a watcher so you get the compilation on file change.
4. Running the tests (there are no tests yet)
  * Run `npm run test`

## Scripts

* `npm run build` - produces production version of your library under the `lib` folder
* `npm run dev` - produces development version of your library and runs a watcher
* `npm run test` - well ... it runs the tests :)
* `npm run test:watch` - same as above but in a watch mode
