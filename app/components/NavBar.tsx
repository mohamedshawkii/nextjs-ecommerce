"use client"

import { CiMenuFries, CiMenuBurger } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import UserIcon from '../../public/svgs/UserIcon'
import ShopingBag from '../../public/svgs/ShopingBag'
import Copoun from "@/public/svgs/Copoun";
import { CTAWithUnderLine } from "./CTAWithUnderLine";
import LogoBlack from "@/public/svgs/LogoBlack";
import AuthLogin from "./AuthLogin";
import Image from "next/image";
import SearchBar from "./SearchBar";
import SideTableCart from "./SideTableCart";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { usePathname } from "next/navigation";
import { GrClose } from "react-icons/gr";
import { easeInOut, motion, useMotionValueEvent, useScroll } from 'framer-motion'

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
  ];

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [userProfile, setuserProfile] = useState<string>('');
  const [openCart, setOpenCart] = useState(false);
  const [closeOffer, setCloseOffer] = useState(false)
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const currentPath = usePathname();
  const { cartQuantity } = useShoppingCart();

  function handleShowLogin(): void {
    setShowLogin((pre: boolean) => !pre);
  }

  function handleOpenCart(): void {
    setOpenCart((pre: boolean) => !pre);
  }

  const handleUserProfile = (props: string) => {
    setuserProfile(props);
  }

  useEffect(() => {
    if (showLogin || openCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [showLogin, openCart]);

  function handleNavDisplay() {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleNavDisplay)
    return () => { window.addEventListener('scroll', handleNavDisplay) }
  }, [lastScrollY])

  return (
    <motion.nav
      variants={{ visible: { translateY: '0rem', }, hidden: { translateY: '-8rem', } }}
      animate={show ? 'visible' : 'hidden'}
      transition={{ duration: 1, ease: easeInOut, type: "tween", stiffness: 100 }}
      className="
    bg-[#FEFEFE]
    z-[49]
    fixed
    w-full
    sm:max-md:gap-1
  ">
      <div className={`
  flex flex-row justify-center 
  items-center w-full h-[2.7rem]
    text-[#FEFEFE] 
    bg-[#141718] ${closeOffer ? 'Xsm:hidden' : ''}`}
      >
        <div className="Xsm:max-sm:ml-0 ml-auto flex flex-row gap-3 items-center">
          <Copoun />
          <p className="Xsm:max-sm:text-xs">30% off storewide — Limited time!</p>
          <div className="Xsm:max-Beforexl:hidden">
            <CTAWithUnderLine />
          </div>
        </div>

        <div className="Xsm:max-sm:ml-2 sm:ml-auto Beforexl:pr-[1rem] ml-16 flex items-center">
          <button onClick={() => setCloseOffer(true)}>
            <GrClose size={14} />
          </button>
        </div>
      </div>

      <div className="
Xsm:max-Beforexl:px-[2.5rem]
py-4
px-[10rem]
flex flex-row 
justify-between
items-center"
      >
        <div className="sm:flex-row-reverse flex flex-row justify-end items-center">
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
          <div className="Xsm:max-sm:ml-2 mr-auto mt-1 flex items-center">
            <LogoBlack />
          </div>
        </div>

        <div className="mx-auto flex flex-row Xsm:max-sm:hidden">
          {NavLinks.map((item, index) => (
            <div
              key={index}
              className="
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
            ${item.href === currentPath
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
          <div className="Xsm:max-Beforexl:hidden flex items-center">
            <SearchBar />
          </div>
          <div className="Xsm:max-Beforexl:hidden flex items-center">
            <button onClick={handleShowLogin}>
              {userProfile ? (
                <div className="w-[1.5rem] h-[1.5rem]">
                  <Image src={userProfile} alt='profileImage' priority width={250} height={250} className="w-[2rem] h-auto object-cover object-center rounded-full" />
                </div>
              ) : <UserIcon />}
            </button>
            {showLogin && <AuthLogin handleUserProfile={handleUserProfile} handleShowLogin={handleShowLogin} />}
          </div>

          <div className="relative flex flex-col justify-center items-center">
            <button onClick={handleOpenCart}><ShopingBag /></button>
            {cartQuantity !== 0 &&
              <div className="w-[0.7rem] h-[0.7rem] absolute right-0 bottom-0">
                <span className="flex justify-center items-center w-auto h-auto rounded-full bg-black text-white text-[0.5rem] font-bold">
                  {cartQuantity}
                </span>
              </div>
            }
          </div>
          {openCart && <SideTableCart handleOpenCart={handleOpenCart} />}

        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
