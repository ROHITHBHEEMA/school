const Students6 = require('../models/student6');
const Students7 = require('../models/student7');
const Students8 = require('../models/student8');
const Students9 = require('../models/student9');
const Students10 = require('../models/student10');
const nodemailer = require('nodemailer');

exports.getHome = (req,res,next) => {
    Students6.find()
    .then(students =>{
        res.render('client/home.ejs' , {
            pageTitle: 'Zphs Beerakuppam',
            path : '/',
            students : students
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.get6th = (req,res,next) => {
    Students6.find()
    .then(students6 =>{
        res.render('client/6th.ejs' , {
            pageTitle: '6th Class',
            path : '/',
            students : students6
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.get7th = (req,res,next) => {
    Students7.find()
    .then(students =>{
        res.render('client/7th.ejs' , {
            pageTitle: '7th Class',
            path : '/',
            students : students
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.get8th = (req,res,next) => {
    Students8.find()
    .then(students =>{
        res.render('client/8th.ejs' , {
            pageTitle: '8th Class',
            path : '/',
            students : students
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.get9th = (req,res,next) => {
    Students9.find()
    .then(students =>{
        res.render('client/9th.ejs' , {
            pageTitle: '9th Class',
            path : '/',
            students : students
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.get10th = (req,res,next) => {
    Students10.find()
    .then(students =>{
        res.render('client/10th.ejs' , {
            pageTitle: '10th Class',
            path : '/',
            students : students
        });
    })
    .catch(err=>{
        console.log(err);
    })
};

exports.get6 = (req,res,next) => {
    const stuid = req.params.student6id;
    Students6.findById(stuid)
    .then(student=>{
        res.render('client/student6.ejs' , {
            pageTitle: student.name,
            path : '/',
            student : student
        });
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.get7 = (req,res,next) => {
    const stuid = req.params.student6id;
    Students7.findById(stuid)
    .then(student=>{
        res.render('client/student7.ejs' , {
            pageTitle: student.name,
            path : '/',
            student : student
        });
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.get8 = (req,res,next) => {
    const stuid = req.params.student6id;
    Students8.findById(stuid)
    .then(student=>{
        res.render('client/student8.ejs' , {
            pageTitle: student.name,
            path : '/',
            student : student
        });
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.get9 = (req,res,next) => {
    const stuid = req.params.student6id;
    Students6.findById(stuid)
    .then(student=>{
        res.render('client/student9.ejs' , {
            pageTitle: student.name,
            path : '/',
            student : student
        });
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.get10 = (req,res,next) => {
    const stuid = req.params.student6id;
    Students6.findById(stuid)
    .then(student=>{
        res.render('client/student10.ejs' , {
            pageTitle: student.name,
            path : '/',
            student : student
        });
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.postsend = (req,res,next) =>{
    const name = req.body.name;
    const phone = req.body.phone;
    const adnum = req.body.adnum;
    const clas = req.body.class;
    const medium = req.body.medium;
    const output = `
        <p>your son/daughter ${req.body.name} of class ${req.body.class} is absent today </p>
  `;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rohithbheema16@gmail.com',
      pass: '******'
    }
  });
  
  var mailOptions = {
    from: 'rohithbheema16@gmail.com',
    to: 'rohithbheema22@gmail.com',
    subject: phone,
    // text: `Hi Smartherd, thank you for your nice Node.js tutorials.
    //         I will donate 50$ for this course. Please send me payment options.`
    html:output         
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.redirect("/");
    }
  });
};


exports.get6class = (req,res,next) => {
    Students6.find(function(err,class6){
        res.send(class6);
    });
};
