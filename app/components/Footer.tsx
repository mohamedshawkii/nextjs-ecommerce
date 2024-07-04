"use client";
import Logo from "@/public/svgs/Logo";
import React from "react";
import { TiSocialFacebook, TiSocialInstagram, } from "react-icons/ti";
import { RiYoutubeLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const currentPath = usePathname();
  return (
    <footer>
      <div className="
        Xsm:max-Beforexl:px-[2.5rem]
      bg-[#141718] text-[#E8ECEF]
        pb-[2rem] pt-[6rem] px-[10rem]
        ">
        <div className="Xsm:max-Beforexl:flex-col flex flex-row justify-between items-center gap-8">

          <div className="
            Xsm:max-Beforexl:flex
            Xsm:max-Beforexl:flex-col
            Xsm:max-Beforexl:items-center
            Xsm:max-Beforexl:justify-center
            Xsm:max-Beforexl:gap-4
            flex flex-row justify-between items-center gap-8
           ">
            <Logo />
            <div className="
            Xsm:max-Beforexl:border-b 
            Xsm:max-Beforexl:w-8
            Xsm:max-Beforexl:h-0
            Beforexl:border-r 
            Beforexl:mx-auto 
            self-center h-8 border-[#E8ECEF]" />
            <p>Headphone Store</p>
          </div>

          <ul className="
          Xsm:max-Beforexl:flex
          Xsm:max-Beforexl:flex-col
          Xsm:max-Beforexl:items-center
          Xsm:max-Beforexl:justify-center
          Xsm:max-Beforexl:gap-4
          flex flex-row gap-16 font-base 
          text-base hover:[&>li]:text-[#FEFEFE] text-[#6C7275]
          ">
            <li>
              <Link href="/" className={`${'/' === currentPath
                ? "text-[#FEFEFE]"
                : "text-[#6C7275]"
                }`}>Home</Link>
            </li>
            <li>
              <Link href="/Shop">Shop</Link>
            </li>
          </ul>
        </div>

        <hr className="self-center w-full border-[#E8ECEF] my-10" />

        <div className="
        Xsm:max-Beforexl:flex-col-reverse 
        Xsm:max-Beforexl:items-center
        Beforexl:flex-row
        flex flex-row items-start justify-between gap-8 
        w-full font-thin Xsm:flex-col
        ">
          <div className="Xsm:max-Beforexl:flex-col Xsm:max-Beforexl:items-center Beforexl:flex-row-reverse flex flex-row justify-start items-start gap-8  ">
            <ul className="Xsm:max-Beforexl:text-center flex flex-row gap-4 font-normal text-base hover:[&>li]:text-[#FEFEFE] text-[#6C7275] Xsm:max-Beforexl:flex-col">
              <li>
                <Link href={'/'}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={'/'}>Terms & Conditions</Link>
              </li>
              <li>
                <Link href={'/'}>Return Policy</Link>
              </li>
            </ul>
            <p className="Xsm:max-Beforexl:text-center font-thin text-sm">Copyright © 2023 3legant. All rights reserved</p>
          </div>
          <div className="flex flex-row items-start justify-between gap-4 text-[#6C7275] ">
            <Link href={'/'}>
              <RiYoutubeLine size={27} className="hover:text-[#FEFEFE]" />
            </Link>

            <Link href={'/'}>
              <TiSocialFacebook size={27} className="hover:text-[#FEFEFE]" />
            </Link>

            <Link href={'/'}>
              <TiSocialInstagram size={27} className="hover:text-[#FEFEFE]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
