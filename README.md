# Mini Carto Api

Small library that renders a map and layers with Leaflet + Carto, based on the data provided by a mapconfig.json file. It also has a little API to show/hide any of the layers and change the selected countries via Carto SQL.

## Getting started

1. Build the library
  * Run `npm install` to get the project's dependencies
  * Run `npm run build` to produce minified version of your library.
3. Development mode
  * Having all the dependencies installed run `npm run dev`. This command will generate an non-minified version of the library and will run a watcher so you get the compilation on file change.
4. Running the tests
  * Run `npm run test`

## Testing the API

Open index.html, hit the console and type `var carto = new CartoTest();` then:

* `carto.initAll();` - to initialize the map and load all the layers
* `carto.setSQL("select * from european_countries_e LIMIT 10");` - to change the SQL of the Carto layer and fetch new tiles
* `carto.hideLayer(0);` - hide layer 0, also you may hide layer 1 and/or 2
* `carto.showLayer(1);` - show layer 1, also you may show layer 0 and/or 2

## Scripts

* `npm run build` - produces production version of the library under the `lib` folder
* `npm run dev` - produces development version of the library and runs a watcher
* `npm run test` - well ... it runs the tests :)
* `npm run test:watch` - same as above but in a watch mode
