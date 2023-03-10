import { getItem, setItem } from '@utils/localstorage';

const ARTICLE_KEY = 'articles';

export const addArticle = (newArticle: Omit<Article, 'id' | 'bookmark'>) => {
  const articles = getArticles();

  const article: Article = {
    ...newArticle,
    id: articles.length ? articles[articles.length - 1].id + 1 : 0,
    bookmark: false,
  };

  saveArticle([...articles, article]);
};

const changeArticleProperty = (
  targetId: number,
  callback: (targetArticle: Article) => void,
) => {
  const articles = getArticles().map((article) => {
    if (article.id === targetId) {
      callback(article);
    }
    return article;
  });

  saveArticle(articles);

  return articles.find(({ id }) => id === targetId);
};

export const bookmarkArticle = (targetId: number) =>
  changeArticleProperty(targetId, (article) => {
    article.bookmark = true;
  });

export const readArticle = (targetId: number) =>
  changeArticleProperty(targetId, (article) => {
    article.readAt = new Date().toString();
  });

export const getArticles = (predicate?: (article: Article) => boolean) => {
  const articles = getItem<Article[]>(ARTICLE_KEY) ?? [];
  return predicate ? articles.filter(predicate) : articles;
};

export const getRandomArticle = (
  predicate: (article: Article) => boolean = (article) =>
    article.readAt === undefined,
) => {
  const filteredArticles = getArticles(predicate);

  if (!filteredArticles) return null;

  const randomIndex = Math.floor(Math.random() * filteredArticles.length);
  return filteredArticles[randomIndex];
};

export const saveArticle = (articles: Article[]) => {
  const sortedArticles = articles.sort((a, b) => a.id - b.id);
  setItem(ARTICLE_KEY, sortedArticles);
};
