import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const AboutModule = () => {
  return (
	
		<section className='bg-[#2530c9] py-20'>
				<div className="max-w-[1140px] mx-auto">
					<div className="flex items-center flex-wrap">
						<div className="w-[47%] pl-[30px] pr-[50px]">
							<h6 className='text-[20px] leading-[1.3] text-white tracking-[3px] uppercase mb-3'>About company</h6>
							<h2 className='text-[60px] leading-[1.1] font-oswald font-bold text-white mb-7'>Need Amazing Design?</h2>
								<p className='text-[16px] leading-[1.6] text-white'>Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus <a href="/blog" className="border-b border-solid border-[#e6e6e6] hover:text-[#e6e6e6] hover:border-[#abb0f7]">quis elementum</a> Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.</p>
							<div className="mt-[34px]">
								<Link className='bg-[#f49ea8] text-white text-[18px] leading-[1.6] tracking-[3px] font-bold uppercase inline-block py-[15px] px-[45px] rounded-[50px] hover:bg-[#5ca4fb]' href="/about">Learn More</Link>
							</div>
						</div>
						<div className="w-[53%]">
							<div className="flex flex-wrap mx-[-15px]">
								<div className="w-1/2 px-[15px] mt-[104px]">
									<div className="bg-white p-[30px] shadow-[5px_5px_20px_0px_rgba(0,0,0,0.2)] min-h-[337px] flex flex-col justify-center mb-[30px]">
										<div className="bg-[#f49ea8] w-[75px] h-[75px] flex justify-center items-center rounded-full mb-5">
											<Image src="/about-icon1.svg" width={43}  height={43} />
										</div>
										<h4 className='font-oswald text-[24px] leading-[1.2] text-[#111] mb-5'>Sample Headline</h4>
										<p className='text-[16px] leading-[1.8] italic text-[#808080]'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
									</div>
									<div className="bg-white p-[30px] shadow-[5px_5px_20px_0px_rgba(0,0,0,0.2)] min-h-[365px] flex flex-col justify-center">
										<div className="bg-[#fd5ec7] w-[75px] h-[75px] flex justify-center items-center rounded-full mb-5">
											<Image src="/about-icon2.svg" width={43}  height={43} />
										</div>
										<h4 className='font-oswald text-[24px] leading-[1.2] text-[#111] mb-5'>Sample Headline</h4>
										<p className='text-[16px] leading-[1.8] italic text-[#808080]'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
									</div>
								</div>
								<div className="w-1/2 px-[15px]">
									<div className="bg-white p-[30px] shadow-[5px_5px_20px_0px_rgba(0,0,0,0.2)] min-h-[354px] flex flex-col justify-center mb-[30px]">
										<div className="bg-[#6f78f1] w-[75px] h-[75px] flex justify-center items-center rounded-full mb-5">
											<Image src="/about-icon3.svg" width={43}  height={43} />
										</div>
										<h4 className='font-oswald text-[24px] leading-[1.2] text-[#111] mb-5'>Sample Headline</h4>
										<p className='text-[16px] leading-[1.8] italic text-[#808080]'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
									</div>
									<div className="bg-white p-[30px] shadow-[5px_5px_20px_0px_rgba(0,0,0,0.2)] min-h-[348px] flex flex-col justify-center">
										<div className="bg-[#5ca4fb] w-[75px] h-[75px] flex justify-center items-center rounded-full mb-5">
											<Image src="/about-icon4.svg" width={43}  height={43} />
										</div>
										<h4 className='font-oswald text-[24px] leading-[1.2] text-[#111] mb-5'>Sample Headline</h4>
										<p className='text-[16px] leading-[1.8] italic text-[#808080]'>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
  )
}

export default AboutModule;