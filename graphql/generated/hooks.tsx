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
export const AddTaskDocument = gql`
  mutation AddTask($task: TaskInput!) {
    addTask(task: $task) {
      id
      name
      description
      image
      boardId
      columnId
      createdAt
      updatedAt
    }
  }
`;
export type AddTaskMutationFn = Apollo.MutationFunction<
  Types.AddTaskMutation,
  Types.AddTaskMutationVariables
>;

/**
 * __useAddTaskMutation__
 *
 * To run a mutation, you first call `useAddTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTaskMutation, { data, loading, error }] = useAddTaskMutation({
 *   variables: {
 *      task: // value for 'task'
 *   },
 * });
 */
export function useAddTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.AddTaskMutation, Types.AddTaskMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.AddTaskMutation, Types.AddTaskMutationVariables>(
    AddTaskDocument,
    options,
  );
}
export type AddTaskMutationHookResult = ReturnType<typeof useAddTaskMutation>;
export type AddTaskMutationResult = Apollo.MutationResult<Types.AddTaskMutation>;
export type AddTaskMutationOptions = Apollo.BaseMutationOptions<
  Types.AddTaskMutation,
  Types.AddTaskMutationVariables
>;
export const AddUsersToBoardDocument = gql`
  mutation AddUsersToBoard($users: AddUsersInput!) {
    addUsersToBoard(users: $users) {
      id
      name
      image
    }
  }
`;
export type AddUsersToBoardMutationFn = Apollo.MutationFunction<
  Types.AddUsersToBoardMutation,
  Types.AddUsersToBoardMutationVariables
>;

/**
 * __useAddUsersToBoardMutation__
 *
 * To run a mutation, you first call `useAddUsersToBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUsersToBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUsersToBoardMutation, { data, loading, error }] = useAddUsersToBoardMutation({
 *   variables: {
 *      users: // value for 'users'
 *   },
 * });
 */
export function useAddUsersToBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddUsersToBoardMutation,
    Types.AddUsersToBoardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.AddUsersToBoardMutation, Types.AddUsersToBoardMutationVariables>(
    AddUsersToBoardDocument,
    options,
  );
}
export type AddUsersToBoardMutationHookResult = ReturnType<typeof useAddUsersToBoardMutation>;
export type AddUsersToBoardMutationResult = Apollo.MutationResult<Types.AddUsersToBoardMutation>;
export type AddUsersToBoardMutationOptions = Apollo.BaseMutationOptions<
  Types.AddUsersToBoardMutation,
  Types.AddUsersToBoardMutationVariables
>;
export const BoardDocument = gql`
  query Board($boardId: ID!) {
    board(id: $boardId) {
      id
      image
      name
      ownerId
      visibility
      columns {
        id
        name
        tasks {
          description
          id
          image
          labels {
            color
            id
            name
          }
          name
        }
      }
      owner {
        name
      }
      createdAt
      description
      users {
        id
        name
        ownerBoardsIds
        image
      }
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
  query BoardUsers($boardUsersId: ID!) {
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
export const ChangeBoardVisibilityDocument = gql`
  mutation ChangeBoardVisibility($visbility: VisibilityInput!) {
    changeBoardVisibility(visbility: $visbility) {
      name
      visibility
      id
    }
  }
`;
export type ChangeBoardVisibilityMutationFn = Apollo.MutationFunction<
  Types.ChangeBoardVisibilityMutation,
  Types.ChangeBoardVisibilityMutationVariables
>;

/**
 * __useChangeBoardVisibilityMutation__
 *
 * To run a mutation, you first call `useChangeBoardVisibilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeBoardVisibilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeBoardVisibilityMutation, { data, loading, error }] = useChangeBoardVisibilityMutation({
 *   variables: {
 *      visbility: // value for 'visbility'
 *   },
 * });
 */
export function useChangeBoardVisibilityMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.ChangeBoardVisibilityMutation,
    Types.ChangeBoardVisibilityMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.ChangeBoardVisibilityMutation,
    Types.ChangeBoardVisibilityMutationVariables
  >(ChangeBoardVisibilityDocument, options);
}
export type ChangeBoardVisibilityMutationHookResult = ReturnType<
  typeof useChangeBoardVisibilityMutation
>;
export type ChangeBoardVisibilityMutationResult =
  Apollo.MutationResult<Types.ChangeBoardVisibilityMutation>;
