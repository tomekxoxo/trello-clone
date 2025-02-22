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
    columns: Array<{ __typename?: 'Column'; boardId: string; name: Types.Status } | null>;
  };
};

export type AddCommentMutationVariables = Types.Exact<{
  comment: Types.AddCommentInput;
}>;

export type AddCommentMutation = {
  __typename?: 'Mutation';
  addComment: {
    __typename?: 'Comment';
    id: string;
    createdAt: string;
    content: string;
    user: { __typename?: 'User'; id: string; name: string; image?: string | null };
  };
};

export type AddTaskMutationVariables = Types.Exact<{
  task: Types.TaskInput;
}>;

export type AddTaskMutation = {
  __typename?: 'Mutation';
  addTask: {
    __typename?: 'Task';
    id: string;
    name: string;
    description?: string | null;
    image?: string | null;
    boardId: string;
    columnId: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type AssignLabelsToTaskMutationVariables = Types.Exact<{
  labels: Types.AssignLabelsToTaskInput;
}>;

export type AssignLabelsToTaskMutation = {
  __typename?: 'Mutation';
  assignLabelsToTask: { __typename?: 'Task'; id: string };
};

export type BoardQueryVariables = Types.Exact<{
  boardId: Types.Scalars['ID'];
}>;

export type BoardQuery = {
  __typename?: 'Query';
  board: {
    __typename?: 'Board';
    id: string;
    image?: string | null;
    name: string;
    ownerId: string;
    visibility: Types.Visibility;
    createdAt: string;
    description?: string | null;
    columns: Array<{
      __typename?: 'Column';
      id: string;
      name: Types.Status;
      tasks: Array<{
        __typename?: 'Task';
        id: string;
        description?: string | null;
        image?: string | null;
        name: string;
        labels?: Array<{
          __typename?: 'Label';
          color: string;
          id: string;
          name: string;
        } | null> | null;
        comments?: Array<{
          __typename?: 'Comment';
          id: string;
          user: { __typename?: 'User'; id: string; name: string; image?: string | null };
        } | null> | null;
      } | null>;
    } | null>;
    owner: { __typename?: 'User'; name: string };
    users: Array<{ __typename?: 'User'; id: string; name: string; image?: string | null } | null>;
  };
};

export type TaskFragmentFragment = {
  __typename?: 'Task';
  id: string;
  description?: string | null;
  image?: string | null;
  name: string;
  labels?: Array<{ __typename?: 'Label'; color: string; id: string; name: string } | null> | null;
  comments?: Array<{
    __typename?: 'Comment';
    id: string;
    user: { __typename?: 'User'; id: string; name: string; image?: string | null };
  } | null> | null;
};

export type LabelFragmentFragment = {
  __typename?: 'Label';
  id: string;
  color: string;
  name: string;
};

export type UserFragmentFragment = {
  __typename?: 'User';
  id: string;
  name: string;
  image?: string | null;
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
    users: Array<{ __typename?: 'User'; id: string; name: string; image?: string | null } | null>;
  } | null>;
};

export type ChangeBoardVisibilityMutationVariables = Types.Exact<{
  visbility: Types.VisibilityInput;
}>;

export type ChangeBoardVisibilityMutation = {
  __typename?: 'Mutation';
  changeBoardVisibility: {
    __typename?: 'Board';
    name: string;
    visibility: Types.Visibility;
    id: string;
  };
};

export type CreateLabelMutationVariables = Types.Exact<{
  label: Types.CreateLabelInput;
}>;

export type CreateLabelMutation = {
  __typename?: 'Mutation';
  createLabel: { __typename?: 'Label'; id: string; name: string; color: string };
};

export type DeleteCommentMutationVariables = Types.Exact<{
  deleteCommentId: Types.Scalars['ID'];
}>;

export type DeleteCommentMutation = {
  __typename?: 'Mutation';
  deleteComment: { __typename?: 'Comment'; id: string };
};

export type EditCommentMutationVariables = Types.Exact<{
  comment: Types.EditCommentInput;
}>;

export type EditCommentMutation = {
  __typename?: 'Mutation';
  editComment: { __typename?: 'Comment'; id: string };
};

export type LabelsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type LabelsQuery = {
  __typename?: 'Query';
  labels?: Array<{
    __typename?: 'Label';
    id: string;
    color: string;
    name: string;
    tasksIds: Array<string | null>;
  } | null> | null;
};

export type RegisterMutationVariables = Types.Exact<{
  credentials: Types.RegisterInput;
}>;

export type RegisterMutation = {
  __typename?: 'Mutation';
  register: {
    __typename?: 'User';
    id: string;
    name: string;
    email: string;
    emailVerified?: string | null;
    image?: string | null;
    origin: Types.Origin;
  };
};

export type RemoveUserFromBoardMutationVariables = Types.Exact<{
  board: Types.RemoveUserFromBoardInput;
}>;

export type RemoveUserFromBoardMutation = {
  __typename?: 'Mutation';
  removeUserFromBoard: { __typename?: 'Board'; id: string; name: string };
};

export type SetBoardUsersMutationVariables = Types.Exact<{
  users: Types.SetBoardUsersInput;
}>;

export type SetBoardUsersMutation = {
  __typename?: 'Mutation';
  setBoardUsers: { __typename?: 'Board'; id: string; name: string; image?: string | null };
};

export type TaskQueryVariables = Types.Exact<{
  taskId: Types.Scalars['ID'];
}>;

export type TaskQuery = {
  __typename?: 'Query';
  task: {
    __typename?: 'Task';
    id: string;
    description?: string | null;
    image?: string | null;
    name: string;
    comments?: Array<{
      __typename?: 'Comment';
      id: string;
      content: string;
      updatedAt: string;
      user: { __typename?: 'User'; id: string; name: string; image?: string | null };
    } | null> | null;
    labels?: Array<{ __typename?: 'Label'; id: string; color: string; name: string } | null> | null;
    column: { __typename?: 'Column'; name: Types.Status };
    user?: { __typename?: 'User'; id: string; name: string; image?: string | null } | null;
  };
};

export type UpdateBoardDescriptionMutationVariables = Types.Exact<{
  board: Types.UpdateBoardDescriptionInput;
}>;

export type UpdateBoardDescriptionMutation = {
  __typename?: 'Mutation';
  updateBoardDescription: { __typename?: 'Board'; id: string };
};

export type UpdateTaskDescriptionMutationVariables = Types.Exact<{
  task: Types.UpdateTaskDescriptionInput;
}>;

export type UpdateTaskDescriptionMutation = {
  __typename?: 'Mutation';
  updateTaskDescription: {
    __typename?: 'Task';
    id: string;
    description?: string | null;
    image?: string | null;
    name: string;
    comments?: Array<{
      __typename?: 'Comment';
      content: string;
      id: string;
      user: { __typename?: 'User'; id: string; name: string; image?: string | null };
    } | null> | null;
    user?: { __typename?: 'User'; id: string; name: string; image?: string | null } | null;
    labels?: Array<{ __typename?: 'Label'; id: string; color: string; name: string } | null> | null;
  };
};

export type UpdateTaskImageMutationVariables = Types.Exact<{
  task: Types.UpdateTaskImageInput;
}>;

export type UpdateTaskImageMutation = {
  __typename?: 'Mutation';
  updateTaskImage: {
    __typename?: 'Task';
    id: string;
    description?: string | null;
    image?: string | null;
    name: string;
    comments?: Array<{
      __typename?: 'Comment';
      content: string;
      id: string;
      user: { __typename?: 'User'; id: string; name: string; image?: string | null };
    } | null> | null;
    user?: { __typename?: 'User'; id: string; name: string; image?: string | null } | null;
    labels?: Array<{ __typename?: 'Label'; id: string; color: string; name: string } | null> | null;
  };
};

export type UpdateTaskPositionMutationVariables = Types.Exact<{
  position: Types.TaskPositionInput;
}>;

export type UpdateTaskPositionMutation = {
  __typename?: 'Mutation';
  updateTaskPosition: {
    __typename?: 'Task';
    id: string;
    name: string;
    description?: string | null;
    image?: string | null;
    boardId: string;
    columnId: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type UsersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: 'Query';
  users: Array<{ __typename?: 'User'; id: string; image?: string | null; name: string } | null>;
};

export type UsersNotAssignedToBoardQueryVariables = Types.Exact<{
  board: Types.UsersNotAssignedToBoardInput;
}>;

export type UsersNotAssignedToBoardQuery = {
  __typename?: 'Query';
  usersNotAssignedToBoard: Array<{
    __typename?: 'User';
    name: string;
    id: string;
    image?: string | null;
  } | null>;
};
