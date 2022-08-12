const router = require('express').Router();

const categoryRoutes= require('./category-routes');


router.use('/category', categoryRoutes);




module.exports = router;