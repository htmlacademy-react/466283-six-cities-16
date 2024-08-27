type RatingStarsProps = {
  value: number;
  title: string;
  isChecked: boolean;
  getRaitung: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const StarsRaiting = ({ value, title, isChecked, getRaitung }: RatingStarsProps) => {
  const id = `${value}-stars`;

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={id}
        type="radio"
        checked={isChecked}
        onChange={getRaitung}
      />
      <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use href="#icon-star"></use>
        </svg>
      </label>
    </>
  );
};

export default StarsRaiting;
