import { DocumentData } from "firebase/firestore";
import { downloadImage } from "../utils";

type data = {
  _id: number;
  post: DocumentData;
};

function Card({ _id, post }: data) {
  console.log("card:", post);
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        loading="lazy"
        className="w-full h-auto object-cover roundex-xl"
        src={post.photoUrl}
        alt={post.prompt}
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
  );
}

export default Card;
