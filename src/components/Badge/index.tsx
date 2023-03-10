import Typography from '@components/Typography';
import Center from '@components-layout/Center';
import styled from '@emotion/styled';
import { useState } from 'react';

type BadgeSize = 'large' | 'small';

interface BadgeProps {
  children: string;
  size?: BadgeSize;
  color?: string;
  filled?: boolean;
  toggle?: boolean;
  onClick?: () => void;
}

const Badge = ({
  children,
  size = 'small',
  color,
  filled = true,
  toggle,
  onClick,
}: BadgeProps) => {
  const [isFilled, setIsFilled] = useState(filled);
  const onToggle = () => setIsFilled((prev) => !prev);

  const props = {
    color,
    filled: isFilled,
    onClick: () => {
      if (toggle) onToggle();
      if (onClick) onClick();
    },
  };

  return (
    <BadgeContainer {...props}>
      <Center>
        <Typography variant={size === 'large' ? 'body' : 'desc'} color={color}>
          {children}
        </Typography>
      </Center>
    </BadgeContainer>
  );
};

export default Badge;

const BadgeContainer = styled.div<Omit<BadgeProps, 'children' | 'size'>>(
  ({ theme, color, filled }) => {
    const { color: themeColor } = theme;
    const { white, primary100, primary200 } = themeColor;

    return {
      width: 'fit-content',
      padding: '8px 12px',
      borderRadius: 30,
      border: `1px solid ${primary100}`,
      color: filled ? white : color ?? primary100,
      backgroundColor: filled ? color ?? primary100 : 'transparent',
      cursor: 'pointer',

      ':hover': {
        border: `1px solid ${primary200}`,
        color: filled ? white : color ?? primary200,
        backgroundColor: filled ? color ?? primary200 : 'transparent',
      },
    };
  },
);
