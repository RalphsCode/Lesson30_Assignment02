const express = require("express");    // require express just to get router
const router = new express.Router();

let items = require("./fakeDb");

// ITEMS Routes
//  - prefixed with '/users' by index.js

router.get('/', function(req, res) {
    return res.json(items);
})  // END items route

router.post('/', function(req, res) {
    
})
module.exports = router;