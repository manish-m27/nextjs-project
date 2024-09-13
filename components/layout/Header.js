'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from "next/navigation";

const Header = () => {

	const [show, setShow] = useState('');
	const handleClick =  event => {
		setShow('open');
		if (show == 'open') {
			setShow('');
		}
	};

	const pathname = usePathname();
	
  return (
		<>
			<header className="py-6">
				<div className="max-w-[1140px] mx-auto">
					<div className="flex items-center">
						<div className="w-1/2">
							<Link href="/" className='inline-block align-top'>
								<Image className='max-w-[64px] !h-auto !static' src="/header-logo.png"  width={64} height={32}/>
							</Link>
						</div>
						<div className="w-1/2">
							<div className='text-right'>
								<Link className={`text-[28px] leading-none ${show}`} href="#" onClick={handleClick}><i className="fa-sharp fa-regular fa-bars"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className={`mob_nav ${show} fixed w-[400px] bg-[rgba(0,0,0,0.85)] text-white p-10 -left-[400px] inset-y-0 transition-[left] ease-in-out duration-500 z-[99]`}>
				<ul className='relative z-[2]'>
					<li className='text-right mb-2'>
						<Link className={`text-[28px] leading-none ${show}`} href="#" onClick={handleClick}><i className="fa-sharp fa-regular fa-xmark"></i></Link>
					</li>
					<li className='text-[22px] leading-7 font-semibold mb-5'><Link className={`${pathname === '/' ? "!opacity-100" : ""} text-white opacity-70 transition duration-300 ease-in-out hover:opacity-100`} href="/" onClick={handleClick}>Home</Link></li>
					<li className='text-[22px] leading-7 font-semibold mb-5'><Link className={`${pathname?.includes('/about') ? "!opacity-100" : ""} text-white opacity-70 transition duration-300 ease-in-out hover:opacity-100`} href="/about" onClick={handleClick}>About</Link>
						<ul className='mt-5 pl-4'>
							<li className='text-[20px] leading-7 font-semibold mb-5'><Link className={`${pathname === '/about/team' ? "!opacity-100" : ""} text-white opacity-70 transition duration-300 ease-in-out hover:opacity-100`} href="/about/team/" onClick={handleClick}>Team</Link></li>										
						</ul>
					</li>
					<li className='text-[22px] leading-7 font-semibold mb-5'><Link className={`${pathname?.includes('/blog') ? "!opacity-100" : ""} text-white opacity-70 transition duration-300 ease-in-out hover:opacity-100`} href="/blog/" onClick={handleClick}>Blog</Link></li>
					<li className='text-[22px] leading-7 font-semibold'><Link className={`${pathname === '/contact' ? "!opacity-100" : ""} text-white opacity-70 transition duration-300 ease-in-out hover:opacity-100`} href="/contact/" onClick={handleClick}>Contact</Link></li>
				</ul>
			</div>
			<div className='nav_overlay fixed inset-0 bg-[rgba(17,17,17,.3)] cursor-pointer z-[98] opacity-0 invisible transition-all ease-in-out duration-500' onClick={handleClick}></div>
		</>

  )
}

export default Header;