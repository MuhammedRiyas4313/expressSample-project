var express = require("express");
var router = express.Router();

/* GET home page. */

// router.get("/", (req, res, next) => {
//   let x = req.body.pw;n
//   let y = req.body.email;
//   var atposition = y.indexOf("@");
//   var dotposition = y.lastIndexOf(".");
//   if (
//     atposition < 1 ||
//     dotposition < atposition + 2 ||
//     dotposition + 2 >= y.length
//   ){
//     res.redirect('/');
//   } else if(x.length<3){
//     res.redirect('/');
//   }else if (req.session.login) {
//     res.redirect("/submit");
//   }
//   else{
//     next();
//   }
// });

router.get("/", (req, res) => {
  if (req.session.login) {
    res.redirect("/users");     
  } else {
    res.render("index",{ message : req.session.loginerror});
    req.session.loginerror = false;
  }
});



router.get("/signout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

let email = "riyasjb007@gmail.com";
let pw = "1234";

router.post("/", function (req, res) {
  if (req.body.email == email && req.body.pw == pw) {
    req.session.login = true;
    res.redirect("/users");
  } else {
    req.session.loginerror = true;
    res.redirect("/");
  }
  
});


module.exports = router;