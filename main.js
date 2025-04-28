// Your Access Token here:
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NTY4MWEyMC01NDg2LTRjYWEtODExOS0zMjQ3NGNiNDZkMmMiLCJpZCI6MjYwMTgwLCJpYXQiOjE3MzMzNjE1MDN9.OIim-jXbq3AfbnBU2rS2SGRG4DKwO88JR_2ycGIEk8w';

const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain(),
    timeline: true,
    animation: true,
    shouldAnimate: true
});

// Load your BK building model
const bkTileset = viewer.scene.primitives.add(
    await Cesium.Cesium3DTileset.fromIonAssetId(2955578)
);

// Zoom to your building
viewer.zoomTo(bkTileset);
