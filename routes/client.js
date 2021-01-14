var express = require('express');
var router = express.Router();

const clientControllers = require('../controllers/client');

/* GET home page. */
router.get('/', clientControllers.getHome);

router.get('/6th-class', clientControllers.get6th);

router.get('/7th-class', clientControllers.get7th);

router.get('/8th-class', clientControllers.get8th);

router.get('/9th-class', clientControllers.get9th);

router.get('/10th-class', clientControllers.get10th);

router.get('/class6/:student6id',clientControllers.get6);

router.get('/class7/:student7id',clientControllers.get7);

router.get('/class8/:student8id',clientControllers.get8);

router.get('/class9/:student9id',clientControllers.get9);

router.get('/class10/:student10id',clientControllers.get10);

router.post('/send',clientControllers.postsend);

router.get('/6',clientControllers.get6class);

module.exports = router;
