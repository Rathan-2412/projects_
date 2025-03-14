const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



router.get('/', userController.getusers)

router.post('/', userController.postusers);


router.get('/:id', userController.getuserbyid);

module.exports = router;
