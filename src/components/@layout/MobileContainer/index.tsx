import { css, useTheme } from '@emotion/react';
import { ReactNode } from 'react';

interface MobileContainerProps {
  children: ReactNode;
}

const MobileContainer = ({ children }: MobileContainerProps) => {
  const { color } = useTheme();
  const { white } = color;

  const containerStyle = css`
    display: flex;
    flex-direction: column;
    max-width: 640px;
    min-width: 375px;
    width: 100%;
    height: 100vh;
    margin: auto;
    overflow-y: auto;
    background-color: ${white};
  `;

  return <div css={containerStyle}>{children}</div>;
};

export default MobileContainer;
