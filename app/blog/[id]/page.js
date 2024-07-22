import React from 'react'
import Link from 'next/link'

const fetchBlogPost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  return data;
};

const BlogDetail = async ({ params }) => {
  const post = await fetchBlogPost(params.id);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-20">
      <div className="max-w-[1140px] mx-auto">
        <h1 className="text-4xl text-center mb-10 capitalize">{post.title}</h1>
				<p className='text-lg'>{post.body}</p>
        <p className='text-lg'><strong>User ID</strong> {post.userId}</p>
        <p className='text-lg'><strong>Post ID</strong> {post.id}</p>
        <div className="text-center mt-10">
          <Link href='/blog' className='text-sm uppercase font-oswald font-medium bg-[#2530c9] text-white pt-[7px] py-[9px] px-4 inline-block hover:bg-[#3e427e] transition-all ease-in-out duration-300'>Back to Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;