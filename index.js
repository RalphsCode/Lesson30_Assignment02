const express = require("express");
const app = express();

const routes = require("./routes")

app.use(express.json());

/* <<<< ROUTES >>>>>>>>>>>>>>>> */
app.use('/items', routes)


/* <<<< SERVER >>>>>>>>>>>>>>>>>  */
app.listen(8080, function () {
    console.log("Server is running and listening on port 8080.")
})