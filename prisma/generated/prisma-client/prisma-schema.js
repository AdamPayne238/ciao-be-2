module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateChat {
  count: Int!
}

type AggregateMessage {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Chat {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  active: Boolean
  participants(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

type ChatConnection {
  pageInfo: PageInfo!
  edges: [ChatEdge]!
  aggregate: AggregateChat!
}

input ChatCreateInput {
  id: ID
  active: Boolean
  participants: UserCreateManyWithoutChatsInput
  messages: MessageCreateManyWithoutChatIdInput
}

input ChatCreateManyWithoutParticipantsInput {
  create: [ChatCreateWithoutParticipantsInput!]
  connect: [ChatWhereUniqueInput!]
}

input ChatCreateOneWithoutMessagesInput {
  create: ChatCreateWithoutMessagesInput
  connect: ChatWhereUniqueInput
}

input ChatCreateWithoutMessagesInput {
  id: ID
  active: Boolean
  participants: UserCreateManyWithoutChatsInput
}

input ChatCreateWithoutParticipantsInput {
  id: ID
  active: Boolean
  messages: MessageCreateManyWithoutChatIdInput
}

type ChatEdge {
  node: Chat!
  cursor: String!
}

enum ChatOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  active_ASC
  active_DESC
}

type ChatPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  active: Boolean
}

input ChatScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  active: Boolean
  active_not: Boolean
  AND: [ChatScalarWhereInput!]
  OR: [ChatScalarWhereInput!]
  NOT: [ChatScalarWhereInput!]
}

type ChatSubscriptionPayload {
  mutation: MutationType!
  node: Chat
  updatedFields: [String!]
  previousValues: ChatPreviousValues
}

input ChatSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChatWhereInput
  AND: [ChatSubscriptionWhereInput!]
  OR: [ChatSubscriptionWhereInput!]
  NOT: [ChatSubscriptionWhereInput!]
}

input ChatUpdateInput {
  active: Boolean
  participants: UserUpdateManyWithoutChatsInput
  messages: MessageUpdateManyWithoutChatIdInput
}

input ChatUpdateManyDataInput {
  active: Boolean
}

input ChatUpdateManyMutationInput {
  active: Boolean
}

input ChatUpdateManyWithoutParticipantsInput {
  create: [ChatCreateWithoutParticipantsInput!]
  delete: [ChatWhereUniqueInput!]
  connect: [ChatWhereUniqueInput!]
  set: [ChatWhereUniqueInput!]
  disconnect: [ChatWhereUniqueInput!]
  update: [ChatUpdateWithWhereUniqueWithoutParticipantsInput!]
  upsert: [ChatUpsertWithWhereUniqueWithoutParticipantsInput!]
  deleteMany: [ChatScalarWhereInput!]
  updateMany: [ChatUpdateManyWithWhereNestedInput!]
}

input ChatUpdateManyWithWhereNestedInput {
  where: ChatScalarWhereInput!
  data: ChatUpdateManyDataInput!
}

input ChatUpdateOneRequiredWithoutMessagesInput {
  create: ChatCreateWithoutMessagesInput
  update: ChatUpdateWithoutMessagesDataInput
  upsert: ChatUpsertWithoutMessagesInput
  connect: ChatWhereUniqueInput
}

input ChatUpdateWithoutMessagesDataInput {
  active: Boolean
  participants: UserUpdateManyWithoutChatsInput
}

input ChatUpdateWithoutParticipantsDataInput {
  active: Boolean
  messages: MessageUpdateManyWithoutChatIdInput
}

input ChatUpdateWithWhereUniqueWithoutParticipantsInput {
  where: ChatWhereUniqueInput!
  data: ChatUpdateWithoutParticipantsDataInput!
}

input ChatUpsertWithoutMessagesInput {
  update: ChatUpdateWithoutMessagesDataInput!
  create: ChatCreateWithoutMessagesInput!
}

input ChatUpsertWithWhereUniqueWithoutParticipantsInput {
  where: ChatWhereUniqueInput!
  update: ChatUpdateWithoutParticipantsDataInput!
  create: ChatCreateWithoutParticipantsInput!
}

input ChatWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  active: Boolean
  active_not: Boolean
  participants_every: UserWhereInput
  participants_some: UserWhereInput
  participants_none: UserWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  AND: [ChatWhereInput!]
  OR: [ChatWhereInput!]
  NOT: [ChatWhereInput!]
}

input ChatWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Message {
  id: ID!
  text: String!
  createdAt: DateTime!
  chatId: Chat!
  user: User!
}

type MessageConnection {
  pageInfo: PageInfo!
  edges: [MessageEdge]!
  aggregate: AggregateMessage!
}

input MessageCreateInput {
  id: ID
  text: String!
  chatId: ChatCreateOneWithoutMessagesInput!
  user: UserCreateOneWithoutMessagesInput!
}

input MessageCreateManyWithoutChatIdInput {
  create: [MessageCreateWithoutChatIdInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateManyWithoutUserInput {
  create: [MessageCreateWithoutUserInput!]
  connect: [MessageWhereUniqueInput!]
}

input MessageCreateWithoutChatIdInput {
  id: ID
  text: String!
  user: UserCreateOneWithoutMessagesInput!
}

input MessageCreateWithoutUserInput {
  id: ID
  text: String!
  chatId: ChatCreateOneWithoutMessagesInput!
}

type MessageEdge {
  node: Message!
  cursor: String!
}

enum MessageOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  createdAt_ASC
  createdAt_DESC
}

type MessagePreviousValues {
  id: ID!
  text: String!
  createdAt: DateTime!
}

input MessageScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [MessageScalarWhereInput!]
  OR: [MessageScalarWhereInput!]
  NOT: [MessageScalarWhereInput!]
}

type MessageSubscriptionPayload {
  mutation: MutationType!
  node: Message
  updatedFields: [String!]
  previousValues: MessagePreviousValues
}

input MessageSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MessageWhereInput
  AND: [MessageSubscriptionWhereInput!]
  OR: [MessageSubscriptionWhereInput!]
  NOT: [MessageSubscriptionWhereInput!]
}

input MessageUpdateInput {
  text: String
  chatId: ChatUpdateOneRequiredWithoutMessagesInput
  user: UserUpdateOneRequiredWithoutMessagesInput
}

input MessageUpdateManyDataInput {
  text: String
}

input MessageUpdateManyMutationInput {
  text: String
}

