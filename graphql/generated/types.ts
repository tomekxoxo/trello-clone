export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddCommentInput = {
  content: Scalars['String'];
  taskId: Scalars['ID'];
};

export type AssignLabelsToTaskInput = {
  labelsIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  taskId: Scalars['ID'];
};

export type Board = {
  __typename?: 'Board';
  columns: Array<Maybe<Column>>;
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['String'];
  tasks?: Maybe<Array<Maybe<Task>>>;
  updatedAt: Scalars['String'];
  users: Array<Maybe<User>>;
  usersIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  visibility: Visibility;
};

export type BoardInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  visibility: Visibility;
};

export type Column = {
  __typename?: 'Column';
  board: Board;
  boardId: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  name: Status;
  tasks: Array<Maybe<Task>>;
  updatedAt: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  task: Task;
  taskId: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type CreateLabelInput = {
  color: Scalars['String'];
  name: Scalars['String'];
};

export type EditCommentInput = {
  commentId: Scalars['ID'];
  content: Scalars['String'];
};

export type Label = {
  __typename?: 'Label';
  color: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  tasks: Array<Maybe<Task>>;
  tasksIds: Array<Maybe<Scalars['String']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBoard: Board;
  addComment: Comment;
  addTask: Task;
  assignLabelsToTask: Task;
  changeBoardVisibility: Board;
  createLabel: Label;
  deleteComment: Comment;
  editComment: Comment;
  register: User;
  removeUserFromBoard: Board;
  setBoardUsers: Board;
  updateBoardDescription: Board;
  updateTaskDescription: Task;
  updateTaskImage: Task;
  updateTaskPosition: Task;
};

export type MutationAddBoardArgs = {
  board: BoardInput;
};

export type MutationAddCommentArgs = {
  comment: AddCommentInput;
};

export type MutationAddTaskArgs = {
  task: TaskInput;
};

export type MutationAssignLabelsToTaskArgs = {
  labels: AssignLabelsToTaskInput;
};

export type MutationChangeBoardVisibilityArgs = {
  visbility: VisibilityInput;
};

export type MutationCreateLabelArgs = {
  label: CreateLabelInput;
};

export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};

export type MutationEditCommentArgs = {
  comment: EditCommentInput;
};

export type MutationRegisterArgs = {
  credentials: RegisterInput;
};

export type MutationRemoveUserFromBoardArgs = {
  board: RemoveUserFromBoardInput;
};

export type MutationSetBoardUsersArgs = {
  users: SetBoardUsersInput;
};

export type MutationUpdateBoardDescriptionArgs = {
  board: UpdateBoardDescriptionInput;
};

export type MutationUpdateTaskDescriptionArgs = {
  task: UpdateTaskDescriptionInput;
};

export type MutationUpdateTaskImageArgs = {
  task: UpdateTaskImageInput;
};

export type MutationUpdateTaskPositionArgs = {
  position: TaskPositionInput;
};

export enum Origin {
  google = 'GOOGLE',
  local = 'LOCAL',
}

export type Query = {
  __typename?: 'Query';
  board: Board;
  boards: Array<Maybe<Board>>;
  labels?: Maybe<Array<Maybe<Label>>>;
  task: Task;
  users: Array<Maybe<User>>;
  usersNotAssignedToBoard: Array<Maybe<User>>;
};

export type QueryBoardArgs = {
  id: Scalars['ID'];
};

export type QueryTaskArgs = {
  id: Scalars['ID'];
};

export type QueryUsersNotAssignedToBoardArgs = {
  board: UsersNotAssignedToBoardInput;
};

export type RegisterInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type RemoveUserFromBoardInput = {
  boardId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type SetBoardUsersInput = {
  boardId: Scalars['ID'];
  userIds: Array<InputMaybe<Scalars['String']>>;
};

export enum Status {
  backlog = 'BACKLOG',
  done = 'DONE',
  inProgress = 'IN_PROGRESS',
  qa = 'QA',
}

export type Task = {
  __typename?: 'Task';
  board: Board;
  boardId: Scalars['String'];
  column: Column;
  columnId: Scalars['String'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<Maybe<Label>>>;
  labelsIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
  order: Scalars['Int'];
  updatedAt: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type TaskInput = {
  boardId: Scalars['String'];
  columnId: Scalars['String'];
  name: Scalars['String'];
};

export type TaskPositionInput = {
  newColumnId: Scalars['String'];
  newIndex: Scalars['Int'];
  taskId: Scalars['String'];
};

export type UpdateBoardDescriptionInput = {
  boardId: Scalars['ID'];
  description: Scalars['String'];
};

export type UpdateTaskDescriptionInput = {
  description: Scalars['String'];
  taskId: Scalars['ID'];
};

export type UpdateTaskImageInput = {
  image: Scalars['String'];
  taskId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  Comments?: Maybe<Array<Maybe<Comment>>>;
  boards?: Maybe<Array<Maybe<Board>>>;
  boardsIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  email: Scalars['String'];
  emailVerified?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  origin: Origin;
  ownerBoards?: Maybe<Array<Maybe<Board>>>;
  ownerBoardsIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  tasks?: Maybe<Array<Maybe<Task>>>;
  tasksIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UsersNotAssignedToBoardInput = {
  ownerId: Scalars['ID'];
};

export enum Visibility {
  private = 'PRIVATE',
  public = 'PUBLIC',
}

export type VisibilityInput = {
  id: Scalars['ID'];
  visibility: Visibility;
};
