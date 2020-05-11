// redirecting to the to_do_app web page
module.exports.application = function(req, res){

    return res.render("appPage", {title: "My to do app"});
}