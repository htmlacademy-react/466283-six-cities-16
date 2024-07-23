import { FAVORITE_BUTTON } from '../../const';
type ButtonFavorite = {
  buttonActive: boolean;
};
function FavoriteButton({ buttonActive }: ButtonFavorite): JSX.Element {
  const classActive: string = buttonActive ? FAVORITE_BUTTON : '';
  return (
    <button
      className={`place-card__bookmark-button ${classActive} button`}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export default FavoriteButton;
