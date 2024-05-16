"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const sections = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const mediaIcons = [
  { image: "/github.png", name: "github", href: "/" },
  { image: "/dribbble.png", name: "insta", href: "/" },
  { image: "/instagram.png", name: "linkdlin", href: "/" },
  { image: "/facebook.png", name: "facebook", href: "/" },
  { image: "/linkedin.png", name: "pin_interest", href: "/" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariant = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition:{
        when : "beforeChildren",
        staggerChildren:0.2,
      }
    },
  };

  const listItemVariant = {
    closed: {
        x:-10,
        opacity:0,
    },
    opened:{
        x:0,
        opacity:1,
    }
  };

  return (
    <div className="h-24 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LOGO */}

      <div className="hidden md:flex gap-4">
        {sections.map((section) => (
          <Link
            href={section.url}
            key={section.title}
            className={`rounded p-1 ${
              pathName === section.url && "bg-black text-white"
            }`}
          >
            {section.title}
          </Link>
        ))}
      </div>

      <div className="">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-2 font-semibold"
        >
          <span className="text-white mr-1">Rajesh</span>
          <span className="w-12 h-8 rounded bg-white text-black">
            Chodavarapu
          </span>
        </Link>
      </div>

      <div className=" hidden md:flex gap-4">
        {mediaIcons.map((mediaIcon) => (
          <Link key={mediaIcon.name} href={mediaIcon.href}>
            <Image
              src={mediaIcon.image}
              alt={mediaIcon.name}
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          <motion.div
            variants={listVariant}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {sections.map((section) => (
              <motion.div variants={listItemVariant}>
                <Link href={section.url} key={section.title}>
                  {section.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Nav;
