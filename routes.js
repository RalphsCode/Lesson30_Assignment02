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
    res.status(201).json ({added: newItem});
});  // END Route

// Display an item
router.get('/:name', function(req, res) {
    const requested = req.params.name
    const foundItem = items.find(item => item.name === requested)
    res.send(foundItem);
});  // END Route

// Update an existing item
router.patch('/:name', function(req, res) {
    const requested = req.params.name
    const itemIdx = items.findIndex(item => item.name === requested)
    if (itemIdx !== -1) {
        const newName = req.body.name || items[itemIdx].name;
        const newPrice = req.body.price !== undefined ? req.body.price : items[itemIdx].price;

        items[itemIdx] = { "name": newName, "price": newPrice };

        res.status(201).json( { updated: items[itemIdx] });
    } else {
    res.status(404).json( {"Not Found": requested} );
    }
});  // END Route

// Delete an item
router.delete('/:name', function(req, res) {
    const requested = req.params.name;
    const itemIdx = items.findIndex(item => item.name === requested);
    if (itemIdx !== -1) {
        items.splice(itemIdx, 1);
        res.status(200).json({"deleted": requested });
    } else {
        res.status(404).json( {"Not Found": requested} ); 
    }
});  // END Route

module.exports = router;