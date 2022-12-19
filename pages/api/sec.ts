import { ChatGPTAPI, getOpenAIAuth } from 'chatgpt'
import { config } from 'dotenv';
config();

import type { NextApiRequest,NextApiResponse } from "next";

export default async function sec(req:NextApiRequest , res:NextApiResponse) {
    const openAIAuth = await getOpenAIAuth({
        email: process.env.OPENAI_EMAIL as string,
        password: process.env.OPENAI_PASSWORD as string,
    
    })

    const api = new ChatGPTAPI({...openAIAuth})

    const response = await api.sendMessage(
        'Write a python version of bubble sort.'
    )

    res.status(200).json(response)
}