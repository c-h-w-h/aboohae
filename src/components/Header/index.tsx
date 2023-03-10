import Icon from '@components/Icon';
import Typography from '@components/Typography';
import Flexbox from '@components-layout/Flexbox';
import { css, useTheme } from '@emotion/react';
import { MdAdd, MdHome, MdList } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { color: themeColor } = useTheme();
  const { primary100, gray100 } = themeColor;

  const { pathname } = useLocation();

  const { color } = useTheme();
  const { black } = color;

  return (
    <Flexbox as="header" css={containerStyle} justifyContent="space-between">
      <Link to="/" css={linkStyle}>
        <Typography variant={'subtitle1'} color={black}>
          🏦 아부해
        </Typography>
      </Link>
      <Flexbox as="nav">
        <Link to="/" css={linkStyle}>
          <Icon
            source={MdHome}
            size={24}
            color={pathname === '/' ? primary100 : gray100}
          />
        </Link>
        <Link to="/bank" css={linkStyle}>
          <Icon
            source={MdList}
            size={24}
            color={pathname === '/bank' ? primary100 : gray100}
          />
        </Link>
        <Link to="/loan" css={linkStyle}>
          <Icon
            source={MdAdd}
            size={24}
            color={pathname === '/loan' ? primary100 : gray100}
          />
        </Link>
      </Flexbox>
    </Flexbox>
  );
};

const containerStyle = css`
  width: 100%;
  padding: 16px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
`;

const linkStyle = css`
  text-decoration: none;

  :hover {
    pointer: cursor;
  }
`;

export default Header;
