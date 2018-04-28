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

PubView.prototype.renderDetail = function() {

};

module.exports = PubView;
