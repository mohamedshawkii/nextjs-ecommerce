"use client"

import { CiMenuFries, CiMenuBurger } from "react-icons/ci";
import { useEffect, useState } from "react";
import Link from "next/link";

import UserIcon from '../../public/svgs/UserIcon'
import ShopingBag from '../../public/svgs/ShopingBag'
import Copoun from "@/public/svgs/Copoun";
import { CTAWithUnderLine } from "./CTAWithUnderLine";
import LogoBlack from "@/public/svgs/LogoBlack";
import AuthLogin from "./AuthLogin";
import Image from "next/image";
import SearchBar from "./searchBar";

function NavBar() {
  const NavLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shop",
      href: "/Shop",
    },
    {
      name: "Product",
      href: "/Product",
    },
    {
      name: "ContactUs",
      href: "/Contact Us",
    },
  ];
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const [showLogin, setShowLogin] = useState(false);
  const [userProfile, setuserProfile] = useState<string>('');

  function handleShowLogin(): void {
    setShowLogin((pre: boolean) => !pre);
  }

  const handleUserProfile = (props: string) => {
    setuserProfile(props);
  }
  // console.log(userProfile);

  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
}, [showLogin]);

return (
  <nav
    className="
      z-[49]
      fixed
      w-full
      sm:max-md:gap-1
      bg-transparent"
  >
    <div className="flex flex-row justify-center items-center gap-3 w-full h-[2.7rem] overflow-visible text-[#FEFEFE] bg-[#141718]">
      <Copoun />
      <p>30% off storewide — Limited time!</p>
      <CTAWithUnderLine />
    </div>

    <div className="
      py-4
      px-[10rem]
      flex flex-row 
      justify-between
      items-center"
    >
      <div className="flex flex-row justify-end items-center">
        <div className="sm:hidden relative flex flex-col justify-between items-end">
          {isCollapsed ? (
            <CiMenuBurger
              size={27}
              className=" text-[#000000] cursor-pointer"
              onClick={() => setIsCollapsed((prev) => !prev)}
            />
          ) : (
            <CiMenuFries
              size={27}
              className="text-[#000000] cursor-pointer"
              onClick={() => setIsCollapsed((prev) => !prev)}
            />
          )}
          <div className="mt-10 absolute top-[0px] left-[20px]">
            {isCollapsed ? (
              <nav
                className="
                p-8
                scale-up-center
                flex
                flex-col
                rounded-xl
                gap-1
                justify-center
                items-center
                sm:hidden 
                bg-[#FEFEFE]"
              >
                {NavLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`
                      text-[#6C7275]
                      hover:text-[#000000]
                        rounded-md 
                        font-medium 
                        w-full
                        h-full
                        py-3 px-7
                        ${item.name === isActive
                        ? "text-[#000000]"
                        : ""
                      }`}
                  >
                    <button
                      onClick={() => setIsActive(item.name)}
                    >
                      {item.name}
                    </button>
                  </Link>))}
              </nav>
            ) : null}
          </div>
        </div>
      </div>
      <LogoBlack />
      <div className="mx-auto flex flex-row">
        {NavLinks.map((item, index) => (
          <div
            key={index}
            className="
          flex
          flex-row
          gap-5
          justify-end
          items-end
          xtsm:max-sm:hidden
          align-middle
          text-center"
          >
            <Link href={item.href}>
              <button
                onClick={() => setIsActive(item.name)}
                className={`
            rounded-md
            text-base
            font-medium
            py-2 px-6
            ${item.name === isActive
                    ? "text-[#000000]"
                    : "text-[#6C7275]"
                  }
            `}
              >
                {item.name}
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-center items-center gap-2">
        <SearchBar />
        <button onClick={handleShowLogin}>
          {userProfile ? (
            <div className="w-[1.5rem] h-[1.5rem]">
              <Image src={userProfile} alt='profileImage' priority width={250} height={250} className="w-[2rem] h-auto object-cover object-center rounded-full" />
            </div>
          ) : <UserIcon />}
        </button>
        <button>
          <ShopingBag />
        </button>
        <div className="flex justify-center items-center w-[1.3rem] h-[1.3rem] rounded-full bg-black text-white text-sm text-center">
          1
        </div>
        {showLogin && <AuthLogin handleUserProfile={handleUserProfile} handleShowLogin={handleShowLogin} />}
      </div>
    </div>
  </nav>
);
}

export default NavBar;
