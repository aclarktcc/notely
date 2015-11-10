
var db = require('mongoose');
db.connect("mongodb://notelyu:notelyp@ds053164.mongolab.com:53164/notelydb");

module.exports = db;
