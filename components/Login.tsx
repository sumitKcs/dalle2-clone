"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="w-[100svw] bg-black h-screen xs:h-[100svh] flex flex-col justify-center items-center gap-10">
      <Image src="/logo.svg" width={300} height={300} alt="logo" />
      <p className="text-white font-bold text-4xl xs:text-7xl">
        D&nbsp;&nbsp;A&nbsp;&nbsp;L&nbsp;&nbsp;L&nbsp;&nbsp;.&nbsp;&nbsp;E&nbsp;&nbsp;
        2
      </p>
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse xs:text-5xl"
      >
        Sign In To Continue <br />
      </button>
    </div>
  );
}

export default Login;
