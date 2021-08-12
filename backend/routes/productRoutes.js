const express=require('express')
const productRouter = express.Router()
const productController=require('./../controllers/productControllers')
productRouter.route('/')
             .post(productController.createProduct)
             .get(productController.getAllProducts)
productRouter.route('/:id')
            .get(productController.getSingleProduct)
            .patch(productController.updateProduct)
            .delete(productController.deleteProduct)

module.exports=productRouter