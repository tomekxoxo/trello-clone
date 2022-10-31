import { GraphQLResolveInfo } from 'graphql';
import { Context } from 'graphql/context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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
  Google = 'GOOGLE',
  Local = 'LOCAL'
}

export type Query = {
  __typename?: 'Query';
  users: Array<Maybe<User>>;
};

export type RegisterInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export enum Status {
  Backlog = 'BACKLOG',
  Done = 'DONE',
  InProgress = 'IN_PROGRESS',
  Qa = 'QA'
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
  labels: Array<Maybe<Label>>;
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
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Board: ResolverTypeWrapper<Board>;
  BoardInput: BoardInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Column: ResolverTypeWrapper<Column>;
  Comment: ResolverTypeWrapper<Comment>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Label: ResolverTypeWrapper<Label>;
  Mutation: ResolverTypeWrapper<{}>;
  Origin: Origin;
  Query: ResolverTypeWrapper<{}>;
  RegisterInput: RegisterInput;
  Status: Status;
  String: ResolverTypeWrapper<Scalars['String']>;
  Task: ResolverTypeWrapper<Task>;
  User: ResolverTypeWrapper<User>;
  Visiblity: Visiblity;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Board: Board;
  BoardInput: BoardInput;
  Boolean: Scalars['Boolean'];
  Column: Column;
  Comment: Comment;
  ID: Scalars['ID'];
  Label: Label;
  Mutation: {};
  Query: {};
  RegisterInput: RegisterInput;
  String: Scalars['String'];
  Task: Task;
  User: User;
};

export type BoardResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Board'] = ResolversParentTypes['Board']> = {
  columns?: Resolver<Array<Maybe<ResolversTypes['Column']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tasks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Task']>>>, ParentType, ContextType>;
  users?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  usersIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  visibility?: Resolver<ResolversTypes['Visiblity'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColumnResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Column'] = ResolversParentTypes['Column']> = {
  board?: Resolver<ResolversTypes['Board'], ParentType, ContextType>;
  boardId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tasks?: Resolver<Array<Maybe<ResolversTypes['Task']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = {
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  task?: Resolver<ResolversTypes['Task'], ParentType, ContextType>;
  taskId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LabelResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Label'] = ResolversParentTypes['Label']> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tasks?: Resolver<Array<Maybe<ResolversTypes['Task']>>, ParentType, ContextType>;
  tasksIds?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addBoard?: Resolver<ResolversTypes['Board'], ParentType, ContextType, RequireFields<MutationAddBoardArgs, 'board'>>;
  register?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'credentials'>>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  users?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
};

export type TaskResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task']> = {
  board?: Resolver<ResolversTypes['Board'], ParentType, ContextType>;
  boardId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  column?: Resolver<ResolversTypes['Column'], ParentType, ContextType>;
  columnId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  labels?: Resolver<Array<Maybe<ResolversTypes['Label']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  usersIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  Comments?: Resolver<Maybe<Array<Maybe<ResolversTypes['Comment']>>>, ParentType, ContextType>;
  boards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Board']>>>, ParentType, ContextType>;
  boardsIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailVerified?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Origin'], ParentType, ContextType>;
  ownerBoards?: Resolver<Maybe<Array<Maybe<ResolversTypes['Board']>>>, ParentType, ContextType>;
  ownerBoardsIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  tasks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Task']>>>, ParentType, ContextType>;
  tasksIds?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Board?: BoardResolvers<ContextType>;
  Column?: ColumnResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Label?: LabelResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Task?: TaskResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

