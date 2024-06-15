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
    <footer className="w-auto h-[16rem]">
      <div className="bg-[#141718] text-[#E8ECEF] pb-[2rem] pt-[6rem] px-[10rem]">
        <div className=" flex flex-row justify-between items-center ">
          <div className="flex flex-row justify-between gap-8">
            <Logo />
            <div className="border-r border-[#E8ECEF] mx-auto" />
            <p>Headphone Store</p>
          </div>
          <ul className=" flex flex-row gap-16 font-base text-base hover:[&>li]:text-[#FEFEFE] text-[#6C7275]">
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

        <hr className="self-center w-full border-1 border-[#E8ECEF] rounded-xl my-10" />

        <div className="flex flex-row items-start justify-between gap-8 w-full font-thin">
          <div className="flex flex-row justify-start items-start gap-8">
            <p className=" font-thin text-sm">Copyright © 2023 3legant. All rights reserved</p>
            <ul className=" flex flex-row gap-4 font-normal text-base hover:[&>li]:text-[#FEFEFE] text-[#6C7275]">
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
