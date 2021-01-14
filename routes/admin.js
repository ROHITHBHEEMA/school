var express = require('express');
var router = express.Router();

const adminControllers = require('../controllers/admin');


router.get('/add-6th-class', adminControllers.get6th);

router.post('/add-6th-class',adminControllers.post6th);

router.get('/add-7th-class', adminControllers.get7th);

router.post('/add-7th-class', adminControllers.post8th);

router.get('/add-8th-class', adminControllers.get8th);

router.post('/add-8th-class',adminControllers.post8th);

router.get('/add-9th-class', adminControllers.get9th);

router.post('/add-9th-class', adminControllers.post9th);

router.get('/add-10th-class', adminControllers.get10th);

router.post('/add-10th-class', adminControllers.post10th);

module.exports = router;
