import Badge from '@components/Badge';
import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Spacing from '@components/Spacing';
import Flexbox from '@components-layout/Flexbox';
import { CATEGORY } from '@constants/category';
import { getArticles, readArticle, unreadArticle } from '@utils/article';
import { Fragment, MouseEvent, useEffect, useMemo, useState } from 'react';

const BankPage = () => {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [selected, setSelected] = useState<number>(0);
  const tabMenu = useMemo(() => ['전체', '부채', '적금', '상환'], []);

  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem('articles') ?? '');
    setArticles(() => storedArticles);
  }, []);

  const getPredicate = (tab: string) => {
    switch (tab) {
      case '부채':
        return (article: Article) => article.readAt === undefined;
      case '적금':
        return (article: Article) => article.bookmark;
      case '상환':
        return (article: Article) => article.readAt !== undefined;
      default:
        return undefined;
    }
  };

  const handleTabMenu = (e: MouseEvent<HTMLButtonElement>) => {
    const customTabIndex = e.currentTarget.dataset.tabIndex;
    if (!customTabIndex) return;

    const currentIndex = +customTabIndex;
    setArticles(() => getArticles(getPredicate(tabMenu[currentIndex])));
    setSelected(customTabIndex === undefined ? 0 : currentIndex);
  };

  return (
    <div>
      <Flexbox justifyContent={'start'}>
        {tabMenu.map((menu, idx) => (
          <Button
            key={menu}
            text={menu}
            variant={selected === idx ? 'dark' : 'light'}
            data-tab-index={idx}
            onClick={handleTabMenu}
          />
        ))}
      </Flexbox>
      <Spacing size={15} />
      <Flexbox justifyContent={'start'}>
        {Object.values(CATEGORY).map((c) => (
          <Badge
            key={c}
            filled={false}
            toggle={true}
            onClick={() => alert('준비중입니다!')}
          >
            {c}
          </Badge>
        ))}
      </Flexbox>
      <Spacing size={20} />
      <Flexbox flexDirection="column" alignItems={'flex-start'}>
        {articles &&
          articles.map((article) => {
            const { id, title, readAt } = article;
            return (
              <Fragment key={id}>
                <Checkbox
                  value={id.toString()}
                  label={title}
                  checked={readAt === undefined ? false : true}
                  onChange={() => {
                    readAt ? unreadArticle(id) : readArticle(id);
                  }}
                />
                <Spacing size={15} />
              </Fragment>
            );
          })}
      </Flexbox>
    </div>
  );
};

export default BankPage;
