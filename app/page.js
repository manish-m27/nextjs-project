import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/home.module.css'
import AboutModule from '../components/AboutModule'

export default function Home() {
  return (
    <>
			{/* <h1 className={`${styles.test} pb-20`}>text</h1> */}
			<section className='pb-20'>
				<Image className='!h-[437px] object-cover object-position-50-20 !static' src='/home-ban-img.jpg' width={1920} height={1320}/>
				<div className="max-w-[1140px] mx-auto">
					<div className="flex max-w-[864px] mx-auto mt-[-276px]">
						<div className="w-1/2 pr-[21px]">
							<div className="bg-[#2530c9] p-[30px] shadow-[5_5px_20px_0px_rgba(0,0,0,0.4)] min-h-[400px] mt-[154px]">
								<h1 className='font-oswald text-[55px] leading-[1.1] text-white mb-5 mt-[10px]'>Digital Art<br/> & Design Studio</h1>
								<p className='text-[16px] leading-[1.6] text-white'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
								<Link className="text-[14px] leading-[1.6] tracking-[3px] text-white uppercase mt-5 inline-block border-b-2 border-white border-solid hover:text-[#e6e6e6]" href="/blog">learn more</Link>
							</div>
						</div>
						<div className="w-1/2 pl-[21px]">
							<div className="bg-[#3e427e] p-[30px] shadow-[5_5px_20px_0px_rgba(0,0,0,0.4)] min-h-[411px]">
								<h1 className='font-oswald text-[48px] leading-[1.1] text-white mb-5 mt-[20px]'>Our Mission</h1>
								<p className='text-[24px] leading-[1.6] text-white'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<AboutModule />

			<section className='py-20 relative'>
				<div className="max-w-[840px] mx-auto relative z-[2]">
					<div className="flex flex-wrap items-end">
						<div className="pr-5 w-[41%]">
							<Image className='!static !h-[396px] object-cover border-[6px] border-solid border-white' src='/v.jpg' width={800} height={720} />
							<div className="py-[30px]">
								<h2 className='font-oswald text-[36px] leading-[1.1] text-[#2530c9] mb-5'>What We Offer:</h2>
								<ul>
									<li className='relative pl-[25px] text-[18px] leading-[2]'><Image className='absolute left-0 top-3' src='/tick.svg' width={15} height={15}/> Duis aute irure dolor in</li>
									<li className='relative pl-[25px] text-[18px] leading-[2]'><Image className='absolute left-0 top-3' src='/tick.svg' width={15} height={15}/> Excepteur sint occaecat</li>
									<li className='relative pl-[25px] text-[18px] leading-[2]'><Image className='absolute left-0 top-3' src='/tick.svg' width={15} height={15}/> Ut enim ad minim</li>
									<li className='relative pl-[25px] text-[18px] leading-[2]'><Image className='absolute left-0 top-3' src='/tick.svg' width={15} height={15}/> Lorem ipsum dolor</li> 
								</ul>
							</div>
						</div>
						<div className="pl-5 w-[59%]">
							<div className="bg-[#2530c9] min-h-[450px] p-[30px] flex flex-col justify-center">
								<h2 className='font-oswald text-[36px] leading-[1.1] uppercase tracking-[2px] text-white mb-[27px]'>Branding & Design</h2>
								<p className='text-[16px] leading-[1.6] text-white'>Quam nulla porttitor massa id neque aliquam vestibulum morbi. Eu consequat ac felis donec et odio pellentesque. Turpis nunc eget lorem dolor sed. Ornare quam viverra orci sagittis eu volutpat odio. Sed vulputate odio ut enim blandit volutpat.</p>
								<div className="mt-[30px]">
									<Link className='bg-[#f49ea8] text-white text-[18px] leading-[1.6] tracking-[3px] font-bold uppercase inline-block py-[15px] px-[45px] rounded-[50px] hover:bg-[#5ca4fb]' href="/about/team">Learn More</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="h-[217px] w-[calc(50%+116px)] bg-[#f9c9ce] absolute top-[210px] left-0"></div>
				<Image className='max-w-[650px] !h-[326px] object-cover !absolute !left-auto !top-auto !right-0 !bottom-0' src="/branding-right.jpg" width={1458} height={393} />
			</section>

			<section className='bg-[#f9c9ce] pt-[120px] pb-[190px] overflow-hidden'>
				<div className="max-w-[1140px] mx-auto relative">
					<div className="flex bg-white items-center relative z-[2]">
						<div className="w-1/2">
							<Image className='!static' src='/n.jpg' width={800} height={720} />
						</div>
						<div className="w-1/2 py-[30px] px-[60px]">
							<h2 className='font-oswald text-[60px] leading-[1.1] text-[#2530c9] mb-5'>Creative Thinking</h2>
							<p className='text-[16px] leading-[1.6]'>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
							<div className="mt-[30px]">
								<Link className='bg-[#f49ea8] text-white text-[18px] leading-[1.6] tracking-[3px] font-bold uppercase inline-block py-[15px] px-[45px] rounded-[50px] hover:bg-[#5ca4fb]' href="/contact">Learn More</Link>
							</div>
						</div>
					</div>
					<Image className='absolute -top-[60px] -left-[60px]' src='/creative-icon1.svg' width={250} height={250}/>
					<Image className='absolute -bottom-[132px] right-[80px] z-[1]' src='/creative-icon2.svg' width={175} height={109}/>
					<Image className='absolute -bottom-[80px] -right-[63px]' src='/creative-icon3.svg' width={250} height={250}/>
				</div>
			</section>
			
			{/* <section className='py-20 bg-slate-600'>
				<div className=""></div>
			</section> */}
		</>
  )
}
