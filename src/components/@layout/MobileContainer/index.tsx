import { css, useTheme } from '@emotion/react';
import { Outlet } from 'react-router-dom';

const MobileContainer = () => {
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
    padding: 0 16px 50px 16px;
    overflow-y: auto;
    background-color: ${white};
  `;

  return (
    <div css={containerStyle}>
      <Outlet />
    </div>
  );
};

export default MobileContainer;
