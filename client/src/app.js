const PubView = require('./views/pub_view.js');
const PubData = require('./models/pub_data.js');
const Request = require('./services/request.js');
const MapWrapper = require('./views/map_wrapper.js');

const request = new Request('http://localhost:3000/');
const geoRequest = new Request('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyANgDsBmHtPFYb8GbPZu1hJnGn8cwTlXBQ');

document.addEventListener('DOMContentLoaded', () => {

  const mapContainer = document.querySelector('#main-map');
  // const defaultCenter = { lat: 55.946962, lng: -3.201958 };

  const map = new MapWrapper(mapContainer, {lat: 0, lng: 0}, 15);

  const pubSelect = document.querySelector('#pub-select');
  const pubDetailContainer = document.querySelector('#pub-detail-container');
  const pubListContainer = document.querySelector('#pub-list-container');
  const pubView = new PubView(pubSelect, pubDetailContainer, pubListContainer);

  const pubData = new PubData('http://localhost:3000/crft/');

  navigator.geolocation.getCurrentPosition(function(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    console.log(lat, lng);
    map.addMarker({lat, lng});
    console.log('center func', map.center);
    map.center(lat, lng);
  });

  pubSelect.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    const selectedPub = pubData.data[selectedIndex];
    pubView.renderDetail(selectedPub);
  });

  map.getDistance([{ lat: 55.946962, lng: -3.201958 }, { lat: 55.946962, lng: -3.201958 }], [{lat: 55.969565, lng: -3.183620}, {lat: 55.947341, lng: -3.206706}]);

  pubData.getData((data) => {
    pubView.renderSelect(data);
    pubView.renderList(data);
    data.forEach((pub) => {
      map.addMarker(pubView.getLatLng(pub));
    });
  });

});
