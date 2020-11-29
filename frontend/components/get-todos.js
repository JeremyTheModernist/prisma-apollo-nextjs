import { useQuery, gql } from '@apollo/client';
import { GET_TODOS } from './TodoQueries';
import DeleteTodo from './delete-todo';

const GetTodos = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return data.todos.map(({ id, title, content }) => {
    return (
      <div key={id}>
        <h2>{title}</h2>
        <p>{content}</p>
        <DeleteTodo id={id} />
      </div>
    );
  });
};

export default GetTodos;