input MessageUpdateManyWithoutChatIdInput {
  create: [MessageCreateWithoutChatIdInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutChatIdInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutChatIdInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithoutUserInput {
  create: [MessageCreateWithoutUserInput!]
  delete: [MessageWhereUniqueInput!]
  connect: [MessageWhereUniqueInput!]
  set: [MessageWhereUniqueInput!]
  disconnect: [MessageWhereUniqueInput!]
  update: [MessageUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [MessageUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [MessageScalarWhereInput!]
  updateMany: [MessageUpdateManyWithWhereNestedInput!]
}

input MessageUpdateManyWithWhereNestedInput {
  where: MessageScalarWhereInput!
  data: MessageUpdateManyDataInput!
}

input MessageUpdateWithoutChatIdDataInput {
  text: String
  user: UserUpdateOneRequiredWithoutMessagesInput
}

input MessageUpdateWithoutUserDataInput {
  text: String
  chatId: ChatUpdateOneRequiredWithoutMessagesInput
}

input MessageUpdateWithWhereUniqueWithoutChatIdInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutChatIdDataInput!
}

input MessageUpdateWithWhereUniqueWithoutUserInput {
  where: MessageWhereUniqueInput!
  data: MessageUpdateWithoutUserDataInput!
}

input MessageUpsertWithWhereUniqueWithoutChatIdInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutChatIdDataInput!
  create: MessageCreateWithoutChatIdInput!
}

input MessageUpsertWithWhereUniqueWithoutUserInput {
  where: MessageWhereUniqueInput!
  update: MessageUpdateWithoutUserDataInput!
  create: MessageCreateWithoutUserInput!
}

input MessageWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  chatId: ChatWhereInput
  user: UserWhereInput
  AND: [MessageWhereInput!]
  OR: [MessageWhereInput!]
  NOT: [MessageWhereInput!]
}

input MessageWhereUniqueInput {
  id: ID
}

type Mutation {
  createChat(data: ChatCreateInput!): Chat!
  updateChat(data: ChatUpdateInput!, where: ChatWhereUniqueInput!): Chat
  updateManyChats(data: ChatUpdateManyMutationInput!, where: ChatWhereInput): BatchPayload!
  upsertChat(where: ChatWhereUniqueInput!, create: ChatCreateInput!, update: ChatUpdateInput!): Chat!
  deleteChat(where: ChatWhereUniqueInput!): Chat
  deleteManyChats(where: ChatWhereInput): BatchPayload!
  createMessage(data: MessageCreateInput!): Message!
  updateMessage(data: MessageUpdateInput!, where: MessageWhereUniqueInput!): Message
  updateManyMessages(data: MessageUpdateManyMutationInput!, where: MessageWhereInput): BatchPayload!
  upsertMessage(where: MessageWhereUniqueInput!, create: MessageCreateInput!, update: MessageUpdateInput!): Message!
  deleteMessage(where: MessageWhereUniqueInput!): Message
  deleteManyMessages(where: MessageWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  chat(where: ChatWhereUniqueInput!): Chat
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat]!
  chatsConnection(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChatConnection!
  message(where: MessageWhereUniqueInput!): Message
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message]!
  messagesConnection(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MessageConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  chat(where: ChatSubscriptionWhereInput): ChatSubscriptionPayload
  message(where: MessageSubscriptionWhereInput): MessageSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  first_name: String!
  last_name: String!
  email: String!
  password: String!
  bio: String
  status: String
  github: String
  linkedin: String
  twitter: String
  createdAt: DateTime!
  chats(where: ChatWhereInput, orderBy: ChatOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Chat!]
  messages(where: MessageWhereInput, orderBy: MessageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Message!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  first_name: String!
  last_name: String!
  email: String!
  password: String!
  bio: String
  status: String
  github: String
  linkedin: String
  twitter: String
  chats: ChatCreateManyWithoutParticipantsInput
  messages: MessageCreateManyWithoutUserInput
}

input UserCreateManyWithoutChatsInput {
  create: [UserCreateWithoutChatsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutChatsInput {
  id: ID
  first_name: String!
  last_name: String!
  email: String!
  password: String!
  bio: String
  status: String
  github: String
  linkedin: String
  twitter: String
  messages: MessageCreateManyWithoutUserInput
}

input UserCreateWithoutMessagesInput {
  id: ID
  first_name: String!
  last_name: String!
  email: String!
  password: String!
  bio: String
  status: String
  github: String
  linkedin: String
  twitter: String
  chats: ChatCreateManyWithoutParticipantsInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  first_name_ASC
  first_name_DESC
  last_name_ASC
  last_name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  bio_ASC
  bio_DESC
  status_ASC
  status_DESC
  github_ASC
  github_DESC
  linkedin_ASC
  linkedin_DESC
  twitter_ASC
  twitter_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  first_name: String!
  last_name: String!
  email: String!
  password: String!
  bio: String
  status: String
  github: String
  linkedin: String
  twitter: String
  createdAt: DateTime!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  first_name: String
  first_name_not: String
  first_name_in: [String!]
  first_name_not_in: [String!]
  first_name_lt: String
  first_name_lte: String
  first_name_gt: String
  first_name_gte: String
  first_name_contains: String
  first_name_not_contains: String
  first_name_starts_with: String
  first_name_not_starts_with: String
  first_name_ends_with: String
  first_name_not_ends_with: String
  last_name: String
  last_name_not: String
  last_name_in: [String!]
  last_name_not_in: [String!]
  last_name_lt: String
  last_name_lte: String
  last_name_gt: String
  last_name_gte: String
  last_name_contains: String
  last_name_not_contains: String
  last_name_starts_with: String
  last_name_not_starts_with: String
  last_name_ends_with: String
  last_name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  github: String
  github_not: String
  github_in: [String!]
  github_not_in: [String!]
  github_lt: String
  github_lte: String
  github_gt: String
  github_gte: String
  github_contains: String
  github_not_contains: String
  github_starts_with: String
  github_not_starts_with: String
  github_ends_with: String
  github_not_ends_with: String
  linkedin: String
  linkedin_not: String
  linkedin_in: [String!]
  linkedin_not_in: [String!]
  linkedin_lt: String
  linkedin_lte: String
  linkedin_gt: String
  linkedin_gte: String
  linkedin_contains: String
  linkedin_not_contains: String
  linkedin_starts_with: String
  linkedin_not_starts_with: String
  linkedin_ends_with: String
  linkedin_not_ends_with: String
  twitter: String
  twitter_not: String
  twitter_in: [String!]
  twitter_not_in: [String!]
  twitter_lt: String
  twitter_lte: String
  twitter_gt: String
  twitter_gte: String
  twitter_contains: String
  twitter_not_contains: String
  twitter_starts_with: String
  twitter_not_starts_with: String
  twitter_ends_with: String
  twitter_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  first_name: String
  last_name: String
  email: String
  password: String
  bio: String
  status: String
  github: String
  linkedin: String
  twitter: String
  chats: ChatUpdateManyWithoutParticipantsInput
  messages: MessageUpdateManyWithoutUserInput
}

input UserUpdateManyDataInput {
  first_name: String
  last_name: String
  email: String
  password: String
  bio: String
  status: String
  github: String
  linkedin: String
  twitter: String
}

input UserUpdateManyMutationInput {
  first_name: String
  last_name: String
  email: String
  password: String
  bio: String
  status: String
  github: String
  linkedin: String
  twitter: String
}

input UserUpdateManyWithoutChatsInput {
  create: [UserCreateWithoutChatsInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutChatsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutChatsInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutMessagesInput {
  create: UserCreateWithoutMessagesInput
  update: UserUpdateWithoutMessagesDataInput
  upsert: UserUpsertWithoutMessagesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutChatsDataInput {
  first_name: String
  last_name: String
  email: String
  password: String
  bio: String
  status: String
  github: String
  linkedin: String
  twitter: String
  messages: MessageUpdateManyWithoutUserInput
}

input UserUpdateWithoutMessagesDataInput {
  first_name: String
  last_name: String
  email: String
  password: String
  bio: String
  status: String
  github: String
  linkedin: String
  twitter: String
  chats: ChatUpdateManyWithoutParticipantsInput
}

input UserUpdateWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutChatsDataInput!
}

input UserUpsertWithoutMessagesInput {
  update: UserUpdateWithoutMessagesDataInput!
  create: UserCreateWithoutMessagesInput!
}

input UserUpsertWithWhereUniqueWithoutChatsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutChatsDataInput!
  create: UserCreateWithoutChatsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  first_name: String
  first_name_not: String
  first_name_in: [String!]
  first_name_not_in: [String!]
  first_name_lt: String
  first_name_lte: String
  first_name_gt: String
  first_name_gte: String
  first_name_contains: String
  first_name_not_contains: String
  first_name_starts_with: String
  first_name_not_starts_with: String
  first_name_ends_with: String
  first_name_not_ends_with: String
  last_name: String
  last_name_not: String
  last_name_in: [String!]
  last_name_not_in: [String!]
  last_name_lt: String
  last_name_lte: String
  last_name_gt: String
  last_name_gte: String
  last_name_contains: String
  last_name_not_contains: String
  last_name_starts_with: String
  last_name_not_starts_with: String
  last_name_ends_with: String
  last_name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  bio: String
  bio_not: String
  bio_in: [String!]
  bio_not_in: [String!]
  bio_lt: String
  bio_lte: String
  bio_gt: String
  bio_gte: String
  bio_contains: String
  bio_not_contains: String
  bio_starts_with: String
  bio_not_starts_with: String
  bio_ends_with: String
  bio_not_ends_with: String
  status: String
  status_not: String
  status_in: [String!]
  status_not_in: [String!]
  status_lt: String
  status_lte: String
  status_gt: String
  status_gte: String
  status_contains: String
  status_not_contains: String
  status_starts_with: String
  status_not_starts_with: String
  status_ends_with: String
  status_not_ends_with: String
  github: String
  github_not: String
  github_in: [String!]
  github_not_in: [String!]
  github_lt: String
  github_lte: String
  github_gt: String
  github_gte: String
  github_contains: String
  github_not_contains: String
  github_starts_with: String
  github_not_starts_with: String
  github_ends_with: String
  github_not_ends_with: String
  linkedin: String
  linkedin_not: String
  linkedin_in: [String!]
  linkedin_not_in: [String!]
  linkedin_lt: String
  linkedin_lte: String
  linkedin_gt: String
  linkedin_gte: String
  linkedin_contains: String
  linkedin_not_contains: String
  linkedin_starts_with: String
  linkedin_not_starts_with: String
  linkedin_ends_with: String
  linkedin_not_ends_with: String
  twitter: String
  twitter_not: String
  twitter_in: [String!]
  twitter_not_in: [String!]
  twitter_lt: String
  twitter_lte: String
  twitter_gt: String
  twitter_gte: String
  twitter_contains: String
  twitter_not_contains: String
  twitter_starts_with: String
  twitter_not_starts_with: String
  twitter_ends_with: String
  twitter_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  chats_every: ChatWhereInput
  chats_some: ChatWhereInput
  chats_none: ChatWhereInput
  messages_every: MessageWhereInput
  messages_some: MessageWhereInput
  messages_none: MessageWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    