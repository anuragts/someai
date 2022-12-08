import { ChatGPTAPI } from "chatgpt";
import type{ NextApiRequest,NextApiResponse } from "next";

import { config } from 'dotenv';
config();

export default async function (req:NextApiRequest,res:NextApiResponse){

    // write an interface to define new chatgpt api instance and get session token from env

    interface gptAPI {
        sessionToken: string;
    } 

    const api  =  new ChatGPTAPI({
        sessionToken: process.env.SESSION_TOKEN as string ,
        // markdown: false 
    })

    await api.ensureAuth()

    const response = await api.sendMessage(
        'Write a java program that reads a Fahrenheit degree in a double value from the console, then converts it to Celsius and displays the result. '
      )
    
      // response is a markdown-formatted string
      console.log(response)

        res.status(200).json(response)

}