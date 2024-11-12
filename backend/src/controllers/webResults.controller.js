import OPENAI from 'openai';
import asyncHandler from '../utils/asyncHandler.js';
import apiResponse from '../utils/apiResponse.js';
import apiError from '../utils/apiError.js';
import { configDotenv } from 'dotenv';

configDotenv() ;

const openai = new OPENAI({apiKey: process.env.OPENAI_KEY});

const webResults = asyncHandler ( async (req, res) => {
    const {result, query} = req.body ;

    console.log(result) ;

    try {

        const finalResult = await openai.chat.completions({
            model: 'gpt-4o-mini',
            prompt: `Answer the following question: ${query} \n\n Context: ${result}`,
        })
        
        console.log(finalResult) ;
        
        return res.
        status(200).
        json( new apiResponse(200, finalResult, "Fetched results"))
    } catch (error) {
        throw new apiError("error: ", error)
    }
})

export default webResults;