import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
function Login() {
  const [login ,setLogin]=useState(false)
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent ">
      <Head>
        <title>p-flix</title>
        <link rel="icon" href="./logo3.png" />
      </Head>
      <img
        src="./auth.jpg"
        layout="fill"
        alt=""
        className=" -z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
      <img
        src="logo3.png"
        alt=""
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <form action="" className="absolute mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl font-semibold ">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input type="email" placeholder="Email" className="input" />
          </label>
          <label className="inline-block w-full">
            <input type="password" placeholder="Password" className="input" />
          </label>
        </div>
        <button type="submit" className="w-full rounded bg-[#e50914] py-3 font-semibold">Sign In</button>
        <div className="text-[gray]">
          New to P-flix?{' '}
          <button type="submit" className="text-white hover:underline">Sign up now</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
