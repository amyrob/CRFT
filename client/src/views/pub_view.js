const PubView = function(pubSelect, pubDetailContainer, pubListContainer) {
  this.pubSelect = pubSelect;
  this.pubContainer = pubDetailContainer;
  this.pubListContainer = pubListContainer;
};

PubView.prototype.renderSelect = function(pubData) {
  pubData.forEach((pub, index) => {
    const pubOption = document.createElement('option');
    pubOption.textContent = pub.name;
    pubOption.value = index;
    this.pubSelect.appendChild(pubOption);
  });
};

PubView.prototype.renderList = function(pubData) {
  const pubList = document.createElement('ul');
  pubData.forEach((pub) => {
    const pubListItem = document.createElement('li');
    pubListItem.textContent = pub.name;
    pubList.appendChild(pubListItem);
  });
  this.pubListContainer.appendChild(pubList);
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
