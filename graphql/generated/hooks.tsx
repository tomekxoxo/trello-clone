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
export const AddCommentDocument = gql`
  mutation AddComment($comment: AddCommentInput!) {
    addComment(comment: $comment) {
      id
      createdAt
      content
      user {
        id
        name
        image
      }
    }
  }
`;
export type AddCommentMutationFn = Apollo.MutationFunction<
  Types.AddCommentMutation,
  Types.AddCommentMutationVariables
>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useAddCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddCommentMutation,
    Types.AddCommentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.AddCommentMutation, Types.AddCommentMutationVariables>(
    AddCommentDocument,
    options,
  );
}
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<Types.AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<
  Types.AddCommentMutation,
  Types.AddCommentMutationVariables
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
export const AssignLabelsToTaskDocument = gql`
  mutation AssignLabelsToTask($labels: AssignLabelsToTaskInput!) {
    assignLabelsToTask(labels: $labels) {
      id
    }
  }
`;
export type AssignLabelsToTaskMutationFn = Apollo.MutationFunction<
  Types.AssignLabelsToTaskMutation,
  Types.AssignLabelsToTaskMutationVariables
>;

/**
 * __useAssignLabelsToTaskMutation__
 *
 * To run a mutation, you first call `useAssignLabelsToTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAssignLabelsToTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [assignLabelsToTaskMutation, { data, loading, error }] = useAssignLabelsToTaskMutation({
 *   variables: {
 *      labels: // value for 'labels'
 *   },
 * });
 */
export function useAssignLabelsToTaskMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AssignLabelsToTaskMutation,
    Types.AssignLabelsToTaskMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.AssignLabelsToTaskMutation,
    Types.AssignLabelsToTaskMutationVariables
  >(AssignLabelsToTaskDocument, options);
}
export type AssignLabelsToTaskMutationHookResult = ReturnType<typeof useAssignLabelsToTaskMutation>;
export type AssignLabelsToTaskMutationResult =
  Apollo.MutationResult<Types.AssignLabelsToTaskMutation>;
export type AssignLabelsToTaskMutationOptions = Apollo.BaseMutationOptions<
  Types.AssignLabelsToTaskMutation,
  Types.AssignLabelsToTaskMutationVariables
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
          comments {
            id
            user {
              id
              image
              name
            }
          }
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
export const CreateLabelDocument = gql`
  mutation CreateLabel($label: CreateLabelInput!) {
    createLabel(label: $label) {
      id
      name
      color
    }
  }
`;
export type CreateLabelMutationFn = Apollo.MutationFunction<
  Types.CreateLabelMutation,
  Types.CreateLabelMutationVariables
>;

/**
 * __useCreateLabelMutation__
 *
 * To run a mutation, you first call `useCreateLabelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLabelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLabelMutation, { data, loading, error }] = useCreateLabelMutation({
 *   variables: {
 *      label: // value for 'label'
 *   },
 * });
 */
export function useCreateLabelMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.CreateLabelMutation,
    Types.CreateLabelMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.CreateLabelMutation, Types.CreateLabelMutationVariables>(
    CreateLabelDocument,
    options,
  );
}
export type CreateLabelMutationHookResult = ReturnType<typeof useCreateLabelMutation>;
export type CreateLabelMutationResult = Apollo.MutationResult<Types.CreateLabelMutation>;
export type CreateLabelMutationOptions = Apollo.BaseMutationOptions<
  Types.CreateLabelMutation,
  Types.CreateLabelMutationVariables
>;
export const DeleteCommentDocument = gql`
  mutation DeleteComment($deleteCommentId: ID!) {
    deleteComment(id: $deleteCommentId) {
      id
    }
  }
`;
export type DeleteCommentMutationFn = Apollo.MutationFunction<
  Types.DeleteCommentMutation,
  Types.DeleteCommentMutationVariables
>;

/**
 * __useDeleteCommentMutation__
 *
 * To run a mutation, you first call `useDeleteCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentMutation, { data, loading, error }] = useDeleteCommentMutation({
 *   variables: {
 *      deleteCommentId: // value for 'deleteCommentId'
 *   },
 * });
 */
export function useDeleteCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.DeleteCommentMutation,
    Types.DeleteCommentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.DeleteCommentMutation, Types.DeleteCommentMutationVariables>(
    DeleteCommentDocument,
    options,
  );
}
export type DeleteCommentMutationHookResult = ReturnType<typeof useDeleteCommentMutation>;
export type DeleteCommentMutationResult = Apollo.MutationResult<Types.DeleteCommentMutation>;
export type DeleteCommentMutationOptions = Apollo.BaseMutationOptions<
  Types.DeleteCommentMutation,
  Types.DeleteCommentMutationVariables
