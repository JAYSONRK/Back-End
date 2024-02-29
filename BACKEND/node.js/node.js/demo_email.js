var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jaysonrobert208@gmail.com',
    pass: 'JAYROBKEN061295'
  }
});

var mailOptions = {
  from: 'jaysonrobert208@gmail.com',
  to: 'jaysonrobert3@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'This my First Node.js Email!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});