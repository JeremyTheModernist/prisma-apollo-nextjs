import CreateTodo from '../components/create-todo';
import Todos from '../components/get-todos';

const Index = () => {
  return (
    <div>
      <h1>My todos:</h1>
      <main>
        <Todos />
        <CreateTodo />
      </main>
    </div>
  );
};

export default Index;
