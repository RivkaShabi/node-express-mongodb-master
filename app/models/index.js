const dbConfig = require("../config/db.config.js");
console.log(dbConfig.url)
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.places = require("./place.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);
db.commands = require("./command.model.js")(mongoose);
module.exports = db;