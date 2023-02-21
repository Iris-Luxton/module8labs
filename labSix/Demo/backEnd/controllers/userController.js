const { getUserbyNamePwdAsync } = require("../services/userServices");

function passwordCheck(req, res) {
    getUserbyNamePwdAsync(req.body.username, req.body.password)
    .then(result => {
            if (!result[0].username) {
                console.log(result[0].username);
                res.status(403).json({
                   message: "Invalid username or password",
                 });
                 return;
           }
        res.send(result);
        // res.redirect('/home');
    })
}

module.exports = {
    passwordCheck
};