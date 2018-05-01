const PubView = function(pubSelect, pubDetailContainer, pubListContainer, distanceListContainer) {
  this.pubSelect = pubSelect;
  this.pubContainer = pubDetailContainer;
  this.pubListContainer = pubListContainer;
  this.distanceListContainer = distanceListContainer;

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

PubView.prototype.renderDistanceList = function(pubData, map, origin) {
  const distanceList = document.createElement('ul');
  pubData.forEach((pub) => {
    const distanceListItem = document.createElement('li');
    const lat = pub.lat;
    const lng = pub.lng;
    const latLng = [{lat: lat, lng: lng}];


    map.getDistance(origin, latLng, (results) => {
      distanceListItem.textContent = `${pub.name}, distance: ${results[0].distance.text} `;
      distanceList.appendChild(distanceListItem);
    });
  });
  this.distanceListContainer.appendChild(distanceList);
};

// const populateDistances = function(results){
//   distances.forEach
// }

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
