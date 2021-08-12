const express=require('express')
const router=express.Router();
const userController = require('./../controllers/userControllers')

router.route('/')
      .post(userController.createUser)
      .get(userController.getAllUser)
router.route('/:id')
      .get(userController.getSingleUser)
      .patch(userController.updateUser)
      .delete(userController.deleteUser)

module.exports=router;