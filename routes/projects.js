var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) =>{
    res.render('projects', 
    {
      email: "contact@company.com",
      title: "About the Project" 
      });
  });

  module.exports = router;