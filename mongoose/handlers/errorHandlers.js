/*
  Catch Errors Handler
  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch and errors they throw, and pass it along to our express middleware with next()
*/

exports.catchErrors = (fn) => {
    return function(req, res, next) {
      return fn(req, res, next).catch(next);
    };
};


exports.notFound = (req, res, next) => {
  const err = new Error('Not found')
  err.status = 404;
  next(err);
  //res.status(500).json({message: 'Something went wrong!!!'})
}

exports.errorResponse = (err, req, res, next) => {

  console.log('> ', JSON.stringify(err,null,2))
  if(err.status && err.status == 404) {
    res.status(404).json({message:'Requested api enpoint not found !!! :('})
  }

  res.json({message: 'Something went wrong!'})
}
