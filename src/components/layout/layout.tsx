import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import { PageWrapperClass } from '../../utils/page-wrapper-class';

function Layout(): JSX.Element {
  return (
    <div className={`page ${PageWrapperClass()}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
