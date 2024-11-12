import { getJson } from 'serpapi';
import asyncHandler from '../utils/asyncHandler.js';
import apiResponse from '../utils/apiResponse.js';
import apiError from '../utils/apiError.js';

const webSearch = asyncHandler ( async (req, res) => {
    const {query} = req.body ;

    console.log(req.body) ;

    try {
        const result = await getJson({
            engine: "google",
            domain: "google.com",
            q: query,
            hl: "en",
            safe: "active",
            api_key: process.env.SERPAPI_KEY
        })
        
        console.log(result) ;
        
        return res.
        status(200).
        json( new apiResponse(200, {result, query}, "Fetched results"))
    } catch (error) {
        throw new apiError("error: ", error)
    }
})

export default webSearch;