import * as Types from 'graphql/generated/types';

export type AddBoardMutationVariables = Types.Exact<{
  board: Types.BoardInput;
}>;

export type AddBoardMutation = {
  __typename?: 'Mutation';
  addBoard: {
    __typename?: 'Board';
    name: string;
    ownerId: string;
    users: Array<{ __typename?: 'User'; name: string; email: string; id: string } | null>;
    columns: Array<{ __typename?: 'Column'; boardId: string; name: string } | null>;
  };
};

export type BoardsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type BoardsQuery = {
  __typename?: 'Query';
  boards: Array<{
    __typename?: 'Board';
    name: string;
    id: string;
    ownerId: string;
    image?: string | null;
    users: Array<{ __typename?: 'User'; name: string; image?: string | null } | null>;
  } | null>;
};
