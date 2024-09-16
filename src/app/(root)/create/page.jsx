'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import articleStore from '../../store/articleStore';

export default function CreateArticle() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    articleStore.addArticle({
      id: Date.now(),
      title,
      content,
      likes: 0,
      tags: []
    });
    router.push('/');
  };

  return (
    <div>
      <h1>Create Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br/>
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br/>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
