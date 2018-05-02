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
    "name": "BrewDog Lothian Road",
    "address": "50 Lothian Road, EH3 9BY",
    "tel": "0131 228 2305",
    "opening_hours": "Mon - Fri: 12pm - 1am, Sat & Sun: 11am - 1am ",
    "lat": 55.9474447,
    "lng": -3.2066629
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

db.pubs.insert(
  {
    "name": "The Bow Bar",
    "address": "80 W Bow, EH1 2HH",
    "tel": "0131 226 7667",
    "opening_hours": "Mon - Sat: 12pm - 12am, Sun: 12pm - 11:30pm",
    "lat": 55.94835,
    "lng": -3.194529
  }
);

db.pubs.insert(
  {
    "name": "BrewDog Edinburgh",
    "address": "143 Cowgate, EH1 1JS",
    "tel": "0131 220 6517",
    "opening_hours": "Mon - Sun: 12pm - 1am",
    "lat": 55.970939,
    "lng": -3.1797667
  }
);

db.pubs.insert(
  {
    "name": "Guild of Foresters",
    "address": "40 Portobello High St, EH15 1DA",
    "tel": "0131 669 2750",
    "opening_hours": "Mon - Wed: 11am - 11pm, Thu: 11am - 12am, Fri: 11am - 1am, Sat: 10am - 1am, Sun: 10am - 11pm",
    "lat": 55.9551333,
    "lng": -3.117881
  }
);

db.pubs.insert(
  {
    "name": "The Southern Bar",
    "address": "22-26 S Clerk St, EH8 9PR",
    "tel": "0131 662 8926",
    "opening_hours": "Mon - Thu & Sun: 10am - 12am, Fri - Sat: 10am - 1am",
    "lat": 55.9406089,
    "lng": -3.1806886
  }
);

db.pubs.insert(
  {
    "name": "Cloisters",
    "address": "26 Brougham St, EH3 9JH",
    "tel": "0131 221 9997",
    "opening_hours": "Mon - Thu: 12pm - 12am, Fri - Sat: 12pm - 1am, Sun: 12pm - 12am",
    "lat": 55.9432639,
    "lng": -3.201966
  }
);

db.pubs.insert(
  {
    "name": "Six Degrees North",
    "address": "24 Howe St, EH3 6TG",
    "tel": "0131 225 6490",
    "opening_hours": "Mon - Thu: 4pm - 12am, Fri: 4pm - 1am, Sat: 12pm - 1am, Sun: 12pm - 12am",
    "lat": 55.9432639,
    "lng": -3.201966
  }
);

db.pubs.insert(
  {
    "name": "The Stockbridge Tap",
    "address": "2-6 Raeburn Pl, EH4 1HN",
    "tel": "0131 343 3000",
    "opening_hours": "Mon - Thu: 12pm - 12am, Fri - Sat: 12pm - 1am, Sun: 12:30pm - 12am",
    "lat": 55.9589388,
    "lng": -3.2099908
  }
);

db.pubs.find();
