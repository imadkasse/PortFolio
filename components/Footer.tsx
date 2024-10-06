"use client";
import {
  Facebook,
  FacebookOutlined,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import Image from "next/image";
// import { a as ScrollLink } from "react-scroll";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="text-white border-t-2 border-gray-600/50">
      <div className="container mx-auto ">
        <footer className="bg-transparent p-10 font-[sans-serif] tracking-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center ">
            <div className="lg:flex lg:items-center">
              <Link href="/">
                <Image
                  src="/imgs/imadLogoBG.png"
                  alt="logo"
                  width={500}
                  height={100}
                  className="w-52"
                />
              </Link>
            </div>

            <div className="lg:flex lg:items-center">
              <ul className="flex space-x-6">
                <li>
                  <Link href="/">
                    <Facebook
                      fontSize="large"
                      className="text-gray-300 hover:text-white "
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Instagram
                      fontSize="large"
                      className="text-gray-300 hover:text-white "
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <LinkedIn
                      fontSize="large"
                      className="text-gray-300 hover:text-white "
                    />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center flex items-center justify-evenly gap-5">
              <h4 className="text-lg font-semibold  text-white">Links</h4>
              <ul className="grow flex justify-between ">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Phone
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    Address
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 text-sm mt-10 text-center">
            © 2024
            <a href="/" target="_blank" className="hover:underline mx-1">
              Imad
            </a>
            All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
