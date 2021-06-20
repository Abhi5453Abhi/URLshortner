const express = require('express');
const mongoose = require('mongoose');
const shortURL = require('./models/shortURL');
const app = express();

app.set('view engine' ,'ejs');
app.use(express.urlencoded({extended:false}))

mongoose.connect('mongodb://localhost/urlShortener',{
    useNewUrlParser:true, useUnifiedTopology:true
});
app.listen(process.env.PORT || 3000);

app.get('/',(req,res) => {
    res.render("index.ejs");
})

app.post('/shortURLs',async (req,res) => {
    await shortURL.create({
        full:req.body.fullURL
    })
    res.redirect('/')
    res.end("worked fine");
});