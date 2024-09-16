'use client'
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import articleStore from './store/articleStore';

const ArticleList = observer(() => {
  return (
    <div>
      <h1>All articles</h1>
      <Link href="/create">
        <button>Create New Article</button>
      </Link>
      <ul>
        {articleStore.articles.map((article) => (
          <li key={article.id}>
            <Link href={`/article/${article.id}`}>
              <div>{article.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default ArticleList;
