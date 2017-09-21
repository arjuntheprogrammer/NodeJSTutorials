var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'arjunemail007@gmail.com',
        pass: 'Qwerty123!'
    }
});

var mailOptions = {
    from: 'arjunmail007@gmail.com',
    to: 'saimzn4241@gmail.com',
    // to: 'myfriend@yahoo.com, myotherfriend@yahoo.com', // send to multiple users
    subject: 'Sending email using Node.js',
    text: 'That was easy!!'
        // html: '<h1>Welcome</h1><p>That was easy!</p>'  //send HTML formatted text in your email
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email send:' + info.response);
    }
});