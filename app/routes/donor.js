const express = require('express');
const router = express.Router();
const connection = require('../public/js/connection.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/donor/:donorId', (req, res) => {
  let id = req.params.donorId;

    if (req.body.amount) {
      connection.query("UPDATE contributors SET balance = balance + ? WHERE id = ?" , [req.body.amount  , id]);
      res.redirect('/donor/' + id);
    }
  });

  router.delete('/donor/:donorId', (req, res) => {
    let id = req.params.donorId;
    if (id) {
      connection.query("DELETE FROM contributors WHERE id = ?" , [ id]);
      res.json('/contributors');
    }
  });


router.get('/donor/:donorId', (req, res) => {
  let id = req.params.donorId;

  connection.query("SELECT * FROM contributors WHERE id = ?", [id], function(error, rows, fields){
      if(error){
          console.log('Error with query');
      }else{
          console.log('Successful query');
          let donorData = JSON.parse(JSON.stringify(rows));
          console.log(donorData);
          res.render('donor',{
            donorData: donorData
          });
        }
  });
})

module.exports = router;
