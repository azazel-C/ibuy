import { Router } from "express";
const router = Router()
import * as categoryController from './controller/category.js'
import { cloudUpload, fileValidation } from "../../utils/multer.js";
import { validation } from "../../middleware/validation.js";
import * as validators from '../category/category.validation.js'



router.get('/', (req ,res)=>{
    res.status(200).json({message:"Category Module"})
})

router.post('/create',validation(validators.createCategory),cloudUpload().single('image'),
categoryController.createCategory)




export default router