>;
export const EditCommentDocument = gql`
  mutation EditComment($comment: EditCommentInput!) {
    editComment(comment: $comment) {
      id
    }
  }
`;
export type EditCommentMutationFn = Apollo.MutationFunction<
  Types.EditCommentMutation,
  Types.EditCommentMutationVariables
>;

/**
 * __useEditCommentMutation__
 *
 * To run a mutation, you first call `useEditCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommentMutation, { data, loading, error }] = useEditCommentMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useEditCommentMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.EditCommentMutation,
    Types.EditCommentMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.EditCommentMutation, Types.EditCommentMutationVariables>(
    EditCommentDocument,
    options,
  );
}
export type EditCommentMutationHookResult = ReturnType<typeof useEditCommentMutation>;
export type EditCommentMutationResult = Apollo.MutationResult<Types.EditCommentMutation>;
export type EditCommentMutationOptions = Apollo.BaseMutationOptions<
  Types.EditCommentMutation,
  Types.EditCommentMutationVariables
>;
export const LabelsDocument = gql`
  query Labels {
    labels {
      id
      color
      name
      tasksIds
    }
  }
`;

/**
 * __useLabelsQuery__
 *
 * To run a query within a React component, call `useLabelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLabelsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLabelsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLabelsQuery(
  baseOptions?: Apollo.QueryHookOptions<Types.LabelsQuery, Types.LabelsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.LabelsQuery, Types.LabelsQueryVariables>(LabelsDocument, options);
}
export function useLabelsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.LabelsQuery, Types.LabelsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.LabelsQuery, Types.LabelsQueryVariables>(
    LabelsDocument,
    options,
  );
}
export type LabelsQueryHookResult = ReturnType<typeof useLabelsQuery>;
export type LabelsLazyQueryHookResult = ReturnType<typeof useLabelsLazyQuery>;
export type LabelsQueryResult = Apollo.QueryResult<Types.LabelsQuery, Types.LabelsQueryVariables>;
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
export const RemoveUserFromBoardDocument = gql`
  mutation RemoveUserFromBoard($board: RemoveUserFromBoardInput!) {
    removeUserFromBoard(board: $board) {
      id
      name
    }
  }
`;
export type RemoveUserFromBoardMutationFn = Apollo.MutationFunction<
  Types.RemoveUserFromBoardMutation,
  Types.RemoveUserFromBoardMutationVariables
>;

/**
 * __useRemoveUserFromBoardMutation__
 *
 * To run a mutation, you first call `useRemoveUserFromBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveUserFromBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeUserFromBoardMutation, { data, loading, error }] = useRemoveUserFromBoardMutation({
 *   variables: {
 *      board: // value for 'board'
 *   },
 * });
 */
export function useRemoveUserFromBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.RemoveUserFromBoardMutation,
    Types.RemoveUserFromBoardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.RemoveUserFromBoardMutation,
    Types.RemoveUserFromBoardMutationVariables
  >(RemoveUserFromBoardDocument, options);
}
export type RemoveUserFromBoardMutationHookResult = ReturnType<
  typeof useRemoveUserFromBoardMutation
>;
export type RemoveUserFromBoardMutationResult =
  Apollo.MutationResult<Types.RemoveUserFromBoardMutation>;
export type RemoveUserFromBoardMutationOptions = Apollo.BaseMutationOptions<
  Types.RemoveUserFromBoardMutation,
  Types.RemoveUserFromBoardMutationVariables
>;
export const SetBoardUsersDocument = gql`
  mutation SetBoardUsers($users: SetBoardUsersInput!) {
    setBoardUsers(users: $users) {
      id
      name
      image
    }
  }
`;
export type SetBoardUsersMutationFn = Apollo.MutationFunction<
  Types.SetBoardUsersMutation,
  Types.SetBoardUsersMutationVariables
>;

/**
 * __useSetBoardUsersMutation__
 *
 * To run a mutation, you first call `useSetBoardUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetBoardUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setBoardUsersMutation, { data, loading, error }] = useSetBoardUsersMutation({
 *   variables: {
 *      users: // value for 'users'
 *   },
 * });
 */
export function useSetBoardUsersMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.SetBoardUsersMutation,
    Types.SetBoardUsersMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.SetBoardUsersMutation, Types.SetBoardUsersMutationVariables>(
    SetBoardUsersDocument,
    options,
  );
}
export type SetBoardUsersMutationHookResult = ReturnType<typeof useSetBoardUsersMutation>;
export type SetBoardUsersMutationResult = Apollo.MutationResult<Types.SetBoardUsersMutation>;
export type SetBoardUsersMutationOptions = Apollo.BaseMutationOptions<
  Types.SetBoardUsersMutation,
  Types.SetBoardUsersMutationVariables
