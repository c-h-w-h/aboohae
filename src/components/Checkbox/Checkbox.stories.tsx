import { ComponentMeta } from '@storybook/react';

import Checkbox from '.';

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Checkbox>;

export const One = () => {
  return (
    <Checkbox
      value="도훈"
      label="도훈이를 뽑아주세요"
      onChange={(checked) => {
        console.log(checked);
      }}
    />
  );
};

const DUMMY = ['도훈', '세영', '현빈', '우재', '선민'].map((name) => ({
  value: name,
  label: `${name} 뽑아주세요`,
}));

export const Many = () => {
  return DUMMY.map(({ value, label }) => (
    <Checkbox key={value} value={value} label={label} />
  ));
};
