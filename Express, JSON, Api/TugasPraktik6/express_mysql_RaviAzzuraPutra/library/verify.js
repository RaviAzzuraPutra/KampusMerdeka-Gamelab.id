module.exports= {
    isLogin(req,res,next){
        if (req.session.loggedin === true){
            next();
            return;
        }else {
            req.session.destroy((error) => {
                res.redirect('/login')
            })
        }
    },
    isLogOUt(req,res,next){
        if (req.session.loggedin !== true){
            next();
            return;
        }
        res.redirect('/')
    }
}