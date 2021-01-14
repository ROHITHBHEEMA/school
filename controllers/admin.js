const Students6 = require('../models/student6');
const Students7 = require('../models/student7');
const Students8 = require('../models/student8');
const Students9 = require('../models/student9');
const Students10 = require('../models/student10');

exports.get6th = (req,res,next) => {
    res.render('admin/add-6th.ejs' , {
        pageTitle: 'Add Students',
        path : '/add-student'
    });
};

exports.post6th = (req,res,next) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const adnum = req.body.adnum;
    const clas = 6;
    const medium = req.body.medium;

    const student = new Students6 ({
        name : name,
        adnum : adnum,
        class: clas,
        medium: medium,
        phone:phone
    })
    
    student.save()
    .then(result =>{
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    });
    
};


exports.get7th = (req,res,next) => {
    res.render('admin/add-7th.ejs' , {
        pageTitle: 'Add Students',
        path : '/add-student'
    });
};

exports.post7th = (req,res,next) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const adnum = req.body.adnum;
    const clas = 7;
    const medium = req.body.medium;

    const student = new Students7 ({
        name : name,
        adnum : adnum,
        class: clas,
        medium: medium,
        phone:phone
    })
    
    student.save()
    .then(result =>{
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    });
    
};


exports.get8th = (req,res,next) => {
    res.render('admin/add-8th.ejs' , {
        pageTitle: 'Add Students',
        path : '/add-student'
    });
};

exports.post8th = (req,res,next) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const adnum = req.body.adnum;
    const clas = 8;
    const medium = req.body.medium;

    const student = new Students8 ({
        name : name,
        adnum : adnum,
        class: clas,
        medium: medium,
        phone:phone
    })
    
    student.save()
    .then(result =>{
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    });
    
};



exports.get9th = (req,res,next) => {
    res.render('admin/add-9th.ejs' , {
        pageTitle: 'Add Students',
        path : '/add-student'
    });
};

exports.post9th = (req,res,next) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const adnum = req.body.adnum;
    const clas =9;
    const medium = req.body.medium;

    const student = new Students9 ({
        name : name,
        adnum : adnum,
        class: clas,
        medium: medium,
        phone:phone
    })
    
    student.save()
    .then(result =>{
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    });
    
};



exports.get10th = (req,res,next) => {
    res.render('admin/add-10th.ejs' , {
        pageTitle: 'Add Students',
        path : '/add-student'
    });
};

exports.post10th = (req,res,next) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const adnum = req.body.adnum;
    const clas = 10;
    const medium = req.body.medium;

    const student = new Students10 ({
        name : name,
        adnum : adnum,
        class: clas,
        medium: medium,
        phone:phone
    })
    
    student.save()
    .then(result =>{
        res.redirect('/');
    })
    .catch(err=>{
        console.log(err);
    });
    
};