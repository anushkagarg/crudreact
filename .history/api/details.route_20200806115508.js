const express = require('express');
const detailsRoutes = express.Router();

// Require Business model in our routes module
let CrudDetails = require('./details.model');

// Defined store route
detailsRoutes.route('/add').post(function (req, res) {
  let cruddetails = new CrudDetails(req.body);
  cruddetails.save()
    .then(cruddetails => {
      res.status(200).json({'details': 'data in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
detailsRoutes.route('/').get(function (req, res) {
    CrudDetails.find(function(err, cruddetails){
    if(err){
      console.log(err);
    }
    else {
      res.json(cruddetails);
    }
  });
});

// Defined edit route
detailsRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  CrudDetails.findById(id, function (err, cruddetails){
      res.json(cruddetails);
  });
});

//  Defined update route
detailsRoutes.route('/update/:id').post(function (req, res) {
    CrudDetails.findById(req.params.id, function(err, cruddetails) {
    if (!cruddetails)
      res.status(404).send("data is not found");
    else {
        cruddetails.name = req.body.name;
        cruddetails.mail = req.body.mail;
        cruddetails.phone_number = req.body.phone_number;
        cruddetails.d

        cruddetails.save().then(cruddetails => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
detailsRoutes.route('/delete/:id').get(function (req, res) {
    CrudDetails.findByIdAndRemove({_id: req.params.id}, function(err, cruddetails){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = detailsRoutes;
