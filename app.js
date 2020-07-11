const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportsetup =require('./config/passport-setup');
const app = express();
const mongoose =require('mongoose');
const key =require('./config/key');
const model =require('./models/model-user')
const cookieSession = require('cookie-session');
const passport =require('passport');


// set view engine
app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [key.session.cookieKey]
}));


// initialize passport
app.use(passport.initialize());
app.use(passport.session());


//connect monogdb
mongoose.connect(key.MongoDB.mongouri),()=>{
    console.log('connected to the database of mongoDB');
}

// set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
