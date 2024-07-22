const { Router } = require("express");
const { addproduct, productView, deleteProduct } = require("../controllers/product.controller");
const multer = require('multer');

const fileUpload = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const uploads = multer({ storage: fileUpload }).single('image');

const P_router = Router();

P_router.post('/Addproduct',uploads,addproduct);
P_router.get('/products',productView);
P_router.get('/deleteproduct/:id',deleteProduct)
module.exports =  P_router;