"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useParams } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  return (
    <header>
      <div className="main-container inner">
        <Link href="/">
          <span className="flex items-center gap-2">
            <Image
              src="logo.svg"
              alt="crTrackerLogo"
              width={32}
              height={40}
            ></Image>
            <span className="font-bold">CRtracker</span>
          </span>
        </Link>
        <nav>
          <Link
            href="/"
            className={cn("nav-link", {
              "is-active": pathName == "/",
              isHome: true,
            })}
          >
            Home
          </Link>
          <p>Search modal</p>
          <Link
            href="/coins"
            className={cn("nav-link", {
              "is-active": pathName == "/coins",
              isHome: true,
            })}
          >
            All coins
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
