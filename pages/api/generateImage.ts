// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import openai from '@/dalle'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  photo?: string | undefined
  message: string | undefined
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


    try{
        const {prompt} = req.body
        const aiResponse = await openai.createImage({
          prompt,
          n: 1,
          size: '512x512',
          response_format: "b64_json"
        })
        const image = aiResponse.data.data[0].b64_json
        console.log("image:", image)
        res.status(200).json({ message:"success", photo: image })
    
      } catch(error){
        console.log("error:", error)
    
        res.status(500).send({message: `failed! ${error}`})
      }
      
}
