import { CommentsList, Comments } from '../types/types-comments';

export const getDataComments = (id: string, comments: CommentsList): Comments =>
  comments[id];
