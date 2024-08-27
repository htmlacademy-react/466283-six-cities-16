export type Comment = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
};

export type Comments = Comment[];

export type CommentsList = {
  [id: string]: Comments;
};

export type ShortComment = {
  comment: string;
  rating: number;
};
export type AddForm = {
  id: string;
  comment: ShortComment;
};
