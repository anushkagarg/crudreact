const express = require('express');
const detailsRoutes = express.Router();

// Require Business model in our routes module
let CrudDetails = require('./details.model');

// Defined store route
detailsRoutes.route('/add').post(function (req, res) {
  let business = new CrudDetails(req.body);
  business.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
detailsRoutes.route('/').get(function (req, res) {
    CrudDetails.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// Defined edit route
detailsRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  CrudDetails.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
detailsRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
        business.name = req.body.name;
        business.mail = req.body.mail;
        business.phone_number = req.body.phone_number;


        business.save().then(business => {
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
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = detailsRoutes;
