const express = require('express')
    , router = express.Router()
    , bodyParser = require('body-parser')
    , app = express()
    , port = process.env.PORT || 5555;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* Website routes */
app.use('/', require('./routes/root'));
app.use('/', require('./routes/location.js'));
app.use('/', require('./routes/marcopolo.js'));

//username will follow format: marco is always seeking polo.  polo is always being sought by marco. All players perceive themselves as marcos.

app.listen(port);
console.log("geo api listening on port " + port);
