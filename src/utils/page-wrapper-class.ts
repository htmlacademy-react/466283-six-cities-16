import { useLocation } from 'react-router-dom';
import { AppRoute } from '../const';
export function PageWrapperClass(): string {
  const location = useLocation();
  let wrapperClass: string = '';
  switch (location?.pathname) {
    case AppRoute.Root as string:
      wrapperClass = 'page--gray page--main';
      break;
    case AppRoute.Login as string:
      wrapperClass = 'page--gray page--login';
      break;
  }
  return wrapperClass;
}
