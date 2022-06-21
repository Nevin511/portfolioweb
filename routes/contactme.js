var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) =>{
    res.render('contactme', 
    {
      email: "contact@company.com",
      title: "Nevin Sunny" 
      });
  });

  module.exports = router;