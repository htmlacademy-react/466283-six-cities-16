import { CommentsList, Comments } from '../types/types-comments';

export const getDataComments = (
  id: string | undefined,
  comments: CommentsList
): Comments => (id ? comments[id] : []);
