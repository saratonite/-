module.exports = (req, res, next) => {
  if( req.session.user ){
    res.redirect('/profile'); return;
  }
  next();
}
