const User = require('../model/user.model');
const bcrypt = require('bcryptjs');
module.exports.view=(req,res)=>{
    User.find( (err,user)=> {
        if (err) {
            console.log(err);
        }
        else {
            res.json(user);
        }
    });
}
module.exports.viewdetail = (req, res) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(user);
        }
    })
}
module.exports.register = (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var phone=req.body.phone;
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log(err);
        }
        if (user) {
            return res.json({ success:false, error: err })
        }
        else {
            var user = new User({
                name: name,
                email: email,
                username: username,
                password: password,
                phone:phone,
                admin: 0
            });
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(user.password, salt, function (err, hash) {
                    if (err) console.log(err);
                    user.password = hash;
                    user.save(function (err) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            return res.json({ success:true, error: err });
                        }
                    });
                });
            });
        }
    });
}
module.exports.login=(req,res)=>{
    var username = req.body.username;
    var password = req.body.password;
    User.findOne({ username: username }, (err, user) => {
        if(err){
            console.log(err);
        }
        if (!user) {
            console.log(err);
            return res.json({sucess:false,message:'ktt'});
        }
        bcrypt.compare(password, user.password, function (err, isMatch) {
            if (err)
                console.log(err);

            if (isMatch) {
                console.log('sl');  
                //console.log(user.id);
                return res.json({sucess:true,message:'sl',id:user.id,data:user})
            } else {
                console.log('wp')
                return res.json({success:false,message:'wp'})
                
            }
        });
    });
};
module.exports.delete = (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id }, (err, user) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json('removed');
        }
    }
    )
}