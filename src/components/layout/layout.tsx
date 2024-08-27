import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import { GetPageWrapperClass } from '../../utils/get-page-wrapper-class';

function Layout(): JSX.Element {
  return (
    <div className={`page ${GetPageWrapperClass()}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
