"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";

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
  },[session])

  function handleClickedWrapper(e: any) {
    if (e.target.id === 'wrapper') {
      handleShowLogin();
    }
  }
  return (
    <div
      id="wrapper"
      className="w-screen h-screen fixed inset-0 backdrop-filter backdrop-brightness-75 backdrop-blur-md z-[50] "
      onClick={handleClickedWrapper}
    >
      <div
        className="
        bg-white
        flex flex-col justify-center
        items-center mt-[5rem] mx-auto w-3/4 h-3/4"
      >
        <button className="self-end" onClick={handleShowLogin}>X</button>
        {session ? (
          <div className=" flex flex-col w-auto h-auto">
            <img
              src={session.user?.image as string}
              className="rounded-full h-20 w-20"
            ></img>
            <h1 className="text-3xl text-green-500 font-bold">
              Welcome back, {session.user?.name}
            </h1>
            <p className="text-2xl font-semibold">{session.user?.email}</p>
            <button
              onClick={() => signOut()}
              className="border border-black rounded-lg bg-red-400 px-5 py-1"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className=" flex- flex-col w-auto h-auto">
            <h1 className="text-3xl text-red-500 font-bold">
              You're not logged in
            </h1>
            <div className="flex space-x-5">
              <button
                onClick={() => signIn("google")}
                className="border border-black rounded-lg px-5 py-1"
              >
                Sign in with Google
              </button>
              <button
                onClick={() => signIn("github")}
                className="border border-black rounded-lg bg-green-500 px-5 py-1"
              >
                Sign in with GitHub
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLogin;