import Badge from '@components/Badge';
import Button from '@components/Button';
import Input from '@components/Input';
import Spacing from '@components/Spacing';
import Typography from '@components/Typography';
import Flexbox from '@components-layout/Flexbox';
import { CATEGORY } from '@constants/category';
import { css } from '@emotion/react';
import { addArticle } from '@utils/article';
import { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import Checkbox from './Checkbox';

import env from '@/config';

interface MetaResponse extends Response {
  title: string;
  description: string;
  image: string;
}

const CATEGORIES = Object.values(CATEGORY);

const LoanForm = () => {
  const navigate = useNavigate();

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    if (!form) return;

    const formData = new FormData(form);

    const url = formData.get('link');
    if (!url) return;

    const encodedURL = encodeURIComponent(`${url}`);
    const res = await fetch(`${env.API_PATH}/meta?url=${encodedURL}`, {
      mode: 'cors',
    });
    const data = await res.json();

    const { title, description, image: thumbnail } = data as MetaResponse;

    const categories: string[] = [];
    CATEGORIES.forEach((category) => {
      const checked = formData.get(category);
      if (checked) {
        categories.push(category);
      }
    });

    const article = {
      link: `${url}`,
      title,
      categories,
      thumbnail: thumbnail ?? '/default.png',
      description,
    };
    addArticle(article);

    navigate('/bank');
  };

  return (
    <Flexbox
      as="form"
      flexDirection="column"
      alignItems="flex-start"
      onSubmit={onSubmit}
    >
      <Spacing size={20} />
      <label htmlFor="link">
        <Typography variant="subtitle2">
          💸 갚아야 할 아티클을 쌓아봐요
        </Typography>
      </label>
      <Input
        id="link"
        placeholder="링크를 입력해요~"
        variant={'subtitle2'}
        width={'100%'}
        required
      />

      <Spacing size={40} />
      <label>
        <Typography variant="subtitle2">😆 빌릴 카테고리를 선택해요</Typography>
      </label>
      <Flexbox gap={'0.5rem'}>
        {CATEGORIES.map((category) => (
          <Checkbox
            key={category}
            id={category}
            label={
              <Badge key={category} size={'small'} filled={false} toggle={true}>
                {category}
              </Badge>
            }
          />
        ))}
      </Flexbox>

      <Spacing size={40} />
      <Button text="등록하기" css={width100} />
    </Flexbox>
  );
};

const width100 = css`
  width: 100%;
`;

export default LoanForm;
