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
}

const Badge = ({
  children,
  size = 'small',
  color,
  filled = true,
  toggle,
}: BadgeProps) => {
  const [isFilled, setIsFilled] = useState(filled);
  const onToggle = () => setIsFilled((prev) => !prev);

  const props = {
    color,
    filled: isFilled,
    onClick: toggle ? onToggle : undefined,
  };

  return (
    <BadgeContainer {...props}>
      <Center>
        <Typography variant={size === 'large' ? 'body' : 'desc'}>
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
    const { white, primary100 } = themeColor;

    return {
      width: 'fit-content',
      padding: '8px 12px',
      borderRadius: 30,
      border: filled ? 'none' : `1px solid ${color ?? primary100}`,
      color: filled ? white : color ?? primary100,
      backgroundColor: filled ? color ?? primary100 : 'transparent',

      ':hover': {
        color: filled ? color ?? primary100 : white,
        backgroundColor: filled ? 'transparent' : color ?? primary100,
      },
    };
  },
);
