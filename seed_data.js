use CRFT_db;

db.dropDatabase();

db.pubs.insert(
  {
    "name": "The Hanging Bat",
    "address": "133 Lothian Road, EH3 9AB",
    "tel": "0131 229 0759",
    "opening_hours": "12pm - 1am",
    "lat": 55.9455186,
    "lng": -3.2073469
  }
);

db.pubs.insert(
  {
    "name": "Red Squirrel",
    "address": "21 Lothian Road, EH1 2DJ",
    "tel": "0131 229 9933",
    "opening_hours": "Mon - Thurs, Sun: 9am - 12am, Fri & Sat: 9am - 1am ",
    "lat": 55.9478256,
    "lng": -3.2081194
  }
);

db.pubs.insert(
  {
    "name": "BrewDog",
    "address": "50 Lothian Road, EH3 9BY",
    "tel": "0131 228 2305",
    "opening_hours": "Mon - Fri: 12pm - 1am, Sat & Sun: 11am - 1am ",
    "lat": 55.947341,
    "lng": -3.206706
  }
);

db.pubs.insert(
  {
    "name": "Victoria Bar",
    "address": "265 Leith Walk, EH6 8PD",
    "tel": "0131 555 1638",
    "opening_hours": "Mon - Fri: 2pm - 1am, Sat: 12pm - 1am, Sun: 1pm - 12am ",
    "lat": 55.969565,
    "lng": -3.183620
  }
);

db.pubs.insert(
  {
    "name": "Campervan Brewery Taproom",
    "address": "112 Jane Street, EH6 5HG",
    "tel": "0131 555 3373",
    "opening_hours": "Fri: 5pm - 10pm, Sat: 2pm - 9pm",
    "lat": 55.970939,
    "lng": -3.1797667
  }
);

db.pubs.find();
