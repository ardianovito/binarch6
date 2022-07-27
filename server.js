require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.port || 5000
const configViewEngine = require('./routes/viewEngine')
const initWebRoutes = require ('./routes/web')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const connectFlash = require('connect-flash')
const passport = require('passport')
const exphbs = require('express-handlebars'); 


//app use
app.use(cookieParser('secret'))
app.use(session({
    secret: 'secret',
    resave: true,
    saveUnitialized:false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24
    }
}))

// body parser post data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//flash message
app.use(connectFlash())

//Config passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Config view engine
configViewEngine(app)

// init web routes
initWebRoutes(app);

//game page
app.get('/game', function(request, response){
    response.render('game')
})

const handlebars = exphbs.create({ extname: '.hbs',});


const routes = require('./routes/user');
app.use('/usermanagement', routes)



//app listen
app.listen(port, () => console.log(`Listening on port ${port}`));

