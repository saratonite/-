module.exports = function authGaurd(req, res, next) {
  if( req.session.user) {
    next(); return;
  }

  res.redirect('/login')
}
