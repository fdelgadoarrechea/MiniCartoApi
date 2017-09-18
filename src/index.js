import mapconfig from './mapconfig.json';
import ConfigReader from './configreader.js';
import CartoTemplate from './cartotemplate.js';
import MapRenderer from './maprenderer.js';

let config = new ConfigReader(mapconfig);

function validateResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function readResponseAsJSON(response) {
    return response.json();
}

function renderResult(mapsAPIresponse) {
    let cartoLayer = new CartoTemplate(mapsAPIresponse, config.getUser());

    config.pushCartoLayer(cartoLayer.getTemplateURL());
    let renderer = new MapRenderer(config.getCenter(), config.getZoom());

    renderer.renderMap('mapid');
    renderer.renderLayers(config.getLayers());
}

function logError(error) {
    console.log('Looks like there was a problem: \n', error);
}

fetch(config.getURL(), {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(config.getMapConfig()),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then(validateResponse).then(readResponseAsJSON).then(renderResult).catch(logError);
