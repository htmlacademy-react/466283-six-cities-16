import { useState } from 'react';
import { sortOptions } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sortTypeAction } from '../../store/actions';
import { PlacesSortType } from '../../types/sorting-options';

function SortingOptions(): JSX.Element {
  const sortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();
  //places__option--active - active class
  const [isOpen, setIsOpen] = useState(false);
  const activeClass = isOpen ? 'places__options--opened' : '';
  const a = (key: PlacesSortType) => {
    dispatch(sortTypeAction(key));
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen((state) => !state)}
      >
        {sortOptions[sortType].name}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${activeClass} `}>
        {Object.keys(sortOptions).map((key) => (
          <li
            key={sortOptions[key as PlacesSortType].name}
            className={`places__option ${
              sortType === key && 'places__option--active'
            }`}
            tabIndex={0}
            onClick={() => a(key as PlacesSortType)}
          >
            {sortOptions[key as PlacesSortType].name}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingOptions;