>;
export const TaskDocument = gql`
  query Task($taskId: ID!) {
    task(id: $taskId) {
      id
      description
      comments {
        id
        content
        user {
          id
          name
          image
        }
        updatedAt
      }
      image
      labels {
        id
        color
        name
      }
      name
      column {
        name
      }
      user {
        id
        name
      }
    }
  }
`;

/**
 * __useTaskQuery__
 *
 * To run a query within a React component, call `useTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskQuery({
 *   variables: {
 *      taskId: // value for 'taskId'
 *   },
 * });
 */
export function useTaskQuery(
  baseOptions: Apollo.QueryHookOptions<Types.TaskQuery, Types.TaskQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Types.TaskQuery, Types.TaskQueryVariables>(TaskDocument, options);
}
export function useTaskLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<Types.TaskQuery, Types.TaskQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Types.TaskQuery, Types.TaskQueryVariables>(TaskDocument, options);
}
export type TaskQueryHookResult = ReturnType<typeof useTaskQuery>;
export type TaskLazyQueryHookResult = ReturnType<typeof useTaskLazyQuery>;
export type TaskQueryResult = Apollo.QueryResult<Types.TaskQuery, Types.TaskQueryVariables>;
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
export const UpdateTaskDescriptionDocument = gql`
  mutation UpdateTaskDescription($task: UpdateTaskDescriptionInput!) {
    updateTaskDescription(task: $task) {
      id
      comments {
        content
        id
        user {
          id
          name
          image
        }
      }
      description
      image
      name
      user {
        id
        name
        image
      }
      labels {
        id
        color
        name
      }
    }
  }
`;
export type UpdateTaskDescriptionMutationFn = Apollo.MutationFunction<
  Types.UpdateTaskDescriptionMutation,
  Types.UpdateTaskDescriptionMutationVariables
>;

/**
 * __useUpdateTaskDescriptionMutation__
 *
 * To run a mutation, you first call `useUpdateTaskDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskDescriptionMutation, { data, loading, error }] = useUpdateTaskDescriptionMutation({
 *   variables: {
 *      task: // value for 'task'
 *   },
 * });
 */
export function useUpdateTaskDescriptionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateTaskDescriptionMutation,
    Types.UpdateTaskDescriptionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.UpdateTaskDescriptionMutation,
    Types.UpdateTaskDescriptionMutationVariables
  >(UpdateTaskDescriptionDocument, options);
}
export type UpdateTaskDescriptionMutationHookResult = ReturnType<
  typeof useUpdateTaskDescriptionMutation
>;
export type UpdateTaskDescriptionMutationResult =
  Apollo.MutationResult<Types.UpdateTaskDescriptionMutation>;
export type UpdateTaskDescriptionMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateTaskDescriptionMutation,
  Types.UpdateTaskDescriptionMutationVariables
>;
export const UpdateTaskImageDocument = gql`
  mutation UpdateTaskImage($task: UpdateTaskImageInput!) {
    updateTaskImage(task: $task) {
      id
      comments {
        content
        id
        user {
          id
          name
          image
        }
      }
      description
      image
      name
      user {
        id
        name
        image
      }
      labels {
        id
        color
        name
      }
    }
  }
`;
export type UpdateTaskImageMutationFn = Apollo.MutationFunction<
  Types.UpdateTaskImageMutation,
  Types.UpdateTaskImageMutationVariables
>;

/**
 * __useUpdateTaskImageMutation__
 *
 * To run a mutation, you first call `useUpdateTaskImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskImageMutation, { data, loading, error }] = useUpdateTaskImageMutation({
 *   variables: {
 *      task: // value for 'task'
 *   },
 * });
 */
export function useUpdateTaskImageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.UpdateTaskImageMutation,
    Types.UpdateTaskImageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<Types.UpdateTaskImageMutation, Types.UpdateTaskImageMutationVariables>(
    UpdateTaskImageDocument,
    options,
  );
}
export type UpdateTaskImageMutationHookResult = ReturnType<typeof useUpdateTaskImageMutation>;
export type UpdateTaskImageMutationResult = Apollo.MutationResult<Types.UpdateTaskImageMutation>;
export type UpdateTaskImageMutationOptions = Apollo.BaseMutationOptions<
  Types.UpdateTaskImageMutation,
  Types.UpdateTaskImageMutationVariables
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
  query UsersNotAssignedToBoard($board: UsersNotAssignedToBoardInput!) {
    usersNotAssignedToBoard(board: $board) {
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
 *      board: // value for 'board'
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
