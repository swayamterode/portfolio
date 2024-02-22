'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitcher'
import { BiSolidUser } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'
import { IoChatbox, IoBriefcase } from 'react-icons/io5'
import { BsStack } from 'react-icons/bs'

interface Props {}

const MobileNavbar = (props: Props) => {
  const pathname = usePathname()
  const isActive = (path: string) => {
    return pathname === path
      ? 'bg-[#838285] rounded-lg py-2 text-white dark:bg-gray-300 dark:bg-opacity-50'
      : 'dark:text-gray-300'
  }
  return (
    <div className="md:hidden fixed bottom-4 w-full mx-auto z-50">
      <div className="border border-[#d8d8d9] dark:border-[#57565A] rounded-xl py-3 h-16 bg-gray-300/70 dark:bg-black/10 backdrop-blur-2xl shadow-sm mx-2">
        <ul className="flex h-10 justify-center items-center px-2">
          <Link href="/" className={isActive('/')}>
            <li className="mx-4">
              <HiHome className="text-2xl" />
            </li>
          </Link>
          <Link href="/about" className={isActive('/about')}>
            <li className="mx-4">
              <BiSolidUser className="text-2xl" />
            </li>
          </Link>
          <Link href="/work" className={isActive('/work')}>
            <li className="mx-4">
              <IoBriefcase className="text-2xl" />
            </li>
          </Link>
          <Link href="/tech-stack" className={isActive('/tech-stack')}>
            <li className="mx-4">
              <BsStack className="text-2xl" />
            </li>
          </Link>
          <Link href="/contact" className={isActive('/contact')}>
            <li className="mx-4">
              <IoChatbox className="text-2xl" />
            </li>
          </Link>
          <li className="mx-4">
            <ThemeSwitch />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileNavbar
