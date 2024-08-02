import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CityName } from '../../types/cities';
import { useAppDispatch } from '../../hooks';
import { cityAction } from '../../store/actions';

interface CityLinkProps {
  city: CityName;
  isActive?: boolean;
  onCityChange?: (city: CityName) => void;
}

function NavItem({
  city,
  isActive = false,
  onCityChange,
}: CityLinkProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(cityAction(city));
    onCityChange?.(city);
  };

  return (
    <Link
      to={AppRoute.Root}
      className={`locations__item-link tabs__item ${
        isActive ? 'tabs__item--active' : ''
      }`}
      onClick={handleClick}
    >
      <span>{city}</span>
    </Link>
  );
}

export default NavItem;
