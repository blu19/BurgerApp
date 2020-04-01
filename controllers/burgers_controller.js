var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", (req, res)=> {
  res.redirect("/burgers")
})

router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/new", function(req, res) {
  //burger.create(["burger_name", "devoured"], req.body.burger_name, function(
  burger.create(req.body.burger_name, function(
    result
  ) {
    // is this not needed?
    res.json({ id: result.insertId });
  });
});

router.put("/burgers/:id", function(req, res) {
  //var condition = "id = " + req.params.id;
  //console.log("condition", condition);
  burger.update(
    //{
    //  devoured: req.body.devoured
    //},
    //condition,

    req.params.id,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;