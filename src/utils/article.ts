import { getItem, setItem } from '@utils/localstorage';

const ARTICLE_KEY = 'articles';

export const addArticle = (newArticle: Omit<Article, 'id' | 'bookmark'>) => {
  const articles = getArticles();

  const article: Article = {
    ...newArticle,
    id: articles.length ? articles[articles.length - 1].id : 0,
    bookmark: false,
  };

  setItem(ARTICLE_KEY, [...articles, article]);
};

const changeArticleProperty = (
  targetId: number,
  callback: (targetArticle: Article) => void,
) => {
  const articles = getArticles();
  const targetArticle = articles.find(({ id }) => id === targetId);

  if (!targetArticle) throw new Error('찾는 아티클이 없습니다. 나쁜 유저 🚨🚨');
  console.log(targetArticle);

  callback(targetArticle);
  setItem(ARTICLE_KEY, [...articles, targetArticle]);
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

export const getRandomArticle = (predicate?: (article: Article) => boolean) => {
  const filteredArticles = getArticles(predicate);

  if (!filteredArticles) return null;

  const randomIndex = Math.floor(Math.random() * filteredArticles.length);
  return filteredArticles[randomIndex];
};
