const Pub = function (name, address, tel, opening_hours){
  this.name = name;
  this.address = address;
  this.tel = tel;
  this.opening_hours = opening_hours;
  this.latLng = null;
  this.distance = null;
};


module.exports = Pub;
