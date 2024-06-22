"use client";

import { IoCloseCircleSharp } from "react-icons/io5";
import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import CTA from "./CTA";
import Image from "next/image";

type Myfunctions = {
  handleShowLogin: () => void,
  handleUserProfile: (props: string) => void
}

const AuthLogin = ({ handleShowLogin, handleUserProfile }: Myfunctions) => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      handleUserProfile(session.user?.image as string);
      // console.log(session.user?.image as string)
    } else {
      handleUserProfile('');
    }
  })

  function handleClickedWrapper(e: any) {
    if (e.target.id === 'wrapper') {
      handleShowLogin();
    }
  }
  return (
    <div
      id="wrapper"
      className="w-screen h-screen fixed inset-0 backdrop-filter backdrop-brightness-75 backdrop-blur-md z-[50]"
      onClick={handleClickedWrapper}
    >
      <div
        className="
        relative
        bg-white
        flex flex-col justify-center
        items-center mt-[5rem] mx-auto w-3/4 h-3/4"
      >
        <button
          className="flex flex-row justify-center items-center gap-4 absolute top-0 right-0 p-8"
          onClick={handleShowLogin}
        >
          <span className="font-bold text-lg">Close</span><IoCloseCircleSharp size={27} />
        </button>
        {session ? (
          <div className=" flex flex-col justify-center items-center gap-4 w-auto h-auto">
            <Image
              width={200}
              height={200}
              src={session.user?.image as string}
              className="rounded-full h-20 w-20" alt={""}/>
            <h1 className="text-3xl font-bold">
              Welcome back, {session.user?.name}
            </h1>
            <p className="text-2xl font-semibold">{session.user?.email}</p>
            <div onClick={() => signOut()}>
              <CTA title={" Sign Out"} />
            </div>
          </div>
        ) : (
          <div className=" flex flex-col justify-center items-center w-auto h-auto gap-8">
            <h1 className="text-3xl font-bold">
              You're not logged in
            </h1>
            <div className="flex space-x-5">
              <div onClick={() => signIn("google")}>
                <CTA title={"Sign in with Google"} />
              </div>
              <div onClick={() => signIn("github")}>
                <CTA title={"Sign in with GitHub"} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLogin;