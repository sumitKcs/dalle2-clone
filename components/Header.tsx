"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Header() {
  const { data: session } = useSession();
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <header className=" w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link href="/">
        <img src="/logo-white.svg" alt="logo" className="w-28 object-contain" />
      </Link>
      <div className="flex justify-between items-center gap-7">
        <Link
          href="/create-post"
          className=" font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hidden md:flex"
          title="Create AI Image"
        >
          Create
        </Link>
        <div className="flex justify-between items-center gap-5">
          <div className={`${!isLoaded && "hidden"}`}>
            <img
              onLoad={() => setIsLoaded(true)}
              src={
                session?.user?.image! ||
                `https://ui-avatars.com/api/?name=${session?.user?.name} `
              }
              className="h-12 w-12 rounded-full"
            />
          </div>
          <div
            className={`h-12 w-12 rounded-full ${
              isLoaded && "hidden"
            } bg-gray-300`}
          ></div>
          <div>
            <button
              onClick={() => signOut()}
              className="rounded-lg px-1 py-1.5 text-sm text-gray-700"
              title="Sign Out"
            >
              <ArrowRightOnRectangleIcon className="font-inter h-7 w-7 inline text-red-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
