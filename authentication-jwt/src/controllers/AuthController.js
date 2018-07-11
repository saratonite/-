const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.register = async (req,res) => {

    let { email , password } = req.body;

    let salt = await bcrypt.genSalt(10)

    let hash = await bcrypt.hash(req.body.password,salt)

    let newUser = new User({
        email,
        password: hash
    })

    let _n = await newUser.save();

    res.json(_n)
    

}

exports.authenticate = async (req, res) => {

    let user = await User.findOne({email: req.body.email })

    
    if(user) {
        
        let isPasswordMatch = await bcrypt.compare(req.body.password, user.password)

        if(isPasswordMatch) {
            let payload = { email: user.email, _id: user._id}
            let token = jwt.sign(payload,'secret', { expiresIn:'2h'})
            return res.json({ok: isPasswordMatch, token})

        }
        return res.json({ok: isPasswordMatch})
    }
    else {
        res.json({ok:false, message:'Invalid'})
    }


}

exports.verify = async (req, res, next) => {

    var token = req.headers['x-access-token'] || null;

    if(!token) return res.json({ok: false, message: "Invalid Token"})

    let userdata;

    try {
        userdata = await jwt.verify(token, 'secret')
        console.log('User data')

        let user = await User.findOne({_id: userdata._id})

        if(user) {
            req.user = user;

            next();
        }
    }
    catch(err) {

        console.log('ERRRRRRRRR', err)
        return res.json({ok: false, message: "Bad taken"})
    }

    


}


exports.logout = (req, res) => {

}