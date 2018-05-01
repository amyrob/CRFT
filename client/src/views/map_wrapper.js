const MapWrapper = function (container, center, zoomLevel) {

  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoomLevel
  });

  this.markers = [];
};

MapWrapper.prototype.addMarker = function (coords) {
  const marker = new google.maps.Marker({
    map: this.googleMap,
    position: coords,
    animation: google.maps.Animation.DROP
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

MapWrapper.prototype.center = function (lat, lng ) {
  this.googleMap.setCenter({lat: lat, lng: lng});
  console.log(lat, lng);
};

MapWrapper.prototype.getDistance = function(origins, destinations) {
  const service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
    {
      origins: origins,
      destinations: destinations,
      travelMode: 'WALKING',
      unitSystem: google.maps.UnitSystem.IMPERIAL,
    }, onComplete
  );
  function onComplete(response, status) {
    if (status == 'OK') {
      const origins = response.originAddresses;
      const destinations = response.destinationAddresses;
      let results = [];

      for (let i = 0; i < origins.length; i++) {
        results = response.rows[i].elements;
        for (let j = 0; j < results.length; j++) {
          const element = results[j];
          const distance = element.distance.text;
          const duration = element.duration.text;
          const from = origins[i];
          const to = destinations[j];
          // resultsArray.push(element);
        }
      } console.log(results);
      }
    }
};


module.exports = MapWrapper;
