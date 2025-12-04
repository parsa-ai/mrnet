"use client";
import Link from "next/link";
import { useState } from "react";
import LogoIcon from "../icons/LogoIcon";
export default function Header() {
  const [open, setOpen] = useState(false);
  const menuItems = ['Технология', 'Платформа управления', 'тест-драйв', 'Наша сеть', 'Оставить заявку']
  return (
    <>
      <header className="w-full sticky bg-black py-7.5 main-container md:p-9 top-0 left-0 z-40">
        <div className="flex lg:items-end items-center justify-between ">
          <div className="flex-col lg:flex-row lg:items-end items-start flex gap-4 lg:gap-14">
            <Link href="/" className="flex items-center gap-3">
              <LogoIcon className="max-w-40"></LogoIcon>
            </Link>
            <div className="block sm:flex sm:flex-col text-xs text-cyan-400">
              <span className="text-sm text-cyan-400 tracking-[3px]">+ 7 (800) 600-35-38 </span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center text-sm min-w-7/12 justify-between">
            {menuItems.map((item, index) => {
              return (
                <Link href="#" key={index} className={`text-white/90 hover:text-white ${index === 4 ? "text-blue!" : ""}`}>{item}</Link>
              )
            })}
          </nav>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className="flex-col flex items-center justify-center gap-3 mt-3"
            >
              <span className={`w-7 h-px bg-blue transition  ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`w-7 h-px bg-blue transition  ${open ? "-rotate-45 -translate-y-1.5 " : ""}  `}></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile full-screen menu */}

      </header>
      <div className={`h-[calc(100dvh-125px)] mb-24 transition absolute bg-black w-full  ${open ? "opacity-100" : "opacity-0"}`} >
        <nav className="flex flex-col items-start gap-6 text-sm min-w-7/12 justify-between main-container">
          {menuItems.map((item, index) => {
            return (
              <Link href="#" key={index} className={`text-white/90 hover:text-white text-2xl ${index === 4 ? "text-blue!" : ""}`}>{item}</Link>
            )
          })}
        </nav>
      </div>
    </>
  );
}
