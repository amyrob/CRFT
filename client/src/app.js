const PubView = require('./views/pub_view.js');
const Request = require('./services/request.js');

const pubView = new PubView();
const request = new Request('http://localhost:3000/');
