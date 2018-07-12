
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.login = async (req, res) => {

    let { email, password } = req.body;

    let user = await User.findOne({email: email})

    if(user) {

    let isPasswordMatch = await bcrypt.compare(password, user.password)

        if(isPasswordMatch) {

            req.session.user = user;

            res.json({ok: true,message:"Loggedin success"})
        }

    }



    res.json({ok: false,message:"Invalid login"});
}

exports.logout = (req, res) => {
    req.session.user = null;
    res.json({ok: true, message: "User session destroyed"})
}


exports.register = async (req, res) => {

    let {email, password } = req.body;

    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password, salt)

    let user = new User({email, password: hash})

    let createdUser = await user.save()

    if(createdUser) {
        return res.json({ok: true,message: "User created"})
    }

    return res.json({ok: false, message: "Error register user"})


}


exports.authOnly = async (req, res, next) => {

    //console.log(req.session.user);

    if(!req.session.user) {

        res.json({ok: false, message: "No user sesssion found"});
        return;


    } 

    next();

    let logUser = await User.findOne({_id: req.session.user._id})

    if(logUser) {

       return  next();
    }
    return res.json({ok: false, message:"User not found"})

}