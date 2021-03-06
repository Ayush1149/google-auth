const router = require('express').Router();
const passport =require('passport');
// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

// auth with google+
router.get('/google', passport.authenticate('google',{
    scope:['profile']
}));

//callback for router
router.get('/google/redirect',(req,res) => {
 res.send('You reached the callback URI');
});

module.exports = router;
