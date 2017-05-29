const express = require('express');
const app = express();


app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Simcha Fund';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/allsimchas'));
app.use(require('./routes/simcha'));
app.use(require('./routes/contributors'));
app.use(require('./routes/donor'));



var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
