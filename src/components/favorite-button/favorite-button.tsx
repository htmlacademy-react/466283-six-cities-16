type FavoriteButtonProps = {
  isFavorite: boolean;
  className: string;
}

function FavoriteButton({isFavorite, className}: FavoriteButtonProps): JSX.Element {

  return (
    <button className={`${isFavorite ? `${className}__bookmark-button--active` : ''} ${className}__bookmark-button button`} type="button">
      <svg className={`${className}__bookmark-icon`} width={className === 'offer' ? '31' : '18'} height={className === 'offer' ? '33' : '19'}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>

  );
}
export default FavoriteButton;
