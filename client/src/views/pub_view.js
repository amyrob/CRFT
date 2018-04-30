const PubView = function(pubSelect, pubContainer) {
  this.pubSelect = pubSelect;
  this.pubContainer = pubContainer;
};

PubView.prototype.renderSelect = function(pubData) {
  pubData.forEach((pub, index) => {
    const pubOption = document.createElement('option');
    pubOption.textContent = pub.name;
    pubOption.value = index;
    this.pubSelect.appendChild(pubOption);
  });
};

PubView.prototype.getLatLng = function(pub) {
    const lat = pub.lat;
    const lng = pub.lng;
    const latLng = {lat: lat, lng: lng};
    return latLng;
};

PubView.prototype.renderDetail = function(pub) {
  this.pubContainer.innerHTML = "";
  const pubDetail = document.createElement('p');
  pubDetail.textContent = pub.name;
  this.pubContainer.appendChild(pubDetail);
};

module.exports = PubView;
