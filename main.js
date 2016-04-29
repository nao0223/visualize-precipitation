//# require=d3,leaflet,es6-promise.min,leaflet.label



const HOME_LAT = 34.186121;   //山口市役所
const HOME_LNG = 131.470500;  //山口市役所
const ZOOM=10;

d3.select(root)
  .append('div')
  .attr('id', 'map-container')

d3.select('#map-container')
  .style({
      'height': root.clientHeight + 'px',
      'width': root.clientWidth + 'px'
  })

var svg = d3.select('#map-container').select("svg");
var g = svg.append("g");


  


// しぇあひるずを中心に表示  setView([緯度, 経度], ズーム)
var mapLayer = L.map('map-container').setView([HOME_LAT, HOME_LNG], ZOOM);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors',
}).addTo(mapLayer);





function update(data) {
    const AREA_LABEL = data[0][0];
    const SPOT_NAME_LABEL = data[0][1];
    const LAT_LABEL = data[0][4];
    const LNG_LABEL = data[0][5];
    const AME=data[0][6];
rainmount=data[1][6];


var greenIcon=[];
var k;

greenIcon0 = L.icon({
    iconUrl: 'marker-icon-blue.png',
    iconSize:     [10,10], // size of the icon
});

greenIcon1 = L.icon({
    iconUrl: 'marker-icon-blue.png',
    iconSize:     [30,30], // size of the icon
});

greenIcon2 = L.icon({
    iconUrl: 'marker-icon-blue.png',
    iconSize:     [50,50], // size of the icon
});

greenIcon3 = L.icon({
    iconUrl: 'marker-icon-blue.png',
    iconSize:     [70,70], // size of the icon
});

greenIcon4 = L.icon({
    iconUrl: 'marker-icon-blue.png',
    iconSize:     [90,90], // size of the icon
});

greenIcon5 = L.icon({
    iconUrl: 'marker-icon-blue.png',
    iconSize:     [110,110], // size of the icon
});

greenIcon6 = L.icon({
    iconUrl: 'marker-icon-blue.png',
    iconSize:     [130,130], // size of the icon
})

greenIcon7 = L.icon({
    iconUrl: 'marker-icon-blue.png',
    iconSize:     [150,150], // size of the icon
});

greenIcon8 = L.icon({
    iconUrl: 'marker-icon-blue.png',
    iconSize:     [170,170], // size of the icon
});

greenIcon9 = L.icon({
    iconUrl: 'marker-icon-blue.png',
    iconSize:     [190,190], // size of the icon
})










    var listData = data.toList();
k=10;

   listData.forEach(function(spot) {




var icon1;
k=spot[AME];

if(k<60)
{icon1=greenIcon0;}
else if(k<70)
{icon1=greenIcon1;}
else if(k<80)
{icon1=greenIcon2;}
else if(k<90)
{icon1=greenIcon3;}
else if(k<100)
{icon1=greenIcon4;}
else if(k<110)
{icon1=greenIcon5;}
else if(k<120)
{icon1=greenIcon6;}
else if(k<130)
{icon1=greenIcon7;}
else if(k<140)
{icon1=greenIcon8;}
else
{icon1=greenIcon9;}







   console.log(spot[AME]);
        var marker = L.marker([spot[LAT_LABEL], spot[LNG_LABEL]],{icon:icon1})
          .addTo(mapLayer)
//          .bindPopup("AAAAA");
          .bindPopup(spot[SPOT_NAME_LABEL] +" " + spot[AME]+ "mm" );








    });


var info = L.control();

info.onAdd = function (mapLayer) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h1>★2016年３月降雨量総量(mm)★</h1>'+'<h1>山口県</h1>';
};


//info.update = function (props) {
  //  this._div.innerHTML = '<h1>2016年３月降雨量総量(mm)</h1>' +  (props ?
    //    '<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
      //  : '山口県');
//};


info.addTo(mapLayer);


}

