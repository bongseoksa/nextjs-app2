
import React from 'react'
import Link from 'next/link';
import CreatePost from './createPost';

/** Post 데이터 가져오기 */
async function getPost() {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/posts/records`, {
        cache: 'no-store',
    });

    // 에러 발생시 자동으로 에러 페이지로 이동
    if(!res.ok) {
        // 현재 파일 기준에서 가장 가까이 있는 error.js 파일 activated
        throw new Error(`failed to fetch data`);
    }

    const data = await res.json();
    return data?.items as any[];
}

const PostsPage = async () => {
const posts = await getPost();
  return (
    <div>
        <h1>Postspage</h1>
        {posts?.map((post)=> {
            return <PostItem key={post.id} post={post}/>
        })}
        <CreatePost />
    </div>
  )
}

export default PostsPage;

const PostItem = ({post} :any) => {
    const {id, title, created} = post || {};
    return (
        <Link href={`/posts/${id}`}>
            <div>
                <h3>{title}</h3>
                <p>{created}</p>
            </div>
        </Link>
    )
}