import Groq from "groq-sdk";
import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";
import { configDotenv } from 'dotenv';
import fs from 'fs';
import csv from 'csv-parser';

configDotenv();

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const webResults = asyncHandler(async (req, res) => {
    const result = req.webSearchResult;
    const query = req.queryText;
    const file = req.file?.path;

    console.log("file name: ", file);


    try {
        let csvContent = '';
        
        if (file) {
            // Parse the CSV file
            const data = [];
            fs.createReadStream(file)
                .pipe(csv())
                .on('data', (row) => {
                    data.push(row); 
                })
                .on('end', async () => {
                    csvContent = JSON.stringify(data);

                    const finalPrompt = `Answer the following question: ${query} \n\n Context: ${result} \n\n CSV Data: ${csvContent}`;

                    try {
                        const finalResult = await groq.chat.completions.create({
                            messages: [
                                {
                                    role: "user",
                                    content: finalPrompt,
                                },
                            ],
                            model: "llama3-8b-8192",
                        });

                        // console.log(finalResult.choices[0]?.message?.content);

                        return res.status(200).json(new apiResponse(200, finalResult.choices[0]?.message?.content, "Fetched results"));
                    } catch (error) {
                        throw new apiError("Groq API error: ", error);
                    }
                });
        } else {
            return res.status(400).json(new apiResponse(400, null, "No file uploaded"));
        }
    } catch (error) {
        throw new apiError("Error: ", error);
    }
});

export default webResults;
