'use client'
import React from 'react'
import Link from "next/link";

// export const metadata = {
// 	title: 'Blog - Nextjs Project',
// 	description: 'Blog - Test project',
// };

// const posts = [
// 	{
//    "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//   }
// ];


export default function Blog() {
	
	const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then(data => setPosts(data));
  }, []);

  return (
    <div className='py-20'>
			<div className="max-w-[1140px] mx-auto">
				<h1 className='font-oswald text-[48px] leading-[1.1] mb-12 text-center'>Blog Posts</h1>
				<div className='flex flex-wrap -mx-3 -mb-6'>
					{posts.map((post) => (
						<div className='w-1/3 px-3 mb-6'>
							<div key={post.id} className='border border-[#cfcfcf] h-full p-5 shadow-lg'>
								<h2 className='text-[18px] leading-6 font-oswald font-medium mb-3 capitalize'><Link href={`/blog/${post.id}`} className='transition-all ease-in-out duration-300 hover:text-[#2530c9]'>{post.title}</Link></h2>
								<p className='text-sm'>{post.body}</p>
								<Link href={`/blog/${post.id}`} className='text-sm uppercase font-oswald font-medium bg-[#2530c9] text-white pt-[7px] py-[9px] px-4 inline-block mt-4 hover:bg-[#3e427e] transition-all ease-in-out duration-300'>Read more</Link>
							</div>
						</div>
					))}
				</div>
			</div>
    </div>
  );
}