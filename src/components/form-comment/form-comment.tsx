import { useState } from 'react';
import { store } from '../../store';
import { sendComment } from '../../store/api-actions';
import { useAppSelector } from '../../hooks';
import { Ratings } from '../../const';
import RatingStars from '../stars-raiting/stars-raiting';
function FormComment(): JSX.Element {
  const [raiting, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const idDetail = useAppSelector(
    (state) => state.offerDetail?.id
  );
  const getComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };
  const getRaitung = (event: React.FormEvent) => {
    if (event.target instanceof HTMLInputElement) {
      setRating(Number(event.target.value));
    }
  };
  const handleClear = () => {
    setComment('');
    setRating(0);
  };

  const handleFormSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    if(idDetail) {
      store.dispatch(sendComment({id: idDetail, comment: {comment: comment, rating: raiting}}));
      handleClear();
    }
  };

  const disabled: boolean = !!(raiting && comment.length >= 50);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Ratings.map(({ value, title }) =>
          (
            <RatingStars
              key={value}
              value={value}
              isChecked={value === raiting}
              title={title}
              getRaitung={getRaitung}
            />
          ))}
      </div>
      <textarea
        onChange={getComment}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled = {!disabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormComment;
