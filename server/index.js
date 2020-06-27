const express = require('express');
const app = express();

//db
require('./startup/db')();


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('running server at port ' + PORT))