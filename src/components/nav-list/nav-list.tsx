import { CITIES } from '../../const';
import { CityName } from '../../types/cities';
import NavItem from '../nav-item/nav-item';
type CityLinkListProps = {
  activeCity: string;
  onCityChange: (city: CityName) => void;
};
function NavList({ activeCity, onCityChange }: CityLinkListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.keys(CITIES).map((city) => (
          <li key={city} className="locations__item">
            <NavItem
              city={city as CityName}
              isActive={city === activeCity}
              onCityChange={onCityChange}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NavList;
