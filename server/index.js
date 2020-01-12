const express = require('express');
//the following are standard dependencies, will generally want to use:
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
/*for TA: keep a close eye on package.JSON/look at it first. see what dependencies are there
will likely want to use some/all of those, and make sure there aren't more you want to add */
const router = require('./router');


//ExpressJS docs ('Getting Started'->'Hello World' link on website)
const app = express();
const port = 3000;

//per npmjs.com docs, lines 16-20 make sure the middleware we imported is actually used
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan('dev'));
app.use(cors());
app.use('/api', router); //all requests going to /api endpoint will use router

//serving any static files (.html, .css, images, etc.) in specified directory to the client
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.listen(port, () => console.log(`Server listening on port ${port}!`));

app.get('/name', (req, res) => res.send('ADAM')); //test using Postman
