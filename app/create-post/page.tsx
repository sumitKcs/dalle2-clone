"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { FormField, Loader } from "@/components";
import getRandomPrompt from "@/utils";
import { useSession } from "next-auth/react";

function CreatePost() {
  const router = useRouter();
  const [generatingIng, setGeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);
  const { data: session } = useSession();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = async () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("/api/generateImage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please enter a prompt");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.prompt && form.photo) {
      setloading(true);
      try {
        const response = await fetch("/api/postImage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: session?.user?.name,
            prompt: form.prompt,
            photo: form.photo,
            session,
          }),
        });
        await response.json();
        router.push("/");
      } catch (error) {
        alert(error);
      } finally {
        setloading(false);
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className=" font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-2-[500px]">
          Create imaginative and visually stunning images generated by DALL-E AI
          and share them with the community.
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="prompt"
            type="text"
            name="prompt"
            placeholder="'a sunlit indoor lounge area with a pool with clear water and another pool with translucent pastel pink water, next to a big window, digital art',"
            value={form.prompt}
            handleChange={handleChange}
            isSurprise
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src="/preview.png"
                alt="preview"
                className=" w-9/12 h-9/12 object-contain opacity-40"
              />
            )}
            {generatingIng && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounde-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-green-700 rounde-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingIng ? "Generating..." : "Generate"}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            Once you have created the imaghe you want, you can share it with
            others in the community.
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? "Sharing..." : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreatePost;
