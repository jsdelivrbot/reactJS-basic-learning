const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', {
  session: false
});
const requireSignin = passport.authenticate('local', {
  session: false
});

module.exports = function(app) {

  app.get('/', requireAuth, function(req, res) {
    res.send({
      message: 'authenticate code'
    });
  })

  app.post('./signup', requireSignin, Authentication.signup);
  app.post('./signin', Authentication.signin);

}
