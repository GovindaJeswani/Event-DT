const { MongoClient } = require("mongodb");

const url =
//   "mongodb+srv://college:college@123@college1.l8avi.mongodb.net/college1?retryWrites=true&w=majority";
  "mongodb+srv://college:zJlGkmIKZeS4XMas@college1.l8avi.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);

module.exports = client;