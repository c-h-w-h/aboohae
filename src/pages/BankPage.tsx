import Badge from '@components/Badge';
import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import Spacing from '@components/Spacing';
import Flexbox from '@components-layout/Flexbox';
import { CATEGORY } from '@constants/category';
import { Fragment } from 'react';

const BankPage = () => {
  const tabMenu = ['전체', '부채', '적금', '상환'];

  return (
    <div>
      <Flexbox justifyContent={'start'}>
        {tabMenu.map((menu) => (
          <Button key={menu} text={menu} />
        ))}
      </Flexbox>
      <Spacing size={15} />
      <Flexbox justifyContent={'start'}>
        {Object.values(CATEGORY).map((c) => (
          <Badge key={c}>{c}</Badge>
        ))}
      </Flexbox>
      <Spacing size={15} />
      <Flexbox flexDirection="column">
        {DUMMY_ARTICLES.map((article) => {
          const { id, title, readAt } = article;
          return (
            <Fragment key={id}>
              <Checkbox
                value={id.toString()}
                label={title}
                checked={readAt && true}
                onChange={(_) => null}
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

const DUMMY_ARTICLES: Article[] = [
  {
    id: 1,
    link: 'www.naver.com',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categories: ['JavaScript', 'TypeScript'],
    bookmark: false,
    readAt: new Date(),
  },
  {
    id: 2,
    link: 'www.naver.com',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categories: ['DesignSystem'],
    bookmark: false,
    readAt: new Date(),
  },
  {
    id: 3,
    link: 'www.naver.com',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categories: ['JavaScript', 'TypeScript'],
    bookmark: false,
  },
  {
    id: 4,
    link: 'www.naver.com',
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    categories: [],
    bookmark: false,
  },
];
