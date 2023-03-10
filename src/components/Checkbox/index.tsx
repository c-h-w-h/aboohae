import Flexbox from '@components-layout/Flexbox';
import { css, useTheme } from '@emotion/react';
import { DefaultProps } from '@util-types/DefaultProps';
import { CSSProperties } from 'react';
import { MdCheck } from 'react-icons/md';

type CheckboxProps = DefaultProps<HTMLInputElement> & {
  direction?: CSSProperties['flexDirection'];
  label?: string;
  value: string;
  onChange?: (checked: boolean) => void;
};

const Checkbox = ({
  direction = 'row',
  label: checkboxLabel = '',
  value,
  onChange,
}: CheckboxProps) => {
  const { color: themeColor } = useTheme();
  const { white, primary100, gray100 } = themeColor;

  return (
    <Flexbox flexDirection={direction} justifyContent="start">
      <input
        css={css`
          display: none;
        `}
        type="checkbox"
        id={`checkbox_${value}`}
        name={`checkbox_${value}`}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.checked);
          }
        }}
      />
      <label
        css={css`
          border-radius: 50%;
          background-color: ${gray100};
          text-align: center;

          cursor: pointer;

          input[type='checkbox'] + & {
            display: block;
            width: 32px;
            height: 32px;
          }

          input[type='checkbox']:checked + & {
            background-color: ${primary100};
          }
        `}
        htmlFor={`checkbox_${value}`}
      >
        <MdCheck size={32} color={white} />
      </label>
      <label
        css={css`
          cursor: pointer;

          font-size: 16px;

          input[type='checkbox']:checked + label + & {
            color: ${gray100};
            text-decoration: line-through;
          }
        `}
        htmlFor={`checkbox_${value}`}
      >
        {checkboxLabel}
      </label>
    </Flexbox>
  );
};

export default Checkbox;
