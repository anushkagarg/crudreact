const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let CrudDetails = new Schema({
  person_name: {
    type: String
  },
  business_name: {
    type: String
  },
  business_gst_number: {
    type: Number
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('CrudDetails', CrudDetails);