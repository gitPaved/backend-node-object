const expressProduct = require("express");
const routeProduct = expressProduct.Router();
const Product = require("../models/product");

routeProduct.get("/api/products", (req, res, next) => {
  Product.find()
    .then((products) => res.status(200).json({products:products}))
    .catch((error) => res.status(400).json({ error }));
});
routeProduct.get("/api/products/:id", (req, res, next) => {
  Product.findOne({ _id: req.params.id })
    .then((product) => res.status(200).json({product}))
    .catch((error) => res.status(400).json({ error }));
});


routeProduct.post("/api/products", (req, res, next) => {
  console.log(req.body);
  const product = new Product({
    ...req.body,
  });
  product
    .save()
    .then(() => res.status(201).json({product }))
    .catch((error) => res.status(400).json({ error }));
});

routeProduct.put("/api/stuff/:id", (req, res, next) => {
  Product.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(400).json({ error }));
});

routeProduct.delete("/api/stuff/:id", (req, res, next) => {
  Product.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Object suprime" }))
    .catch((error) => res.status(400).json({ error }));
});

module.exports = routeProduct;