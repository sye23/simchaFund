const express = require('express');
const router = express.Router();
const connection = require('../public/js/connection.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/contributors', (req, res) => {
  connection.query("SELECT * FROM contributors ORDER BY name", function(error, rows, fields){
      if(error){
          console.log('Error with query');
      }else{
          console.log('Successful query');
          let donorData=JSON.parse(JSON.stringify(rows));
          res.render('contributors',{
            donorData:donorData
          });
        }
  });
});

router.post('/contributors', (req, res) => {
  if (req.body.name && req.body.amount) {
    connection.query("INSERT INTO contributors ( name, balance ) values (?,?)" , [req.body.name  , req.body.amount])
    res.redirect('/contributors');
  }

});

module.exports = router;
