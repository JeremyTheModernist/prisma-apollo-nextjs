const { ApolloServer, gql } = require('apollo-server');

// if you want to outsource the schema to a separate file, you need to use readFileSync

// const { readFileSync } = require('fs');

// const typeDefsTwo = readFileSync('./schema.graphql');
// const typeDefsGQL = gql`
//   ${typeDefsTwo}
// `;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    content: String!
  }
  type Query {
    todos: [Todo]
    todo: Todo
  }

  type Mutation {
    createTodo(title: String!, content: String!): Todo!
    deleteTodo(id: ID!): Todo!
    deleteAllTodos: String
  }
`;

const resolvers = {
  Query: {
    todos: (parent, args, context, info) => {
      console.log('YOUR CONTEXT', context);
      return context.prisma.todo.findMany({});
    },
    todo: (parent, args, context, info) => {
      return context.prisma.todo.findOne({
        where: {
          id: 1,
        },
      });
    },
  },
  Mutation: {
    createTodo: (parent, args, context, info) => {
      const { title, content } = args;
      return context.prisma.todo.create({
        data: {
          title,
          content,
        },
      });
    },
    deleteTodo: (parent, args, context, info) => {
      const { id } = args;
      return context.prisma.todo.delete({
        where: {
          id: parseInt(id),
        },
      });
    },
    deleteAllTodos: (parent, args, context, info) => {
      context.prisma.todo.deleteMany();
      return 'All todos have been deleted';
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: 'http://localhost:3000',
  },
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => {
  console.log(`Your server is available at ${url}`);
});
