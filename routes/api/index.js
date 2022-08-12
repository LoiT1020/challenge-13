const router = require('express').Router();

const categoryRoutes= require('./category-routes');
const productRoutes= require('./product-route');

router.use('/category', categoryRoutes);
router.use('/products',productRoutes);





module.exports = router;