// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { adminDb } from '@/firebaseAdmin'
import { v2 as cloudinary } from 'cloudinary'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    success: boolean;
    message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try{
        const {name, prompt, photo, session} = req.body;
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_key,
        api_secret: process.env.CLOUDINARY_API_SECRET
      });
    const photoUrl = await cloudinary.uploader.upload(photo)
    await adminDb
    .collection('users')
    .doc(session?.user?.email!)
    .collection("image")
    .doc(photoUrl.url)
    res.status(200).json({ success: true , message: `photoUrl: ${photoUrl.url}` });
    }catch(error){
        res.status(500).json({ success: false , message: `${error}` });
    }
 

   


      
}
