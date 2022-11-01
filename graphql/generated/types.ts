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

export type Board = {
  __typename?: 'Board';
  columns: Array<Maybe<Column>>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['String'];
  tasks?: Maybe<Array<Maybe<Task>>>;
  users: Array<Maybe<User>>;
  usersIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  visibility: Visiblity;
};

export type BoardInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  visibility: Visiblity;
};

export type Column = {
  __typename?: 'Column';
  board: Board;
  boardId: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
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
  register: User;
};

export type MutationAddBoardArgs = {
  board: BoardInput;
};

export type MutationRegisterArgs = {
  credentials: RegisterInput;
};

export enum Origin {
  google = 'GOOGLE',
  local = 'LOCAL',
}

export type Query = {
  __typename?: 'Query';
  boards: Array<Maybe<Board>>;
  users: Array<Maybe<User>>;
};

export type RegisterInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
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
  createdAt: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<Maybe<Label>>>;
  name: Scalars['String'];
  status: Status;
  updatedAt: Scalars['String'];
  users: Array<User>;
  usersIds: Array<Scalars['String']>;
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

export enum Visiblity {
  private = 'PRIVATE',
  public = 'PUBLIC',
}
