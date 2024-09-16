'use client'
import { useState } from 'react';
import { useParams } from 'next/navigation'
import { observer } from 'mobx-react-lite';
import articleStore from '../../../store/articleStore';

const ArticlePage = observer(() => {
  const { id }= useParams();
  const article = articleStore.getArticle(Number(id));
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(article?.title || '');
  const [content, setContent] = useState(article?.content || '');

  const handleSave = () => {
    articleStore.updateArticle(Number(id), { ...article, title, content });
    setIsEditing(false);
  };

  if (!article) return <div>Article not found</div>;

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h1>{article.title}</h1>
          <p>{article.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
});

export default ArticlePage;
