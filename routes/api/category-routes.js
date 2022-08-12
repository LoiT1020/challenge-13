const router = require("express").Router();
const { Category, Product, Tag, ProductTag}= require ("../../models")


//// GET /api/category
router.get("/", (req, res) => {
    console.log('======================')
  Category.findAll({
    attributes: [
        'id',
        'category_name'
    ],
    include: [{
        model: Product,
        attributes: [ 'product_name','price','stock']

  }]
  })
    .then(dbCatData => res.json(dbCatData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/category/1
router.get('/:id', (req, res) => {
    Category.findOne({
        where: {
          id: req.params.id
        }
      })
        .then(dbCatData => {
          if (!dbCatData) {
            res.status(404).json({ message: 'No category found with this id' });
            return;
          }
          res.json(dbCatData);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

// POST /api/category
router.post('/', (req, res) => {
    Category.create({
        category_name: req.body.category_name
    }).then(dbCatData => res.json(dbCatData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/category/1
router.put('/:id', (req, res) => {
    Category.update( req.body,{
        where:{
            id: req.params.id
        }
    })
    .then(dbCatData => {
        if (!dbCatData[0]) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
        }
        res.json(dbCatData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// DELETE /api/category/1
router.delete('/:id', (req, res) => {
    Category.destroy({
        where:{
            id:req.params.id
        }
    })
    .then(dbCatData => {
        if (!dbCatData) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
        }
        res.json(dbCatData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});




module.exports = router;