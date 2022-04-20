const express = require('express');
const app = express();
const port = 3005
const translations = require('./translations');
const engine = require('express-handlebars').engine

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')


app.get('/:lang?', (req, res) => {
    const lang = req.params.lang;
    const keysAvailable = Object.keys(translations); // recupère les 
    if (keysAvailable.includes(lang)) {
        res.render('home', {
            title: translations[lang].title,
            pageTitle: translations[lang].pageTitle
        });
    } else {
        res.render('home', {
            title: translations['fr'].title,
            pageTitle: translations['fr'].pageTitle
        });
    }
})


app.listen(port, () => {
    console.log('The server is started at port', port)
})