import HeaderLogo from '../header-logo/header-logo';

function HeaderLogin(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
        </div>
      </div>
    </header>
  );
}

export default HeaderLogin;
