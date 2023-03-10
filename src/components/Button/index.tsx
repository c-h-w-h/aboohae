import Icon, { IconSource } from '@components/Icon';
import Typography from '@components/Typography';
import { css, useTheme } from '@emotion/react';
import { flexboxStyle } from '@styles/flex-box';
import { pixelToRem } from '@utils/pixelToRem';
import { DefaultProps } from '@utils/types/DefaultProps';
import { CSSProperties } from 'react';

type ButtonShapeVariant = 'round' | 'square';
type ButtonThemeVariant = 'light' | 'dark';
type ButtonVariant =
  | ButtonShapeVariant
  | ButtonThemeVariant
  | `${ButtonShapeVariant} ${ButtonThemeVariant}`;

interface ButtonProps extends DefaultProps<HTMLButtonElement> {
  variant?: ButtonVariant;
  text?: string;
  icon?: IconSource;
  iconSize?: CSSProperties['width'];
  iconPosition?: 'left' | 'right';
  iconTranslateY?: CSSProperties['translate'];
  href?: string;
  disabled?: boolean;
}

const Button = ({
  variant = 'round',
  text,
  icon,
  iconSize = '1.5rem',
  iconPosition = 'left',
  iconTranslateY = 0,
  href,
  disabled,
  ...props
}: ButtonProps) => {
  const { color: themeColor } = useTheme();

  const { white, primary100, primary400, gray200 } = themeColor;

  const isLight = variant.includes('light');
  const isSquare = variant.includes('square');
  const isIconOnly = !!icon && !text;

  const buttonStyle = css`
    width: fit-content;
    padding: 0.75rem;
    border-radius: ${getBorderRadius(isSquare, isIconOnly)};
    color: ${isLight ? primary100 : white};
    background-color: ${isLight ? white : primary100};
    border: 0.125rem solid ${primary100};
    text-decoration: none;

    & > svg,
    & > img {
      transform: translateY(${pixelToRem(`${iconTranslateY}`)});
    }

    &:hover {
      cursor: pointer;
      background-color: ${isLight ? white : primary400};
      ${isLight ? `border: 0.125rem solid ${primary400};` : ''}

      & > * {
        color: ${isLight ? primary400 : white};
      }

      & > svg {
        fill: ${isLight ? primary400 : white};
      }
    }

    &:disabled,
    &.disabled {
      color: ${isLight ? gray200 : white};
      background-color: ${isLight ? white : gray200};
      ${isLight ? `border: 0.125rem solid ${gray200};` : ''}

      & > svg {
        fill: ${isLight ? gray200 : white};
      }
    }
  `;

  const commonProps: Record<string, unknown> = {
    css: [flexboxStyle({ gap: '0.125rem' }), buttonStyle],
    ...props,
  };

  const children = (
    <>
      {icon && iconPosition === 'left' && (
        <Icon
          source={icon}
          size={iconSize}
          color={isLight ? primary100 : white}
        />
      )}
      {text && <Typography variant="body">{text}</Typography>}
      {icon && iconPosition === 'right' && (
        <Icon
          source={icon}
          size={iconSize}
          color={isLight ? primary100 : white}
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} {...commonProps} className={disabled ? 'disabled' : ''}>
        {children}
      </a>
    );
  }

  return (
    <button {...commonProps} disabled={disabled}>
      {children}
    </button>
  );
};

const getBorderRadius = (isSquare: boolean, isIconOnly: boolean) => {
  const percentage = isSquare ? '30%' : '50%';
  const rem = isSquare ? '1rem' : '2.25rem';

  return isIconOnly ? percentage : rem;
};

export default Button;
