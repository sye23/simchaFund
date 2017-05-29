const express = require('express');
const router = express.Router();
const connection = require('../public/js/connection.js');

router.get('/', (req, res) => {
  connection.query("SELECT * FROM simchas ORDER BY name", function(error, rows, fields){
      if(error){
          console.log('Error with query');
      }else{
          console.log('Successful query');
          let simchaData = JSON.parse(JSON.stringify(rows));
          res.render('index',{
            simchaData:simchaData
          });
        }
  });
});

module.exports = router;
