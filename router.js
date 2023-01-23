const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const adminRoutes=  require('./req');
const shopRoutes =  require('./res');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/ad',adminRoutes);
app.use(shopRoutes);
app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>')
})
app.listen(2000);