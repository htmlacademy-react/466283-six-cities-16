import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { Comments } from '../../types/types-comments';
import { calcRaiting } from '../../utils/calc-raiting';
import { getDate } from '../../utils/get-date';
import { sortComments } from '../../utils/sortComments';
import FormComment from '../form-comment/form-comment';

type CommntsProps = {
    dataComments:Comments;
}

function CommentsList({dataComments}: CommntsProps):JSX.Element {
  const isAuth = useAppSelector(
    (state) => state.authorizationStatus
  );
  const sortedComments = [...dataComments].sort(sortComments).slice(0, 10);
  return (
    <>
      <ul className="reviews__list">
        {sortedComments.map((commentItem) => (
          <li key={commentItem.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img
                  className="reviews__avatar user__avatar"
                  src={commentItem.user.avatarUrl}
                  width="54"
                  height="54"
                  alt="Reviews avatar"
                />
              </div>
              <span className="reviews__user-name">
                {commentItem.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span
                    style={{
                      width: `${calcRaiting(commentItem.rating)}%`,
                    }}
                  />
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{commentItem.comment}</p>
              <time className="reviews__time" dateTime="2019-04-24">
                {getDate(commentItem.date)}
              </time>
            </div>
          </li>
        ))}
      </ul>
      {isAuth === AuthorizationStatus.Auth && <FormComment />}
    </>
  );
}

export default CommentsList;
