"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className="w-[100svw] bg-black h-screen sm:h-[100svh] flex flex-col justify-center items-center gap-5">
      <img className="w-30 h-20" src="/logo.svg" alt="logo" />
      <p className="text-white font-bold text-9xl xs:text-5xl ">
        D&nbsp;&nbsp;A&nbsp;&nbsp;L&nbsp;&nbsp;L&nbsp;&nbsp;.&nbsp;&nbsp;E&nbsp;&nbsp;
        2
      </p>
      <br />
      <br />
      <br />
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-6xl lg:text-3xl animate-pulse"
      >
        Sign In To Continue <br />
      </button>
    </div>
  );
}

export default Login;
