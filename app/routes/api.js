var User = require('../models/user');
module.exports = function(router){
    router.post('/users',(req,res)=>{
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.email = req.body.email;
        if(req.body.username == null || req.body.username == "" || req.body.password == null || req.body.password == "" || req.body.email == "" || req.body.email == null){
            res.send("Ensure all fields are adequately attended to !!")
        }
        else{
            user.save((err)=>{
                if(err){
                    res.send("username or email already exists");
                }
                else{
                    res.send("user created");
                }
            });
        }
    });
    return router;
}