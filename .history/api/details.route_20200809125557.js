const express = require("express");
const detailsRoutes = express.Router();

// Require Business model in our routes module
let CrudDetails = require("./details.model");

// Defined store route
detailsRoutes.route("/add").post(function (req, res) {
  let cruddetails = new CrudDetails(req.body);
  cruddetails
    .save()
    .then((cruddetails) => {
      res.status(200).json({ details: "data added successfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save database");
    });
});

// Defined get data(index or listing) route
detailsRoutes.route("/").get(function (req, res) {
  CrudDetails.find(function (err, cruddetailsss) {
    if (err) {
      console.log(err);
    } else {
      res.json(cruddetailsss);
    }
  });
});

// Defined edit route
detailsRoutes.route("/edit/:id").get(function (req, res) {
  let id = req.params.id;
  CrudDetails.findById(id, function (err, cruddetails) {
    res.json(cruddetails);
  });
});

//  Defined update route
detailsRoutes.route("/update/:id").post(function (req, res) {
  CrudDetails.findById(req.params.id, function (err, cruddetails) {
    if (!cruddetails) res.status(404).send("data not found");
    else {
      cruddetails.name = req.body.name;
      cruddetails.mail = req.body.mail;
      cruddetails.phone_number = req.body.phone_number;
      cruddetails.dob = req.body.dob;

      cruddetails
        .save()
        .then((cruddetails) => {
          res.json("Update done");
        })
        .catch((err) => {
          res.status(400).send("unable to update database");
        });
    }
  });
});

// Defined delete | remove | destroy route
detailsRoutes.route("/delete/:id").get(function (req, res) {
  CrudDetails.findByIdAndRemove({ _id: req.params.id }, function (
    err,
    cruddetails
  ) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = detailsRoutes;
