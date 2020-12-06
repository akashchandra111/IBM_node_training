var express = require('express');
var app = express();
var itemRouter = express.Router();


var Item = require('../models/item');

// Defined Add route
itemRouter.route('/add').get(function (req, res) {
  res.render('add-item');
});

// store route
itemRouter.route('/add/post').post(function (req, res) {
  var item = new Item(req.body);

  item.save()
    .then(item => {
    res.redirect('/items');
    })
    .catch(err => {
    res.status(400).send("unable to save to DB.");
    });
});

//  get data(index or listing) route
itemRouter.route('/').get(function (req, res) {
  Item.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      res.send( {itms: itms})  // for production use:  rest end-pt (/items), for json data of sweets.

      // res.render('items', {itms: itms});   // view of the sweets (e.g. for API testing).
    }
  });
});

// get all the json data (/items/all) - i.e. duplicate of /items.
itemRouter.route('/all').get(function (req, res) {
  Item.find(function (err, itms){
    if(err){
      console.log(err);
    }
    else {
      res.send({itms: itms});
    }
  });
});




// Defined edit route
itemRouter.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Item.findById(id, function (err, item){
      res.render('edit-item', {item: item});
  });
});

//  Defined update route
itemRouter.route('/update/:id').post(function (req, res) {
  Item.findById(req.params.id, function(err, item) {
    if (!item)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      item.item = req.body.item;

      item.save().then(item => {
          res.redirect('/items');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
itemRouter.route('/delete/:id').get(function (req, res) {
  Item.findByIdAndRemove({_id: req.params.id},
	   function(err, item){
		if(err) res.json(err);
		else res.redirect('/items');
	});
});

module.exports = itemRouter;
