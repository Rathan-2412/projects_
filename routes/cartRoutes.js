const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');



router.get('/:id', cartController.getCarts)

router.post('/:id', cartController.postCarts);



module.exports = router;
