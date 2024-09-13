import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
		<>
			<footer className="pt-16 pb-12 bg-white dark:bg-gray-800">
				<div className="max-w-[1140px] mx-auto">
					<div className="">
						<Link href="/" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white mb-10">
							<Image className='max-w-[64px] !h-auto !static' src="/header-logo.png" width={64} height={32}/>
						</Link>
							<ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white text-lg">
								<li>
									<Link href="/" className="mr-4 hover:underline md:mr-12">Home</Link>
								</li>
								<li>
									<Link href="/about/" className="mr-4 hover:underline md:mr-12">About</Link>
								</li>
								<li>
									<Link href="/about/team/" className="mr-4 hover:underline md:mr-12">Team</Link>
								</li>
								<li>
									<Link href="/blog/" className="mr-4 hover:underline md:mr-12">Blog</Link>
								</li>
								<li>
									<Link href="/contact/" className="hover:underline">Contact</Link>
								</li>
							</ul>
					</div>
					<div className="mx-auto max-w-screen-xl text-center pt-6 mt-12 border-t border-[#515a66]">
							<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline">Manish Maurya</Link>. All Rights Reserved.</span>
					</div>
				</div>
			</footer>
		</>
  )
}

export default Footer;