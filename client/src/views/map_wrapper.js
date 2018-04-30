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

module.exports = MapWrapper;
