const Request = require('../services/request.js');

const PubData = function(url) {
  this.url = url;
  this.data = [];
};

PubData.prototype.getData = function(onComplete) {
  const request = new Request(this.url);
  request.get((data) => {
    this.data = data;
    onComplete(data);
  });
};


module.exports = PubData;
