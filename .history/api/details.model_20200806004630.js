const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let CrudDetails = new Schema({
  name: {
    type: String
  },
  mail: {
    type: String
  },
  phone_number: {
    type: Number
  },
  do
},{
    collection: 'cruddetails'
});

module.exports = mongoose.model('CrudDetails', CrudDetails);