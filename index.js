// -----add express------------
const express = require("express");
const app = express();

// ---------add json-------------
const { json } = require('express');
app.use(json());

// ------add cors-----------
const cors = require('cors');
app.use(cors());

require('./DB/Connection');

app.use('/api', require('./API/Allapi'));

app.listen(1010, () => {
    console.log("Sever Start..............");
});

app.use('/', (req, res) => {
    return res.send("backend start....");
})