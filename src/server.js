'use strict';
const express = require('express');
const app = express();
const registerRoutes = require('./routes');
const open = require('open');
const cors = require('cors');
const bodyParser = require('body-parser');

// server config
const port = process.env.PORT || 3000;
  
app.use(cors());
app.use(bodyParser.json());

//   app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public'});
})

// register routes
registerRoutes(app);

// create server start method
const start = () => {
    return new Promise((resolve, reject) => {
        // start the server
        app.listen(port, () => {
            open(`http://localhost:${port}`);
            console.log(`Connected to Port ${port}`);
            resolve()
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`)
    });
}

module.exports = start;


