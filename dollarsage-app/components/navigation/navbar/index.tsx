"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.replace("/");
    }
  }, [session]);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <div className="w-full h-20 bg-[#24305E] sticky top-0">
        <div className="container mx-auto px-4 h-full">
          {session ? (
            <div className="flex justify-between items-center h-full">
              <Logo />
              <button
                type="button"
                className="inline-flex items-center md:hidden"
                onClick={toggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                  />
                </svg>
              </button>
              <ul className="hidden md:flex gap-x-6 text-2xl text-[#F76C6C]">
                <li>
                  <Link href="/lessons">
                    <p>Lessons</p>
                  </Link>
                </li>
                <li>
                  <Link href="/leaderboard">
                    <p>Leaderboard</p>
                  </Link>
                </li>
                <li>
                  <Link href="/profile">
                    <p>My Profile</p>
                  </Link>
                </li>
              </ul>
              <button
                className="h-12 rounded-lg bg-[#F76C6C] font-bold px-5 text-[#24305E]"
                onClick={handleSignOut}
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex justify-between items-center h-full">
              <Logo />
              <button
                type="button"
                className="inline-flex items-center md:hidden"
                onClick={toggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                  />
                </svg>
              </button>
              <Link href="/signup">
                <button className="h-12 rounded-lg bg-[#F76C6C] font-bold px-5 text-[#24305E]">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
