import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as Types from 'graphql/generated/operations';
const defaultOptions = {} as const;

export const AddBoardDocument = gql`
  mutation AddBoard($board: BoardInput!) {
    addBoard(board: $board) {
      name
      ownerId
      users {
        name
        email
        id
      }
      columns {
        boardId
        name
      }
    }
  }
`;
export type AddBoardMutationFn = Apollo.MutationFunction<
  Types.AddBoardMutation,
  Types.AddBoardMutationVariables
>;

/**
 * __useAddBoardMutation__
 *
 * To run a mutation, you first call `useAddBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBoardMutation, { data, loading, error }] = useAddBoardMutation({
 *   variables: {
 *      board: // value for 'board'
 *   },
 * });
 */
export function useAddBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.AddBoardMutation, Types.AddBoardMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.AddBoardMutation, Types.AddBoardMutationVariables>(
    AddBoardDocument,
    options,
  );
}
export type AddBoardMutationHookResult = ReturnType<typeof useAddBoardMutation>;
export type AddBoardMutationResult = Apollo.MutationResult<Types.AddBoardMutation>;
export type AddBoardMutationOptions = Apollo.BaseMutationOptions<
  Types.AddBoardMutation,
  Types.AddBoardMutationVariables
>;
export const BoardDocument = gql`
  query Board($boardId: String!) {
    board(id: $boardId) {
      id
      image
      name
      ownerId
      visibility
    }
  }
`;

/**
 * __useBoardQuery__
 *
 * To run a query within a React component, call `useBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardQuery({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useBoardQuery(
  baseOptions: Apollo.QueryHookOptions<Types.BoardQuery, Types.BoardQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.BoardQuery, Types.BoardQueryVariables>(BoardDocument, options);
}
export function useBoardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.BoardQuery, Types.BoardQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.BoardQuery, Types.BoardQueryVariables>(BoardDocument, options);
}
export type BoardQueryHookResult = ReturnType<typeof useBoardQuery>;
export type BoardLazyQueryHookResult = ReturnType<typeof useBoardLazyQuery>;
export type BoardQueryResult = Apollo.QueryResult<Types.BoardQuery, Types.BoardQueryVariables>;
export const BoardUsersDocument = gql`
  query BoardUsers($boardUsersId: String!) {
    boardUsers(id: $boardUsersId) {
      id
      name
      image
    }
  }
`;

/**
 * __useBoardUsersQuery__
 *
 * To run a query within a React component, call `useBoardUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardUsersQuery({
 *   variables: {
 *      boardUsersId: // value for 'boardUsersId'
 *   },
 * });
 */
export function useBoardUsersQuery(
  baseOptions: Apollo.QueryHookOptions<Types.BoardUsersQuery, Types.BoardUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.BoardUsersQuery, Types.BoardUsersQueryVariables>(
    BoardUsersDocument,
    options,
  );
}
export function useBoardUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.BoardUsersQuery, Types.BoardUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.BoardUsersQuery, Types.BoardUsersQueryVariables>(
    BoardUsersDocument,
    options,
  );
}
export type BoardUsersQueryHookResult = ReturnType<typeof useBoardUsersQuery>;
export type BoardUsersLazyQueryHookResult = ReturnType<typeof useBoardUsersLazyQuery>;
export type BoardUsersQueryResult = Apollo.QueryResult<
  Types.BoardUsersQuery,
  Types.BoardUsersQueryVariables
>;
export const BoardsDocument = gql`
  query Boards {
    boards {
      name
      id
      ownerId
      image
      users {
        name
        image
      }
    }
  }
`;

/**
 * __useBoardsQuery__
 *
 * To run a query within a React component, call `useBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBoardsQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.BoardsQuery, Types.BoardsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.BoardsQuery, Types.BoardsQueryVariables>(BoardsDocument, options);
}
export function useBoardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.BoardsQuery, Types.BoardsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.BoardsQuery, Types.BoardsQueryVariables>(
    BoardsDocument,
    options,
  );
}
export type BoardsQueryHookResult = ReturnType<typeof useBoardsQuery>;
export type BoardsLazyQueryHookResult = ReturnType<typeof useBoardsLazyQuery>;
export type BoardsQueryResult = Apollo.QueryResult<Types.BoardsQuery, Types.BoardsQueryVariables>;
