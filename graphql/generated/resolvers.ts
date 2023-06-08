import * as Types from 'graphql/generated/types';

import { GraphQLResolveInfo } from 'graphql';
import { Context } from 'graphql/context';
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
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

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Types.Maybe<TTypes> | Promise<Types.Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddUsersInput: Types.AddUsersInput;
  Board: ResolverTypeWrapper<Types.Board>;
  BoardInput: Types.BoardInput;
  Boolean: ResolverTypeWrapper<Types.Scalars['Boolean']>;
  Column: ResolverTypeWrapper<Types.Column>;
  Comment: ResolverTypeWrapper<Types.Comment>;
  ID: ResolverTypeWrapper<Types.Scalars['ID']>;
  Label: ResolverTypeWrapper<Types.Label>;
  Mutation: ResolverTypeWrapper<{}>;
  Origin: Types.Origin;
  Query: ResolverTypeWrapper<{}>;
  RegisterInput: Types.RegisterInput;
  Status: Types.Status;
  String: ResolverTypeWrapper<Types.Scalars['String']>;
  Task: ResolverTypeWrapper<Types.Task>;
  User: ResolverTypeWrapper<Types.User>;
  Visibility: Types.Visibility;
  VisibilityInput: Types.VisibilityInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddUsersInput: Types.AddUsersInput;
  Board: Types.Board;
  BoardInput: Types.BoardInput;
  Boolean: Types.Scalars['Boolean'];
  Column: Types.Column;
  Comment: Types.Comment;
  ID: Types.Scalars['ID'];
  Label: Types.Label;
  Mutation: {};
  Query: {};
  RegisterInput: Types.RegisterInput;
  String: Types.Scalars['String'];
  Task: Types.Task;
  User: Types.User;
  VisibilityInput: Types.VisibilityInput;
};

export type BoardResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Board'] = ResolversParentTypes['Board'],
> = {
  columns?: Resolver<Array<Types.Maybe<ResolversTypes['Column']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tasks?: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Task']>>>,
    ParentType,
    ContextType
  >;
  users?: Resolver<Array<Types.Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  usersIds?: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  visibility?: Resolver<ResolversTypes['Visibility'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ColumnResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Column'] = ResolversParentTypes['Column'],
> = {
  board?: Resolver<ResolversTypes['Board'], ParentType, ContextType>;
  boardId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tasks?: Resolver<Array<Types.Maybe<ResolversTypes['Task']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment'],
> = {
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

export type LabelResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Label'] = ResolversParentTypes['Label'],
> = {
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tasks?: Resolver<Array<Types.Maybe<ResolversTypes['Task']>>, ParentType, ContextType>;
  tasksIds?: Resolver<Array<Types.Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  addBoard?: Resolver<
    ResolversTypes['Board'],
    ParentType,
    ContextType,
    RequireFields<Types.MutationAddBoardArgs, 'board'>
  >;
  addUsersToBoard?: Resolver<
    ResolversTypes['Board'],
    ParentType,
    ContextType,
    RequireFields<Types.MutationAddUsersToBoardArgs, 'users'>
  >;
  changeBoardVisibility?: Resolver<
    ResolversTypes['Board'],
    ParentType,
    ContextType,
    RequireFields<Types.MutationChangeBoardVisibilityArgs, 'visbility'>
  >;
  register?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<Types.MutationRegisterArgs, 'credentials'>
  >;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  board?: Resolver<
    ResolversTypes['Board'],
    ParentType,
    ContextType,
    RequireFields<Types.QueryBoardArgs, 'id'>
  >;
  boardUsers?: Resolver<
    Array<Types.Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType,
    RequireFields<Types.QueryBoardUsersArgs, 'id'>
  >;
  boards?: Resolver<Array<Types.Maybe<ResolversTypes['Board']>>, ParentType, ContextType>;
  users?: Resolver<Array<Types.Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  usersNotAssignedToBoard?: Resolver<
    Array<Types.Maybe<ResolversTypes['User']>>,
    ParentType,
    ContextType,
    RequireFields<Types.QueryUsersNotAssignedToBoardArgs, 'boardId'>
  >;
};

export type TaskResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Task'] = ResolversParentTypes['Task'],
> = {
  board?: Resolver<ResolversTypes['Board'], ParentType, ContextType>;
  boardId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  column?: Resolver<ResolversTypes['Column'], ParentType, ContextType>;
  columnId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  labels?: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Label']>>>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  usersIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  Comments?: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Comment']>>>,
    ParentType,
    ContextType
  >;
  boards?: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Board']>>>,
    ParentType,
    ContextType
  >;
  boardsIds?: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailVerified?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Types.Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Origin'], ParentType, ContextType>;
  ownerBoards?: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Board']>>>,
    ParentType,
    ContextType
  >;
  ownerBoardsIds?: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
  tasks?: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['Task']>>>,
    ParentType,
    ContextType
  >;
  tasksIds?: Resolver<
    Types.Maybe<Array<Types.Maybe<ResolversTypes['String']>>>,
    ParentType,
    ContextType
  >;
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
