var express = require('express');
var router = express.Router();

/* submit contact form data */
router.get('/', function(req, res) {
    const name = req.query.name;
    const phone = req.query.phone;
    const email = req.query.email;
    const message = req.query.message;
   sendMail( name, phone, email, message)
    res.sendStatus(200)

});

function sendMail (name, phone, email, message) {
    var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 host: 'mail.gmx.net',
 secure: true,
  auth: {
    user: 'schildissindultrasuess@gmx.de',
    pass: 'Mxih86gh'
  }
});

var mailOptions = {
  from: 'schildissindultrasuess@gmx.de',
  to: 'miissstttt@gmx.de',
  subject: 'Email from turtle website',
  text: `Name is: ${name}
  Phone is ${phone}
  Email is: ${email}
  Message is: ${message}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}) 
}; 

module.exports = router;
