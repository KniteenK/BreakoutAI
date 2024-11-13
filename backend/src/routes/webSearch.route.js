import express from 'express'
import webSearch from '../middlewares/webSearch.middleware.js'
import webResults from '../controllers/webResults.controller.js'
import { upload } from '../middlewares/multer.middleware.js'

const router = express.Router()


router.route('/search').post(upload.single('file'), webSearch, webResults) ;

export default router ;