"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu } from "lucide-react";

import { cn } from "@/utils/cn";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // fixed
          "flex max-w-[95vw] md:max-w-[90vw] fixed top-6 md:top-8 inset-x-0 mx-auto border border-zinc-400 md:border-transparent dark:border-white/[0.2] rounded-2xl dark:bg-black bg-white z-[5000] px-8 py-4 items-center justify-between space-x-4 md:shadow-[0_3px_15px] md:shadow-purple-400",
          className
        )}
      >
        <h1 className="text-3xl font-bold">
          NAVBAR
        </h1>
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1  dark:hover:text-neutral-300 hover:text-neutral-500"
                // text-neutral-600
              )}
            >
              <span className="hidden sm:block text-base font-bold">{navItem.name}</span>
              <span className="block ">{navItem.icon}</span>
              {/* sm:hidden */}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4 font-medium">
          <button className="bg-[rgb(249,245,255)] text-purple-800 py-2 px-4 border-2 border-purple-200 rounded-lg">
            Log In
          </button>
          <button className="bg-[#7f56d9] border-2 border-[#7f56d9] text-white py-2 px-4 rounded-lg">
            Sign Up
          </button>
        </div>
        <div className="flex md:hidden">
          <Menu />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
