import express from 'express'
import webSearch from '../middlewares/webSearch.middleware.js'
import webResults from '../controllers/webResults.controller.js'


const router = express.Router()


router.route('/search').post(webSearch, webResults) ;

export default router ;