const productModel = require('../models/product.schema');
// const path = require('path') ;

const addproduct = async (req,res) => {
    console.log(req.file);
    console.log(req.body); 
    try {
        let data = await productModel.create({...req.body,image:req.file.path});
        console.log(data);
        return res.redirect('back');
    } catch (error) {
        console.log(error)
        res.send('Product not added')
    }
}

const productView = async(req,res) => {
    try {

        const products = await productModel.find({}).populate({
            path: "CategoryId"
        }).populate({
            path:"SubCategoryId"
        }).populate({
            path:"ExtraCategoryId"
        });
        // console.log("Products before populate:", products);
        // const populatedProducts = await productModel.populate(products, { path: "CategoryId", select: 'name' });
        res.render("products",{products})
        // return res.render("products", { product });
      } catch (error) {
        console.log(error);
      }
}

const deleteProduct = async(req,res) => {
    try{
        const {id} = req.params;
        console.log(id);
        await productModel.findByIdAndDelete(id);
        res.redirect('back');
    }catch(error){
        console.log(error);
        res.send("unable to delete product data")
    }
}

module.exports = {addproduct, productView, deleteProduct}