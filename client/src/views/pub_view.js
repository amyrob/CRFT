const PubView = function(pubSelect, pubContainer) {
  this.pubSelect = pubSelect;
  this.pubContainer = pubContainer;
};

PubView.prototype.renderSelect = function(pubData) {
  pubData.forEach((pub, index) => {
    const pubOption = document.createElement('option');
    pubOption.textContent = pub.fart_type;
    pubOption.value = index;
    this.pubSelect.appendChild(pubOption);
  });
};

PubView.prototype.renderDetail = function(pub) {
  this.pubContainer.innerHTML = "";
  const pubDetail = document.createElement('p');
  pubDetail.textContent = pub.fart_type;
  this.pubContainer.appendChild(pubDetail);
};

module.exports = PubView;
