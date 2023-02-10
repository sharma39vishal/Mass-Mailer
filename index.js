var nodemailer = require('nodemailer');

function massmailer(name,email){
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mail',
      pass: 'app password'
    }
  });
  var mailOptions = {
    from: 'mail',
    to: email,
    subject: 'Subject of mail',
    text: `message ${name},
`
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

var email= [];
var name=  [];

// console.log(email .length);

for (let i = 0; i < email.length; i++) {
    console.log(name[i] , email[i]);    
    massmailer(name[i],email[i]);   
}