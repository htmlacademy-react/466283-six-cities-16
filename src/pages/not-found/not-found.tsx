import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './not-found.css';
function NotFound(): JSX.Element {
  return (
    <div className="page-not-found">
      <div className="page-not-found__wrapper">
        <div className="page-not-found__title">Страница не найдена</div>
        <Link to={AppRoute.Root} className="page-not-found__link">
          На главную
        </Link>
      </div>
      <div className="page-not-found__error">404</div>
    </div>
  );
}

export default NotFound;
