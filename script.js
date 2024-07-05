document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map', {
                        center: [52.289441, 4.852640],
                        zoom: 13,
                        minZoom: 13
                    });

    L.tileLayer('https://api.maptiler.com/maps/nl-cartiqo-light/{z}/{x}/{y}.png?key=0MDV6Trq9vv0OTbxV1dZ', {attribution: '<a href="https://cartiqo.nl/" target="_blank">© Cartiqo</a> <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>'}).addTo(map);



    var stadshart = L.polygon([
        [52.303210, 4.871963],
        [52.298454, 4.868998],
        [52.303414, 4.849920],
        [52.305347, 4.852929],
        [52.306292, 4.856511],
        [52.306206, 4.860093]
    ]
    ).addTo(map);
    var stadshartIcon = L.divIcon({
        className: 'polygon-label',
        html: "Stadshart"
    });
    var center = stadshart.getBounds().getCenter();
    var marker = L.marker(center, { icon: stadshartIcon }).addTo(map);

    var randwijck = L.polygon([
        [52.313490, 4.853524],
        [52.313277, 4.863290],
        [52.314494, 4.863615],
        [52.315899, 4.870619],
        [52.319514, 4.869312],
        [52.321924, 4.869136],
        [52.321785, 4.861794],
        [52.321863, 4.861546],
        [52.321799, 4.858123],
        [52.321638, 4.857699],
        [52.321665, 4.856505],
        [52.318885, 4.856424],
        [52.316604, 4.855738],
        [52.314865, 4.854992]
    ]
    ).addTo(map);
    var randwijckIcon = L.divIcon({
        className: 'polygon-label',
        html: "Randwijck"
    });
    var marker = L.marker([52.318290, 4.859489], { icon: randwijckIcon }).addTo(map);

    var patrimonium = L.polygon([
        [52.316391, 4.855709],
        [52.316491, 4.852095],
        [52.316925, 4.848685],
        [52.316827, 4.847158],
        [52.316741, 4.840890],
        [52.311497, 4.841111],
        [52.307910, 4.841633],
        [52.304996, 4.840098],
        [52.304285, 4.846230],
        [52.303454, 4.849879],
        [52.304725, 4.850526],
        [52.310827, 4.850742],
        [52.312290, 4.851800],
        [52.314280, 4.854526],
        [52.316378, 4.855703]
    ]
    ).addTo(map);
    var patrimoniumIcon = L.divIcon({
        className: 'polygon-label',
        html: "Patrimonium"
    });
    var marker = L.marker([52.311157, 4.844186], { icon: patrimoniumIcon }).addTo(map);

    var elsrijk = L.polygon([
        [52.315894, 4.870611],
        [52.314680, 4.863952],
        [52.314324, 4.863433],
        [52.313267, 4.863306],
        [52.313492, 4.853510],
        [52.312075, 4.851526],
        [52.310792, 4.850744],
        [52.304812, 4.850508],
        [52.303706, 4.850137],
        [52.304619, 4.851835],
        [52.305305, 4.852853],
        [52.306354, 4.857090],
        [52.306354, 4.857090],
        [52.305870, 4.861664],
        [52.303219, 4.871954],
        [52.304856, 4.872402],
        [52.310517, 4.872542],
        [52.312904, 4.872022]
    ]
    ).addTo(map);
    var elsrijkIcon = L.divIcon({
        className: 'polygon-label',
        html: "Elsrijk"
    });
    var center = elsrijk.getBounds().getCenter();
    var marker = L.marker(center, { icon: elsrijkIcon }).addTo(map);

    var uilenstede_kronenburg = L.polygon([
        [52.322147, 4.882111],
        [52.321967, 4.869397],
        [52.319196, 4.869519],
        [52.317880, 4.869693],
        [52.315896, 4.870613],
        [52.317526, 4.879946],
        [52.317582, 4.882690]
    ]
    ).addTo(map);
    var uilenstede_kronenburgIcon = L.divIcon({
        className: 'polygon-label',
        html: "Uilenstede\n/Kronenburg"
    });
    var marker = L.marker([52.321319, 4.871448], { icon: uilenstede_kronenburgIcon }).addTo(map);

    var bankras_kostverloren = L.polygon([
        [52.317607, 4.883912],
        [52.317536, 4.880069],
        [52.317175, 4.877739],
        [52.315892, 4.870619],
        [52.312829, 4.872041],
        [52.311232, 4.872484],
        [52.307796, 4.872508],
        [52.304882, 4.872402],
        [52.303832, 4.872230],
        [52.302244, 4.871372],
        [52.298452, 4.869011],
        [52.296681, 4.879311],
        [52.300932, 4.882058],
        [52.300775, 4.882959],
        [52.306994, 4.883302],
        [52.309578, 4.883423],
        [52.309755, 4.883170],
        [52.310686, 4.883069],
        [52.310720, 4.882371],
        [52.311730, 4.882414],
        [52.311887, 4.883337],
        [52.312792, 4.883661]
    ]
    ).addTo(map);
    var bankras_kostverlorenIcon = L.divIcon({
        className: 'polygon-label',
        html: "Bankras\n/Kostverloren"
    });
    var marker = L.marker([52.306925, 4.873622], { icon: bankras_kostverlorenIcon }).addTo(map);

    var keizer_karelpark = L.polygon([
        [52.298473, 4.868945],
        [52.301793, 4.854817],
        [52.303439, 4.849928],
        [52.302404, 4.848981],
        [52.299723, 4.845680],
        [52.292433, 4.843743],
        [52.286601, 4.842140],
        [52.284855, 4.855975],
        [52.285047, 4.858242],
        [52.286242, 4.860743],
        [52.290999, 4.864222]
    ]
    ).addTo(map);
    var keizer_karelparkIcon = L.divIcon({
        className: 'polygon-label',
        html: "Keizer Karelpark"
    });
    var center = keizer_karelpark.getBounds().getCenter();
    var marker = L.marker(center, { icon: keizer_karelparkIcon }).addTo(map);

    var groenelaan = L.polygon([
        [52.296693, 4.879280],
        [52.297422, 4.874075],
        [52.298443, 4.868986],
        [52.287930, 4.861937],
        [52.286544, 4.861112],
        [52.285687, 4.860017],
        [52.284817, 4.861227],
        [52.284324, 4.861400],
        [52.283971, 4.861227],
        [52.281715, 4.869984],
        [52.281469, 4.869927],
        [52.281257, 4.871482],
        [52.292403, 4.877694],
        [52.292530, 4.877178],
        [52.294034, 4.877695]
    ]
    ).addTo(map);
    var groenelaanIcon = L.divIcon({
        className: 'polygon-label',
        html: "Groenelaan"
    });
    var marker = L.marker([52.289988, 4.865880], { icon: groenelaanIcon }).addTo(map);

    var waardhuizen_middenhoven = L.polygon([
        [52.281733, 4.869959],
        [52.283956, 4.861243],
        [52.284722, 4.861345],
        [52.285682, 4.860019],
        [52.285020, 4.857989],
        [52.284871, 4.856013],
        [52.286543, 4.842209],
        [52.277469, 4.839259],
        [52.275498, 4.853658],
        [52.273669, 4.867326],
        [52.274437, 4.867651],
        [52.274405, 4.867989],
        [52.274662, 4.868656],
        [52.275263, 4.868866],
        [52.275442, 4.869151],
        [52.278211, 4.869264]
    ]
    ).addTo(map);
    var waardhuizen_middenhovenIcon = L.divIcon({
        className: 'polygon-label',
        html: "Waardhuizen/Middenhoven"
    });
    var marker = L.marker([52.281429, 4.844285], { icon: waardhuizen_middenhovenIcon }).addTo(map);

    var bovenkerk_westwijknoord = L.polygon([
        [52.291599, 4.843605],
        [52.291666, 4.842914],
        [52.292244, 4.840180],
        [52.292551, 4.840409],
        [52.293841, 4.834822],
        [52.294021, 4.834941],
        [52.294274, 4.833956],
        [52.293889, 4.833332],
        [52.293871, 4.832364],
        [52.293489, 4.831529],
        [52.293617, 4.831387],
        [52.293485, 4.830979],
        [52.293276, 4.830379],
        [52.293155, 4.830484],
        [52.293058, 4.830246],
        [52.293011, 4.830295],
        [52.291951, 4.827103],
        [52.292082, 4.826963],
        [52.291997, 4.826733],
        [52.291814, 4.826885],
        [52.291678, 4.826562],
        [52.291546, 4.826645],
        [52.291392, 4.826139],
        [52.291579, 4.825993],
        [52.291341, 4.825244],
        [52.291237, 4.825343],
        [52.290434, 4.823591],
        [52.289855, 4.824329],
        [52.281586, 4.815268],
        [52.279792, 4.821661],
        [52.280456, 4.822423],
        [52.279900, 4.824094],
        [52.278159, 4.822863],
        [52.275737, 4.831337],
        [52.279415, 4.834474],
        [52.278751, 4.839752],
        [52.286572, 4.842128]
    ]
    ).addTo(map);
    var bovenkerk_westwijknoordIcon = L.divIcon({
        className: 'polygon-label',
        html: "Bovenkerk/Westwijk Noord"
    });
    var marker = L.marker([52.286476, 4.823041], { icon: bovenkerk_westwijknoordIcon }).addTo(map);

    var westwijksouth = L.polygon([
        [52.278686, 4.839685],
        [52.279403, 4.834448],
        [52.275673, 4.831530],
        [52.278144, 4.822828],
        [52.279913, 4.824131],
        [52.280487, 4.822411],
        [52.279897, 4.821968],
        [52.281587, 4.815221],
        [52.276807, 4.810293],
        [52.269471, 4.836249]
    ]
    ).addTo(map);
    var westwijksouthIcon = L.divIcon({
        className: 'polygon-label',
        html: "Westwijk South"
    });
    var center = westwijksouth.getBounds().getCenter();
    var marker = L.marker(center, { icon: westwijksouthIcon }).addTo(map);

    var amsterdamsebos = L.polygon([
        [52.330762, 4.856429],
        [52.330868, 4.846542],
        [52.329384, 4.839691],
        [52.327741, 4.839430],
        [52.326309, 4.818356],
        [52.323977, 4.819136],
        [52.313215, 4.815840],
        [52.306113, 4.809817],
        [52.290155, 4.824355],
        [52.294194, 4.833815],
        [52.291555, 4.843595],
        [52.296955, 4.844917],
        [52.299669, 4.845666],
        [52.303422, 4.849911],
        [52.303416, 4.849894],
        [52.304282, 4.846503],
        [52.304951, 4.840090],
        [52.307375, 4.841587],
        [52.309619, 4.841418],
        [52.316671, 4.840828],
        [52.316877, 4.847534],
        [52.316942, 4.848631],
        [52.316491, 4.852005],
        [52.316491, 4.852005],
        [52.316400, 4.855813],
        [52.323732, 4.856518]

    ]
    ).addTo(map);
    var amsterdamsebosIcon = L.divIcon({
        className: 'polygon-label',
        html: "Amsterdamse Bos"
    });
    var marker = L.marker([52.314769, 4.821054], { icon: amsterdamsebosIcon }).addTo(map);

    var buitengebiednoord = L.polygon([
        [52.322561, 4.895259],
        [52.322150, 4.882090],
        [52.320065, 4.882197],
        [52.317569, 4.882423],
        [52.317613, 4.883955],
        [52.312798, 4.883663],
        [52.311884, 4.883299],
        [52.311706, 4.882423],
        [52.310703, 4.882460],
        [52.310658, 4.883116],
        [52.309699, 4.883226],
        [52.309588, 4.883444],
        [52.306979, 4.883335],
        [52.306994, 4.883302],
        [52.300801, 4.882916],
        [52.300932, 4.882058],
        [52.296660, 4.879356],
        [52.294801, 4.891165],
        [52.295519, 4.892899],
        [52.296080, 4.899989],
        [52.297031, 4.900918],
        [52.299619, 4.898070],
        [52.300780, 4.898771],
        [52.307036, 4.907294],
        [52.311480, 4.904523],
        [52.314532, 4.905566],
        [52.316192, 4.904825],
        [52.318539, 4.908473],
        [52.321020, 4.901835],
        [52.321915, 4.895877]

    ]
    ).addTo(map);
    var buitengebiednoordIcon = L.divIcon({
        className: 'polygon-label',
        html: "Buitengebied Nord"
    });
    var center = buitengebiednoord.getBounds().getCenter();
    var marker = L.marker(center, { icon: buitengebiednoordIcon }).addTo(map);

    var buitengebiedzuid = L.polygon([
        [52.294505, 4.891414],
        [52.296674, 4.879287],
        [52.292575, 4.877168],
        [52.292383, 4.877719],
        [52.281255, 4.871490],
        [52.281463, 4.869904],
        [52.278894, 4.869450],
        [52.277030, 4.869192],
        [52.277030, 4.869192],
        [52.274666, 4.868720],
        [52.274378, 4.867690],
        [52.273649, 4.867368],
        [52.277450, 4.839247],
        [52.269449, 4.835979],
        [52.277022, 4.811020],
        [52.261496, 4.796787],
        [52.257708, 4.808750],
        [52.258339, 4.814114],
        [52.248995, 4.843817],
        [52.242175, 4.852687],
        [52.246090, 4.854750],
        [52.252026, 4.868570],
        [52.261243, 4.872283],
        [52.264526, 4.881565],
        [52.279168, 4.878059],
        [52.284594, 4.884041]
    ]
    ).addTo(map);
    var buitengebiedzuidIcon = L.divIcon({
        className: 'polygon-label',
        html: "Buitengebied Zuid"
    });
    var center = buitengebiedzuid.getBounds().getCenter();
    var marker = L.marker(center, { icon: buitengebiedzuidIcon }).addTo(map);


    var areaNames = ["Randwijck","Patrimonium","Elsrijk","Stadshart","Uilenstede - Kronenburg","Bankras - Kostverloren","Buitengebied Noord","Keizer Karelpark","Groenelaan","Waardhuizen - Middenhoven","Bovenkerk - Westwijk Noord","Westwijk Zuid","Buitengebied Zuid","Amsterdamse Bos"];
    var polygonVariables = [randwijck,patrimonium,elsrijk,stadshart,uilenstede_kronenburg,bankras_kostverloren,buitengebiednoord,keizer_karelpark,groenelaan,waardhuizen_middenhoven,bovenkerk_westwijknoord,westwijksouth,buitengebiedzuid,amsterdamsebos];

    let selectedPeriod = 2022;

    function handlePeriodChange() {
        selectedPeriod = periodSelect.value;
        for (let i = 0; i < areaNames.length; i++) {
            updatePolygonData(areaNames[i], selectedPeriod, polygonVariables[i]);
        }
    }

    const periodSelect = document.getElementById('period');
    periodSelect.addEventListener('change', handlePeriodChange);

    function updatePolygonData(areaName, period, polygonVariable) {
        fetchData(areaName, period)
            .then(data => {
                const adjustedAFW = calculateAdjustedAFW(data);
                const color = assignColor(adjustedAFW);
                polygonVariable.setStyle({ fillColor: color, fillOpacity: 0.5, color: 'grey' });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }


    // initial data fetch for all polygons
    for (let i = 0; i < areaNames.length; i++) {

        updatePolygonData(areaNames[i], selectedPeriod, polygonVariables[i]);
    }

    async function fetchData(wk_naam_input, jaar_input) {

        const response = await fetch('AmstelveenDataWithDimensions.csv');
        const data = await response.text();
    
        const rows = data.split('\n');
   
        let lbm, afw, fys, onv, soc, vrz, won;
    
        // find matching row
        for (let i = 1; i < rows.length; i++) { 
            const columns = rows[i].split(',');
    
            const wk_naam = columns[2];
            const jaar = parseInt(columns[3]);
            console.log(wk_naam_input);
            console.log(wk_naam);
            if (wk_naam == wk_naam_input && jaar == jaar_input) {
                lbm = parseFloat(columns[3]);
                afw = parseFloat(columns[4]);
                fys = parseFloat(columns[5]);
                onv = parseFloat(columns[6]);
                soc = parseFloat(columns[7]);
                vrz = parseFloat(columns[8]);
                won = parseFloat(columns[9]);
                break;
            }
        }

        return { lbm, afw, fys, onv, soc, vrz, won };
    }
    

    function calculateAdjustedAFW(data) {
        const userWeights = getUserWeights();
        const totalWeight = Object.values(userWeights).reduce((a, b) => a + b, 0);
        const normalizedWeights = {};
        for (let dim in userWeights) {
            normalizedWeights[dim] = userWeights[dim] / totalWeight;
        }

        if (isNaN(data.fys)) {
            return data.afw;
        }

        let adjustedAFW = 0;
        adjustedAFW += normalizedWeights.fys * data.fys;
        adjustedAFW += normalizedWeights.onv * data.onv;
        adjustedAFW += normalizedWeights.soc * data.soc;
        adjustedAFW += normalizedWeights.vrz * data.vrz;
        adjustedAFW += normalizedWeights.won * data.won;

        return adjustedAFW;
    }

    function assignColor(score) {
        const categories = [-1, -0.75, -0.5, -0.25, 0, 0, 0.25, 0.5, 0.75, 1];
        const colors = ['#cf783f', '#d7995e', '#e0b881', '#fbf2c4', '#d0d2a6', '#a7b38a', '#819470', '#5e7657', '#3b5941'];

        // find the category for given score
        let categoryIndex = 0;
        while (categoryIndex < categories.length && score > categories[categoryIndex]) {
            categoryIndex++;
        }

        // return color corresponding to category
        console.log(categoryIndex);
        return colors[categoryIndex];
    }

    var user_weights = {
        'fys': 3,
        'onv': 3,
        'soc': 3,
        'vrz': 3,
        'won': 3
    };

    function getUserWeights() {
        return {
            'fys': parseInt(document.getElementById('p').value) - 1,
            'onv': parseInt(document.getElementById('s&n').value)- 1,
            'soc': parseInt(document.getElementById('sc').value)- 1,
            'vrz': parseInt(document.getElementById('s&n').value)- 1,
            'won': parseInt(document.getElementById('hs').value)- 1
        };
    };

    function handleSliderChange() {
        user_weights = getUserWeights();
        for (let i = 0; i < areaNames.length; i++) {
            updatePolygonData(areaNames[i], selectedPeriod, polygonVariables[i]);
        }
    }

    function showExplanation(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                const sidePanel = document.getElementById('side-panel');
                sidePanel.innerHTML = data;
                sidePanel.style.display = 'block';
            })
            .catch(error => {
                console.error('Error loading explanation:', error);
            });
    }

    // event listeners for the sliders
    document.getElementById('p').addEventListener('input', handleSliderChange);
    document.getElementById('hs').addEventListener('input', handleSliderChange);
    document.getElementById('s').addEventListener('input', handleSliderChange);
    document.getElementById('sc').addEventListener('input', handleSliderChange);
    document.getElementById('s&n').addEventListener('input', handleSliderChange);

    document.getElementById('toggle-list').addEventListener('click', function () {
        const listContainer = document.getElementById('list-container');
        const toggleButton = document.getElementById('toggle-list');
        if (listContainer.style.display === 'none') {
            listContainer.style.display = 'block';
            toggleButton.textContent = 'Hide List';
            updateNeighborhoodList();
        } else {
            listContainer.style.display = 'none';
            toggleButton.textContent = 'Display Ranked List of Neighborhoods';
        }
    });
    
    function updateNeighborhoodList() {
        const list = document.getElementById('neighborhood-list');
        list.innerHTML = ''; // Clear the list
        const scores = [];
        for (let i = 0; i < areaNames.length; i++) {
            fetchData(areaNames[i], selectedPeriod)
                .then(data => {
                    const adjustedAFW = calculateAdjustedAFW(data) + 4.102;
                    scores.push({ name: areaNames[i], score: adjustedAFW });
                    if (scores.length === areaNames.length) {
                        scores.sort((a, b) => b.score - a.score); // Sort descending
                        scores.forEach((entry, index) => {
                            const listItem = document.createElement('li');
                            listItem.innerHTML = `${index + 1}. <i>${entry.name}</i>: <b>${entry.score.toFixed(2)}</b>`;
                            list.appendChild(listItem);
                        });
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }
    
    document.getElementById('period').addEventListener('change', () => {
        handlePeriodChange();
        if (document.getElementById('list-container').style.display === 'block') {
            updateNeighborhoodList();
        }
    });
    
    function handleSliderChange() {
        user_weights = getUserWeights();
        for (let i = 0; i < areaNames.length; i++) {
            updatePolygonData(areaNames[i], selectedPeriod, polygonVariables[i]);
        }
        if (document.getElementById('list-container').style.display === 'block') {
            updateNeighborhoodList();
        }
    }
});

document.querySelectorAll('.label-button').forEach(function(button) {
    button.addEventListener('mouseover', function() {
        button.setAttribute('data-original-title', button.getAttribute('title'));
        button.removeAttribute('title');
    });
    button.addEventListener('mouseout', function() {
        button.setAttribute('title', button.getAttribute('data-original-title'));
        button.removeAttribute('data-original-title');
    });
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('p').value = 3;
    document.getElementById('hs').value = 3;
    document.getElementById('s').value = 3;
    document.getElementById('sc').value = 3;
    document.getElementById('s&n').value = 3;
    
    handleSliderChange();
});