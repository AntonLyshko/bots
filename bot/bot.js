const fs = require('fs');
const connectDB = require('./config/db');
const Auto = require('./models/Auto');

const start = async () => {
  await connectDB();
  await ParseAndSave();
};

const ParseAndSave = () => {
  let rawdata = fs.readFileSync('./assets/cars.json');
  let data = JSON.parse(rawdata);
  for (key in data) {
    let name = `${key}.name`;
    let gearbox = `${key}.gearbox`;
    let cost = data[key].cost;
    let price = data[key].price;
    let year = `${key}.year`;
    let drive = `${key}.drive`;
    let fuel = `${key}.fuel`;
    let seats = `${key}.seats`;
    let desc = `${key}.desc`;
    let name_id = key;
    let auto = new Auto({
      name_id,
      name,
      gearbox,
      cost,
      price,
      year,
      fuel,
      seats,
      drive,
      desc,
    });
    console.log(auto);
    auto.save();
  }
};

start();
