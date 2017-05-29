const express = require('express');
const router = express.Router();
const connection = require('../public/js/connection.js');
const bodyParser = require('body-parser');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/allsimchas', (req, res) => {
  connection.query("SELECT * FROM simchas ORDER BY name", function(error, rows, fields){
      if(error){
          console.log('Error with query');
      }else{
          console.log('Successful query');
          let simchaData = JSON.parse(JSON.stringify(rows))
          res.render('allsimchas',{
          simchaData:simchaData
          });
        }
  });
});

router.post('/allsimchas', (req, res) => {
  console.log(req.body);
  if (req.body.name && req.body.type && req.body.amount) {
    connection.query("INSERT INTO simchas ( name, type, balance ) values (?,?,?)" , [req.body.name, req.body.type, req.body.amount])
    res.redirect('/allsimchas');
  }

});



module.exports = router;
