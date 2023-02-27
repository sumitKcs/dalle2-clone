// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import admin from "firebase-admin";
import { adminDb } from '../../firebaseAdmin';
import { v2 as cloudinary } from 'cloudinary'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    success: boolean;
    message: string
}

export const config = {
    api: {
        bodyParser: {
            sizeLimit: "8mb", // Set desired value here
          },
    },
  }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try{
        const {name, prompt, photo, session} = req.body;
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });
        const photoUrl = await cloudinary.uploader.upload(photo)

        const post: Post = {
            prompt,
            photoUrl: photoUrl.url,
            createdAt: admin.firestore.Timestamp.now(),
            user: {
                _id: session?.user?.email,
                name: session?.user?.name,
                avatar:  session?.user?.image! ||
                `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            }
    }

     await adminDb.collection('posts').add(post)

    res.status(200).json({ success: true , message: `photoUrl: ${photoUrl.url}` });
    }catch(error){
        res.status(500).json({ success: false , message: `${error}` });
    }
      
}
