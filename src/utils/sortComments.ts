import { Comment } from '../types/types-comments';

export const sortComments = (commentA: Comment, commentB: Comment) => new Date(commentB.date).getTime() - new Date(commentA.date).getTime();
