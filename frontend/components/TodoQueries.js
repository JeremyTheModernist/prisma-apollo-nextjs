import { gql } from '@apollo/client';

const GET_TODOS = gql`
  query getTodos {
    todos {
      id
      title
      content
    }
  }
`;

const MUTATION_DELETE_TODO = gql`
  mutation($id: ID!) {
    deleteTodo(id: $id) {
      title
      content
    }
  }
`;

const MUTATION_CREATE_TODO = gql`
  mutation($title: String!, $content: String!) {
    createTodo(title: $title, content: $content) {
      title
      content
    }
  }
`;

export { GET_TODOS, MUTATION_CREATE_TODO, MUTATION_DELETE_TODO };
