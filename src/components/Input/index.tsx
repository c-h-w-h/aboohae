import { TYPOGRAPHY } from '@constants/typography';
import styled from '@emotion/styled';
import { DefaultProps } from '@utils/types/DefaultProps';
import { CSSProperties, LegacyRef, forwardRef } from 'react';

interface InputProps extends DefaultProps<HTMLInputElement> {
  id: string;
  name?: string;
  placeholder?: string;
  isValid?: boolean;
  variant?: TypographyVariant;
  width?: CSSProperties['width'];
}

const Input = forwardRef(
  (
    {
      id,
      name,
      placeholder = '입력하세요',
      isValid = true,
      ...props
    }: InputProps,
    ref,
  ) => {
    return (
      <InputContainer
        ref={ref as LegacyRef<HTMLInputElement>}
        name={name ? name : id}
        {...{ id, placeholder, isValid, ...props }}
      />
    );
  },
);

const InputContainer = styled.input<
  Pick<InputProps, 'isValid' | 'width' | 'variant'>
>(({ theme, isValid, width, variant = 'body' }) => {
  const { color: themeColor } = theme;
  const { primary100, error, gray200 } = themeColor;

  return {
    width: width ? width : 'fit-content',
    height: 'fit-content',
    padding: '0.5rem 1rem',
    border: `0.125rem solid ${isValid ? primary100 : error}`,
    borderRadius: '0.2rem',
    outline: 'none',
    fontSize: TYPOGRAPHY[variant].size,
    fontWeight: TYPOGRAPHY.body.weight,

    '::placeholder': {
      color: gray200,
      fontSize: TYPOGRAPHY[variant].size,
      fontWeight: TYPOGRAPHY.body.weight,
    },

    ':focus': {
      border: isValid ? `0.1rem solid ${primary100}` : `0.1rem solid ${error}`,
      transition: 'all 0.1s',
    },
  };
});

Input.displayName = 'Input';
export default Input;
