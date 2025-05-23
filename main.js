Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0NTY4MWEyMC01NDg2LTRjYWEtODExOS0zMjQ3NGNiNDZkMmMiLCJpZCI6MjYwMTgwLCJpYXQiOjE3MzMzNjE1MDN9.OIim-jXbq3AfbnBU2rS2SGRG4DKwO88JR_2ycGIEk8w';

async function startViewer() {
    const terrain = await Cesium.CesiumTerrainProvider.fromIonAssetId(1);
    const viewer = new Cesium.Viewer('cesiumContainer', {
        terrainProvider: terrain,
        timeline: true,
        animation: true,
        shouldAnimate: true
    });
    // Load BK building model
    const bkTileset = await Cesium.Cesium3DTileset.fromIonAssetId(2955578);
    viewer.scene.primitives.add(bkTileset);
    // Zoom to building
    viewer.zoomTo(bkTileset);    
}

//Dropdown functionality
async function loadRooms() {
    const response = await fetch('./bk_rooms.csv');
    const text = await response.text();

    const rows = text.split('\n').slice(1); // skip header row
    const select = document.getElementById('roomSelect');

    for (let row of rows) {
        if (row.trim() === "") continue; // skip empty lines

        const [shortName, longName, globalId] = row.split(',');

        const option = document.createElement('option');
        option.value = globalId.trim();  // Save GlobalId internally
        option.textContent = `${shortName.trim()} - ${longName.trim()}`;  // Human readable
        select.appendChild(option);
    }
}

startViewer();
loadRooms();


