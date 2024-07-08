import NavItem from '../nav-item/nav-item';

function NavList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
    </ul>
  );
}

export default NavList;
