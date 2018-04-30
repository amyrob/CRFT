use CRFT_db;

db.dropDatabase();

db.pubs.insert(
  {
    "name": "The Hanging Bat",
    "address": "133 Lothian Road, EH3 9AB",
    "tel": "0131 229 0759",
    "opening_hours": "12pm - 1am",
    "lat": "55.9455186",
    "lng": "-3.2073469"
  }
);

db.pubs.insert(
  {
    "name": "Red Squirrel",
    "address": "21 Lothian Road, EH1 2DJ",
    "tel": "0131 229 9933",
    "opening_hours": "Mon - Thurs, Sun: 9am - 12am, Fri & Sat: 9am - 1am ",
    "lat": "55.9478256",
    "lng": "-3.2081194"
  }
);

db.pubs.insert(
  {
    "name": "BrewDog",
    "address": "50 Lothian Road, EH3 9BY",
    "tel": "0131 228 2305",
    "opening_hours": "Mon - Fri: 12pm - 1am, Sat & Sun: 11am - 1am ",
    "lat": "55.9473165",
    "lng": "-3.2066772"
  }
);

db.pubs.find();
