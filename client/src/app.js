const PubView = require('./views/pub_view.js');
const PubData = require('./models/pub_data.js');
const Request = require('./services/request.js');
const MapWrapper = require('./views/map_wrapper.js');
const Pub = require('./models/pub.js');

const request = new Request('http://localhost:3000/');

document.addEventListener('DOMContentLoaded', () => {

  const mapContainer = document.querySelector('#main-map');

  const pubSelect = document.querySelector('#pub-select');
  const pubDetailContainer = document.querySelector('#pub-detail-container');
  const pubListContainer = document.querySelector('#pub-list-container');
  const pubDistanceContainer = document.querySelector('#pub-distance-list-container');
  const pubView = new PubView(pubSelect, pubDetailContainer, pubListContainer, pubDistanceContainer);
  const searchBar = document.querySelector('#search-autocomplete');
  const pubData = new PubData('http://localhost:3000/crft/');


  const pubsArray = [];
  pubData.getData((data) => {
    // const center = {lat: 55.953251, lng: -3.188267 };
    const map = new MapWrapper(mapContainer, {lat: 0, lng: 0}, 15);
    map.setCenterThroughGeolocation(() => {
      data.forEach((pub) => {
        const newPub = new Pub(pub.name, pub.address, pub.tel, pub.opening_hours);
        getLatLngFromAddress(pub.address, (latLng) => {
          newPub.latLng = latLng;
          map.addMarker(latLng);
          map.getDistance([center], [latLng], (results) => {
            newPub.distance = results[0].distance.value;
            pubsArray.push(newPub);
            pubsArray.sort(function (pubA, pubB) {
              return pubA.distance - pubB.distance;
            });
          });
        });
        map.autocomplete(searchBar, (placeResult) => {
          const lat = placeResult.geometry.location.lat();
          const lng = placeResult.geometry.location.lng();
          postition = {lat: lat, lng: lng};
          map.setCenter(position);
        });
      });
      console.log(pubsArray);
    });
  });

  const geocoder = new google.maps.Geocoder();

  const getLatLngFromAddress = function(address, callback) {
    let latLng;
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        latLng = { lat: lat, lng: lng };
        callback(latLng);
      };
      return;
    });
  };


  const ayeButton = document.querySelector("#aye");
  ayeButton.addEventListener('click', function (){
    scrollTo({
      top: 1000,
      behavior: "smooth"
    });

    setTimeout(()=> {const body = document.querySelector("body");
    body.style.overflow = 'auto';}, 600);


    let splashImage = document.querySelector("#splash-screen");
    // splashImage.style.height = '30vh';
    setTimeout(removeSplashImage, 500);

  });
  const removeSplashImage = function(){
    let splashImage = document.querySelector("#splash-screen");
    splashImage.style.display = 'none';
  }



});
