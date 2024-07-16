import HeaderLogo from '../header-logo/header-logo';
import HeaderAuth from '../header-auth/header-auth';
import { useLocation } from 'react-router-dom';
function Header(): JSX.Element {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          {location.pathname !== '/login' && <HeaderAuth />}
        </div>
      </div>
    </header>
  );
}

export default Header;
