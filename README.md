# Carto Engine Test

Based on Webpack library starter, a boilerplate for producing libraries (Input: ES6, Output: universal library)

## Getting started

Just hit index.html and it will load the map (Goal 1 of the Engine Test). If you want to see the internals, check the `src` folder. In case you want to change or load a new mapconfig.json, put it in the `src` folder and then build the library again. To do so, follow the steps:   

1. Build the library
  * Run `npm install` to get the project's dependencies
  * Run `npm run build` to produce minified version of your library.
3. Development mode
  * Having all the dependencies installed run `npm run dev`. This command will generate an non-minified version of the library and will run a watcher so you get the compilation on file change.
4. Running the tests (there are no tests yet)
  * Run `npm run test`

## Scripts

* `npm run build` - produces production version of the library under the `lib` folder
* `npm run dev` - produces development version of the library and runs a watcher
* `npm run test` - well ... it runs the tests :)
* `npm run test:watch` - same as above but in a watch mode
