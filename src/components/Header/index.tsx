import Link from 'next/link'
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Menu from '../Menu';

const Header: React.FC = () => {
  return ( 
    <header className="shadow-sm shadow-blue-900 py-4 text-blue-700 text-center bg-black">
      <main className="w-2/3 mx-auto flex justify-between items-center flex-wrap">
        <Link href={'/'} className="text-4xl mb-2">
          <span className="text-blue-200">Evidence</span>
        </Link>
        <div className="flex justify-end items-center space-x-2 md:space-x-4 mt-2 md:mt-0 ">
          <ConnectButton />
        </div>
      </main>
    </header>
  )
}

export default Header