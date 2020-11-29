import { MUTATION_DELETE_TODO } from './TodoQueries';
import { useMutation } from '@apollo/client';

const DeleteTodo = ({ id }) => {
  const [deleteTodo, data] = useMutation(MUTATION_DELETE_TODO);
  const handleDeleteTodo = () => {
    deleteTodo({
      variables: {
        id,
      },
    });
  };
  return <button onClick={handleDeleteTodo}>Delete Todo</button>;
};

export default DeleteTodo;
