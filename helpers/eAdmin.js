module.exports = {
    eAdmin: (req,res,next)=>{
        if(!req.user) {
            req.flash('error_msg','Você precisa estar logado')
            res.redirect('/admin/login')
        } else {
            next()
        }
    }
}