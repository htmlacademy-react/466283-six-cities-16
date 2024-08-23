import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeFavorite } from '../../store/api-actions';

type FavoriteButtonProps = {
  isFavorite: boolean;
  className: string;
  idItem: string;
}

function FavoriteButton({isFavorite, className, idItem}: FavoriteButtonProps): JSX.Element {
  const [status, setStatus] = useState<boolean>(isFavorite);

  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(changeFavorite({id: idItem, status: Number(!isFavorite)}));
    setStatus(() => !status);
  };
  return (
    <button className={`${isFavorite ? `${className}__bookmark-button--active` : ''} ${className}__bookmark-button button`} type="button"
      onClick={handleClick}
    >
      <svg className={`${className}__bookmark-icon`} width={className === 'offer' ? '31' : '18'} height={className === 'offer' ? '33' : '19'}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>

  );
}
export default FavoriteButton;
