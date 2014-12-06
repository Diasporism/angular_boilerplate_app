var express       = require('express');
var app           = express();
var static_folder = __dirname + '/dist';

app.use(express.static(static_folder));

app.get('/', function(req, res) {
  res.sendfile('main.html', {root: static_folder })
});

var port = process.env.PORT || 3000;
var server = app.listen(port);
console.log('Server listening on port ' + port + '...');
