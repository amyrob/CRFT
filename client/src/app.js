const PubView = require('./views/pub_view.js');
const PubData = require('./models/pub_data.js');
const Request = require('./services/request.js');
const MapWrapper = require('./views/map_wrapper.js');

const request = new Request('http://localhost:3000/');
const geoRequest = new Request('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyANgDsBmHtPFYb8GbPZu1hJnGn8cwTlXBQ');

document.addEventListener('DOMContentLoaded', () => {

  const mapContainer = document.querySelector('#main-map');
  const defaultCenter = { lat: 55.946962, lng: -3.201958 };

  const map = new MapWrapper(mapContainer, defaultCenter, 15);

  const pubSelect = document.querySelector('#pub-select');
  const pubContainer = document.querySelector('#pub-list-container');
  const pubView = new PubView(pubSelect, pubContainer);

  const pubData = new PubData('http://localhost:3000/crft/');



  pubSelect.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    const selectedPub = pubData.data[selectedIndex];
    pubView.renderDetail(selectedPub);
  });

  pubData.getData((data) => {
    pubView.renderSelect(data);
    data.forEach((pub) => {
      map.addMarker(pubView.getLatLng(pub));
    });
  });


});
