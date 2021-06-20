const express = require('express');
const mongoose = require('mongoose');
const shortURL = require('./models/shortURL');
const app = express();

app.set('view engine' ,'ejs');
app.use(express.urlencoded({extended:false}))

// mongoose.connect("mongodb+srv://Mango_OP:Jasveen@2020@cluster0.n48fr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
//     useNewUrlParser:true, useUnifiedTopology:true
// });
app.listen(process.env.PORT || 3000);

app.get('/',async (req,res) => {
    res.end("Started");
})

// app.get('/',async (req,res) => {
//     const shortURLs = await shortURL.find();
//     res.render('index',{shortURLs:shortURLs})
// })
// app.post('/shortURLs',async (req,res) => {
//     await shortURL.create({
//         full:req.body.fullURL
//     })
//     res.redirect('/')
// });

// app.get('/:shortUrl',async (req,res) => {
//     const shortUrl = await shortURL.findOne({short: req.params.shortUrl})
//     console.log(shortUrl.full);
//     if(shortUrl === null || shortUrl === undefined) res.end("Sorry couldn't find the URL");

//     res.redirect(shortUrl.full);
// })
