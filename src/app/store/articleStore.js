import { makeAutoObservable } from 'mobx';

class ArticleStore {
  articles = [];

  constructor() {
    makeAutoObservable(this);
  }

  addArticle(article) {
    this.articles.push(article);
  }

  updateArticle(id, updatedArticle) {
    const index = this.articles.findIndex((article) => article.id === id);
    if (index !== -1) {
      this.articles[index] = updatedArticle;
    }
  }

  getArticle(id) {
    return this.articles.find((article) => article.id === id);
  }
}

const articleStore = new ArticleStore();
export default articleStore;
