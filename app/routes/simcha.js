const express = require('express');
const router = express.Router();
const connection = require('../public/js/connection.js');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/simcha/:simchaId', (req, res) => {
  let simchaId = req.params.simchaId;
  let donorId = req.body.donorId;
  let amount = req.body.amount;
    if (req.body.amount) {
      connection.query("UPDATE simchas SET balance = balance + ? WHERE id = ?" , [amount  , simchaId]);
      connection.query("UPDATE contributors SET balance = balance - ? WHERE id = ?" , [amount  , donorId]);
      connection.query("INSERT INTO details ( donorid, simchaid, amount ) values (?,?,?) ON DUPLICATE KEY UPDATE amount = amount+?" , [donorId, simchaId, amount, amount])
      res.redirect('/simcha/' + simchaId);
    }
  });

router.delete('/simcha/:simchaId', (req, res) => {
  let id = req.params.simchaId;
  if (id) {
    connection.query("DELETE FROM simchas WHERE id = ?" , [ id]);
    res.json('/allsimchas');
  }
});

router.get('/simcha/:simchaId', (req, res) => {
  let id = req.params.simchaId;
  connection.query("SELECT * FROM simchas WHERE id = ?", [id], function(error, rows, fields){
      if(error){
          console.log('Error with query');
      }else{
          console.log('Successful query');
          console.log('rows',rows);
          let simchaData = JSON.parse(JSON.stringify(rows));
          connection.query("SELECT * FROM contributors ORDER BY name", function(error, rows, fields){
              if(error){
                  console.log('Error with query');
              }else{
                  console.log('Successful query');
                  let donorData = JSON.parse(JSON.stringify(rows));
                    connection.query("SELECT details.amount, contributors.name, contributors.id FROM details INNER JOIN contributors ON details.donorid = contributors.id WHERE details.simchaid= ? ORDER BY name",[id], function(error, rows, fields){
                        if(error){
                            console.log('Error with query');
                        }else{
                            console.log('Successful query');
                            let detailData = JSON.parse(JSON.stringify(rows));
                            console.log('detailData',detailData);
                            res.render('simcha',{
                              simchaData: simchaData,
                              donorData: donorData,
                              detailData: detailData
                          });
                        }
                    });
              }
          });
        }
  });

});


module.exports = router;
