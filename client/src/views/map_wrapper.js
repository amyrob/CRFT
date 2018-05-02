const MapWrapper = function (container, center, zoomLevel) {

  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoomLevel
  });

  this.markers = [];
  this.center = center;

};

MapWrapper.prototype.addMarker = function (coords) {
  const image = {url: "/styles/pint-glass-icon-25.png",
  scaledSize: new google.maps.Size(50, 50),
  origin: new google.maps.Point(0,0),
  anchor: new google.maps.Point(0, 0) };
  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: coords,
    animation: google.maps.Animation.DROP,
    icon: image
  });
  this.markers.push(marker);
};

MapWrapper.prototype.addClickListener = function () {
  google.maps.event.addListener(this.googleMap, 'click', (evt) => {
    const lat = evt.latLng.lat();
    const lng = evt.latLng.lng();
    this.addMarker({lat: lat, lng: lng});
  });
};

// MapWrapper.prototype.center = function (lat, lng ) {
//   this.googleMap.setCenter({lat: lat, lng: lng});
//   console.log(lat, lng);
// };

MapWrapper.prototype.getDistance = function(origins, destinations, callback) {

  function onComplete(response, status) {
    if (status == 'OK') {
      const origins = response.originAddresses;
      const destinations = response.destinationAddresses;
      let results = [];

      for (let i = 0; i < origins.length; i++) {
        results = response.rows[i].elements;
        for (let j = 0; j < results.length; j++) {
          const element = results[j];
          const distance = element.distance.value;
          const duration = element.duration.text;
          const from = origins[i];
          const to = destinations[j];
        };
      };
      callback(results);
    };
  };

  const service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: origins,
      destinations: destinations,
      travelMode: 'WALKING',
      unitSystem: google.maps.UnitSystem.IMPERIAL,
    }, onComplete
  );
};

MapWrapper.prototype.setCenterThroughGeolocation = function() {
  let map = this.googleMap;
  let centerMarker;
  centerMarker = new google.maps.Marker ({
    map: this.googleMap,
    animation: google.maps.Animation.DROP
  });
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      centerMarker.setPosition(pos);
      // infoWindow.setContent('Location found.');
      // infoWindow.open(map);
      this.center = pos;
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, map.getCenter());
    })
  } else {
    this.center = {lat: 55.953251, lng: -3.188267 };
    map.setCenter(this.center);
    handleLocationError(false, map.getCenter());
  }
  function handleLocationError(browserHasGeolocation, pos) {
    // infoWindow.setPosition(pos);
    // infoWindow.setContent(browserHasGeolocation ?
    //   `Error: The Geolocation service failed.` :
    //   `Error: Your browser doesn't support geolocation.`);
    //   infoWindow.open(map);
    console.log('ERROR WITH GEOLOCATION');
  };
};


module.exports = MapWrapper;