export type ChangeBoardVisibilityMutationOptions = Apollo.BaseMutationOptions<
  Types.ChangeBoardVisibilityMutation,
  Types.ChangeBoardVisibilityMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($credentials: RegisterInput!) {
    register(credentials: $credentials) {
      id
      name
      email
      emailVerified
      image
      origin
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  Types.RegisterMutation,
  Types.RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      credentials: // value for 'credentials'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<Types.RegisterMutation, Types.RegisterMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.RegisterMutation, Types.RegisterMutationVariables>(
    RegisterDocument,
    options,
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<Types.RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  Types.RegisterMutation,
  Types.RegisterMutationVariables
>;
export const UpdateBoardDescriptionDocument = gql`
  mutation UpdateBoardDescription($board: UpdateBoardDescriptionInput!) {
    updateBoardDescription(board: $board) {
      id
    }
  }
`;
export type UpdateBoardDescriptionMutationFn = Apollo.MutationFunction<
  Types.UpdateBoardDescriptionMutation,
  Types.UpdateBoardDescriptionMutationVariables
>;

/**
 * __useUpdateBoardDescriptionMutation__
 *
 * To run a mutation, you first call `useUpdateBoardDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoardDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoardDescriptionMutation, { data, loading, error }] = useUpdateBoardDescriptionMutation({
 *   variables: {
 *      board: // value for 'board'
 *   },
 * });
 */
export function useUpdateBoardDescriptionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateBoardDescriptionMutation,
    Types.UpdateBoardDescriptionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.UpdateBoardDescriptionMutation,
    Types.UpdateBoardDescriptionMutationVariables
  >(UpdateBoardDescriptionDocument, options);
}
export type UpdateBoardDescriptionMutationHookResult = ReturnType<
  typeof useUpdateBoardDescriptionMutation
>;
export type UpdateBoardDescriptionMutationResult =
  Apollo.MutationResult<Types.UpdateBoardDescriptionMutation>;
export type UpdateBoardDescriptionMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateBoardDescriptionMutation,
  Types.UpdateBoardDescriptionMutationVariables
>;
export const UpdateTaskPositionDocument = gql`
  mutation UpdateTaskPosition($position: TaskPositionInput!) {
    updateTaskPosition(position: $position) {
      id
      name
      description
      image
      boardId
      columnId
      createdAt
      updatedAt
    }
  }
`;
export type UpdateTaskPositionMutationFn = Apollo.MutationFunction<
  Types.UpdateTaskPositionMutation,
  Types.UpdateTaskPositionMutationVariables
>;

/**
 * __useUpdateTaskPositionMutation__
 *
 * To run a mutation, you first call `useUpdateTaskPositionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskPositionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskPositionMutation, { data, loading, error }] = useUpdateTaskPositionMutation({
 *   variables: {
 *      position: // value for 'position'
 *   },
 * });
 */
export function useUpdateTaskPositionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateTaskPositionMutation,
    Types.UpdateTaskPositionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.UpdateTaskPositionMutation,
    Types.UpdateTaskPositionMutationVariables
  >(UpdateTaskPositionDocument, options);
}
export type UpdateTaskPositionMutationHookResult = ReturnType<typeof useUpdateTaskPositionMutation>;
export type UpdateTaskPositionMutationResult =
  Apollo.MutationResult<Types.UpdateTaskPositionMutation>;
export type UpdateTaskPositionMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateTaskPositionMutation,
  Types.UpdateTaskPositionMutationVariables
>;
export const UsersDocument = gql`
  query Users {
    users {
      id
      image
      name
    }
  }
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.UsersQuery, Types.UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.UsersQuery, Types.UsersQueryVariables>(UsersDocument, options);
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.UsersQuery, Types.UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.UsersQuery, Types.UsersQueryVariables>(UsersDocument, options);
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<Types.UsersQuery, Types.UsersQueryVariables>;
export const UsersNotAssignedToBoardDocument = gql`
  query UsersNotAssignedToBoard($boardId: ID!) {
    usersNotAssignedToBoard(boardId: $boardId) {
      name
      id
      image
    }
  }
`;

/**
 * __useUsersNotAssignedToBoardQuery__
 *
 * To run a query within a React component, call `useUsersNotAssignedToBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersNotAssignedToBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersNotAssignedToBoardQuery({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useUsersNotAssignedToBoardQuery(
  baseOptions: Apollo.QueryHookOptions<
    Types.UsersNotAssignedToBoardQuery,
    Types.UsersNotAssignedToBoardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    Types.UsersNotAssignedToBoardQuery,
    Types.UsersNotAssignedToBoardQueryVariables
  >(UsersNotAssignedToBoardDocument, options);
}
export function useUsersNotAssignedToBoardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.UsersNotAssignedToBoardQuery,
    Types.UsersNotAssignedToBoardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    Types.UsersNotAssignedToBoardQuery,
    Types.UsersNotAssignedToBoardQueryVariables
  >(UsersNotAssignedToBoardDocument, options);
}
export type UsersNotAssignedToBoardQueryHookResult = ReturnType<
  typeof useUsersNotAssignedToBoardQuery
>;
export type UsersNotAssignedToBoardLazyQueryHookResult = ReturnType<
  typeof useUsersNotAssignedToBoardLazyQuery
>;
export type UsersNotAssignedToBoardQueryResult = Apollo.QueryResult<
  Types.UsersNotAssignedToBoardQuery,
  Types.UsersNotAssignedToBoardQueryVariables
>;
