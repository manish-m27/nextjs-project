import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
		<>
			<footer className="py-4 bg-white md:py-8 lg:py-20 dark:bg-gray-800">
				<div className="max-w-[1140px] mx-auto">
					<div className="mx-auto max-w-screen-xl text-center">
							<Link href="/" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
								<Image className='max-w-[64px] !h-auto !static' src="/header-logo.png" width={64} height={32}/>
							</Link>
							<p className="my-6 text-gray-500 dark:text-gray-400">Open-source library of over 400+ web components and interactive elements built for better web.</p>
							<ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
									<li>
										<Link href="/" className="mr-4 hover:underline md:mr-6">Home</Link>
									</li>
									<li>
										<Link href="/about/" className="mr-4 hover:underline md:mr-6">About</Link>
									</li>
									<li>
										<Link href="/about/team/" className="mr-4 hover:underline md:mr-6">Team</Link>
									</li>
									<li>
										<Link href="/blog/" className="mr-4 hover:underline md:mr-6">Blog</Link>
									</li>
									<li>
										<Link href="/contact/" className="mr-4 hover:underline md:mr-6">Contact</Link>
									</li>
							</ul>
							<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline">Kinex Media</Link>. All Rights Reserved.</span>
					</div>
				</div>
			</footer>
		</>
  )
}

export default Footer;