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
    ownerId: String!
    image: String
    visibility: Visibility!
    owner: User!
    users: [User]!
    tasks: [Task]
    columns: [Column]!
    usersIds: [String]
  }

  type Column {
    id: ID!
    name: String!
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
    labels: [Label]
    status: Status!
    image: String
    boardId: String!
    board: Board!
    columnId: String!
    column: Column!
    createdAt: String!
    updatedAt: String!
    usersIds: [String!]!
    users: [User!]!
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

  input AddUsersInput {
    userIds: [String]!
    boardId: ID!
  }

  input VisibilityInput {
    id: ID!
    visibility: Visibility!
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
    changeBoardVisibility(visbility: VisibilityInput!): Board!
    addUsersToBoard(users: AddUsersInput!): Board!
  }
`;
