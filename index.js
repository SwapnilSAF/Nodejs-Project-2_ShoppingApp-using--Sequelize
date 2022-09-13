const path = require('path'); //it is a core module in nodejs to provide a path

const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs= require("express-handlebars");
const app = express();

//set template engine pug
/*app.engine("hbs", expressHbs({
    layoutsDir: 'views/layouts/',
    defaultlayout: 'main-layout',
    extname: 'hbs'
}));*/
app.set("view engine", "ejs");
app.set("views", "./views"); //providing file path 

const adminData = require('./routes/admin'); //importing the adminRoutes
const shopRoutes = require('./routes/shop'); // importing the shopeRoutes

app.use(bodyParser.urlencoded({extended: false})); //body-parser is which allows express to read the body and 
//then parse that into a Json object that we can understand. or we can see the user input on console
app.use(express.static(path.join(__dirname, 'public'))); //for css

app.use('/admin', adminData.routes); //use method allows us to add middleware functions
app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).render("404",{pageTitle : 'Page Not Found'});
});
//next allows the request to continue to the next middleware in line
app.listen(3000);
