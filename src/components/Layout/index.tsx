import Header from '@components/Header';
import Spacing from '@components/Spacing';
import Container from '@components-layout/Container';
import MobileContainer from '@components-layout/MobileContainer';
import { SPACING } from '@constants/spacing';
import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const bodyStyle = css`
    padding: 0 ${SPACING[60]};
  `;

  return (
    <MobileContainer>
      <Header />
      <Container css={bodyStyle}>
        <Spacing size={20} />
        <Outlet />
        <Spacing size={60} />
      </Container>
    </MobileContainer>
  );
};

export default Layout;
