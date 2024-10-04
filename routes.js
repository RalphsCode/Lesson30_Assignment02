const express = require("express");    // require express just to get router
const router = new express.Router();
const app = express();

app.use(express.json());

let items = require("./fakeDb");

// ITEMS Routes
//  - prefixed with '/users' by index.js

// Return all items
router.get('/', function(req, res) {
    return res.json(items);
});  // END Route


// Add an item
router.post('/', function(req, res) {
    const newItem = { name: req.body.name, price: req.body.price };
    items.push(newItem);
    res.json ({added: newItem});
});  // END Route

// Display an item
router.get('/:name', function(req, res) {
    
});  // END Route


module.exports = router;