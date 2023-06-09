import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    emailVerified: String
    image: String
    origin: Origin!
    boardsIds: [String]
    boards: [Board]
    ownerBoardsIds: [String]
    ownerBoards: [Board]
    tasksIds: [String]
    tasks: [Task]
    Comments: [Comment]
  }

  type Board {
    id: ID!
    name: String!
    image: String
    description: String
    visibility: Visibility!
    createdAt: String!
    updatedAt: String!
    usersIds: [String]
    users: [User]!
    ownerId: String!
    owner: User!
    columns: [Column]!
    tasks: [Task]
  }

  type Column {
    id: ID!
    name: Status!
    createdAt: String!
    updatedAt: String!
    boardId: String!
    board: Board!
    tasks: [Task]!
  }

  type Task {
    id: ID!
    name: String!
    description: String
    image: String
    boardId: String!
    board: Board!
    columnId: String!
    column: Column!
    createdAt: String!
    updatedAt: String!
    userId: String!
    user: User
    labelsIds: [String]
    labels: [Label]
    comments: [Comment]
    order: Int!
  }

  type Label {
    id: ID!
    name: String!
    color: String!
    tasksIds: [String]!
    tasks: [Task]!
  }

  type Comment {
    id: ID!
    content: String!
    createdAt: String!
    updatedAt: String!
    taskId: String!
    task: Task!
    userId: String!
    user: User!
  }

  enum Origin {
    LOCAL
    GOOGLE
  }

  enum Visibility {
    PUBLIC
    PRIVATE
  }

  enum Status {
    BACKLOG
    IN_PROGRESS
    QA
    DONE
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  input BoardInput {
    name: String!
    image: String
    description: String
    visibility: Visibility!
  }

  input UpdateBoardDescriptionInput {
    boardId: ID!
    description: String!
  }

  input AddUsersInput {
    userIds: [String]!
    boardId: ID!
  }

  input VisibilityInput {
    id: ID!
    visibility: Visibility!
  }

  input TaskInput {
    name: String!
    boardId: String!
    columnId: String!
  }

  input TaskPositionInput {
    taskId: String!
    newColumnId: String!
    newIndex: Int!
  }

  type Query {
    users: [User]!
    usersNotAssignedToBoard(boardId: ID!): [User]!
    boardUsers(id: ID!): [User]!
    board(id: ID!): Board!
    boards: [Board]!
  }

  type Mutation {
    register(credentials: RegisterInput!): User!
    addBoard(board: BoardInput!): Board!
    updateBoardDescription(board: UpdateBoardDescriptionInput!): Board!
    addTask(task: TaskInput!): Task!
    updateTaskPosition(position: TaskPositionInput!): Task!
    changeBoardVisibility(visbility: VisibilityInput!): Board!
    addUsersToBoard(users: AddUsersInput!): Board!
  }
`;
