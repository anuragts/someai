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
        sessionToken: process.env.SESSION_TOKEN as string 
    })

    await api.ensureAuth()

    const response = await api.sendMessage(
        'Write a python version of bubble sort.'
      )
    
      // response is a markdown-formatted string
      console.log(response)

        res.status(200).json(response)

}