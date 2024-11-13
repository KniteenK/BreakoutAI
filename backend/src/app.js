import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { configDotenv } from 'dotenv';

configDotenv() ;

const app = express();

app.use(cors());

app.use(express.json({limit: "50kb"})) ;
app.use(express.urlencoded({extended: true , limit: "16kb"})) ;
app.use(express.static("public")) ;
app.use(cookieParser()) ;


import webSearchRouter from './routes/webSearch.route.js';
app.use('/api/v1', webSearchRouter) ;
 
export default app ;