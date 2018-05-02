const Pub = function (name, address, tel, opening_hours, latLng){
  this.name = name;
  this.address = address;
  this.tel = tel;
  this.opening_hours = opening_hours;
  this.latLng = latLng;
};

Pub.prototype.getLatLng = function (latLng) {
  this.latLng = latLng;
};

module.exports = Pub;
