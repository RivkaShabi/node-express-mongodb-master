const express = require('express');//רפרנס למחלקה
const router = express.Router();//מופע למחלקה ראוטר 
const fs = require('fs');
router.get('/', function (req, res) {
   
            res.send({name:"test"});


    });




module.exports = router;