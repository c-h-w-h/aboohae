import Badge from '@components/Badge';
import Button from '@components/Button';
import Input from '@components/Input';
import Spacing from '@components/Spacing';
import Typography from '@components/Typography';
import Flexbox from '@components-layout/Flexbox';
import { CATEGORY } from '@constants/category';
import { css } from '@emotion/react';
import { FormEventHandler } from 'react';

const CATEGORIES = Object.values(CATEGORY);

import Checkbox from './Checkbox';

const LoanForm = () => {
  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    if (!form) return;

    const formData = new FormData(form);

    // process data here

    const url = formData.get('link');
    if (!url) return;
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
