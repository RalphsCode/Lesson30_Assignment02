const express = require("express");
const app = express();

/* <<<< ROUTES >>>>>>>>>>>>>>>> */
app.get('/items', function(req, res) {
    return res.send("<h2>Items Page</h2>");
})  // END items route


/* <<<< SERVER >>>>>>>>>>>>>>>>>  */
app.listen(8080, function () {
    console.log("Server is running and listening on port 8080.")
})