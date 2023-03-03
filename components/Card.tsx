"use client";

import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import { downloadImage } from "../utils";
import Loader from "./Loader";

type data = {
  _id: number;
  post: DocumentData;
};

function Card({ _id, post }: data) {
  const [isLoaded, setIsLoaded] = useState<Boolean>(false);

  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card roundex-xl">
      <div className={` ${!isLoaded && " hidden"}`}>
        <img
          className="w-full h-auto object-cover rounded-xl "
          onLoad={() => setIsLoaded(true)}
          alt={post.prompt}
          src={post.photoUrl}
        />
        <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
          <p className="text-white text-md overflow-y-auto prompt">
            {post.prompt}
          </p>
          <div className="mt-5 flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold">
                <img
                  className="rounded-full"
                  src={post?.user?.avatar}
                  alt={post?.user?.name}
                  title={post?.user?.name}
                />
              </div>
              <p className="text-white text-sm truncate">{post?.user?.name}</p>
            </div>
            <button
              className="ouline-none bg-transparent border-none"
              type="button"
              onClick={() => downloadImage({ _id, photo: post?.photoUrl })}
            >
              <img
                src="/download.png"
                alt="download"
                className="w-6 h-6 object-contain invert"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        className={` ${
          isLoaded && "hidden"
        } w-full h-full bg-gray-300 rounded-xl justify-center items-center`}
      >
        <div className="w-full h-[400px] flex justify-center items-center">
          <Loader width="w-[50px]" height="h-[50px]" />
        </div>
      </div>
    </div>
  );
}

export default Card;
