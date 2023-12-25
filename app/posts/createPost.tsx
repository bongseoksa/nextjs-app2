'use client'

import { useState } from "react"

export const CreatePost =  () => {
    const [title, setTitle] = useState<string>('');

    /** Post 생성 API 요청 */
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //브라우저 리프레시 방지

        await fetch(`http://127.0.0.1:8090/api/collections/posts/records`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title})
        });
        setTitle('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button type="submit">
            Create Post
        </button>
    </form>
  )
}

export default CreatePost;