import Badge from '@components/Badge';
import Button from '@components/Button';
import Image from '@components/Image';
import Spacing from '@components/Spacing';
import Typography from '@components/Typography';
import Flexbox from '@components-layout/Flexbox';
import { SPACING } from '@constants/spacing';
import { css, useTheme } from '@emotion/react';
import { bookmarkArticle, getRandomArticle, readArticle } from '@utils/article';
import { useState } from 'react';
import { MdBookmark } from 'react-icons/md';

const DEFAULT_IMAGE =
  'http://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/duRO/image/5zickyx3FIcLAz_Pcd_CngWD68s.JPG';

const IndexPage = () => {
  const { color } = useTheme();
  const [article, setArticle] = useState(getRandomArticle());

  if (!article) return <>없어요</>;

  const handleClickArticle = () => {
    window.open(article.link, '_blank');
  };

  return (
    <>
      <Spacing size={40} />
      <Flexbox justifyContent={'space-between'}>
        <Flexbox justifyContent={'start'}>
          {article.categories.map((category) => (
            <Badge key={category} outline color={color.primary100}>
              {category}
            </Badge>
          ))}
        </Flexbox>
        <MdBookmark
          size={30}
          color={article.bookmark ? color.primary100 : color.gray100}
          onClick={() => {
            const bookmarkedArticle = bookmarkArticle(article.id);
            if (!bookmarkedArticle) return;
            setArticle(bookmarkedArticle);
          }}
        />
      </Flexbox>
      <Spacing size={30} />
      <Image
        src={article.thumbnail ?? DEFAULT_IMAGE}
        alt={article.title}
        size="large"
        shape="rounded"
        css={css`
          width: 100%;
          max-height: 360px;
          object-fit: cover;
          cursor: pointer;
        `}
        onClick={handleClickArticle}
      />
      <Spacing size={30} />
      <Typography variant="title2">{article.title}</Typography>
      <Spacing size={30} />
      {article.description && (
        <Typography variant="desc">{article.description}</Typography>
      )}
      <Spacing size={30} />
      <Flexbox
        css={css`
          position: absolute;
          bottom: ${SPACING[40]};
          width: calc(100% - 120px);

          & > button {
            flex: 1;
          }
        `}
        justifyContent={'start'}
      >
        <Button
          variant="light"
          text={'안갚을래요;;;'}
          color={color.primary100}
          onClick={() => {
            setArticle(getRandomArticle());
          }}
        />
        <Button
          text={'갚았어요'}
          color={color.primary100}
          onClick={() => {
            readArticle(article.id);
            setArticle(getRandomArticle());
          }}
        />
      </Flexbox>
    </>
  );
};

export default IndexPage;
