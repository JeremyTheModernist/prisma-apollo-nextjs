import { useMutation } from '@apollo/client';
import { MUTATION_CREATE_TODO } from './TodoQueries';
import { useState } from 'react';

const CreateTodo = () => {
  const [state, setState] = useState({
    title: '',
    content: '',
  });

  const [addTodo, data] = useMutation(MUTATION_CREATE_TODO);
  const handleTodoInput = (e) => {
    e.preventDefault();
    const formData = {};
    formData[e.target.name] = e.target.value;
    setState({ ...state, ...formData });
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo({
      variables: {
        title,
        content,
      },
    });
  };
  const { title, content } = state;
  return (
    <form onSubmit={handleAddTodo}>
      <ul style={formStyles}>
        <li style={fieldStyles}>
          <label htmlFor="title">Todo Title</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Todo Title"
            onChange={handleTodoInput}
            value={title}
          />
        </li>
        <li style={fieldStyles}>
          <label htmlFor="content">Todo Content</label>
          <br />
          <textarea
            type="text"
            name="content"
            id="content"
            placeholder="Todo Content"
            onChange={handleTodoInput}
            value={content}
          />
        </li>
        <button type="submit">Create New Todo</button>
      </ul>
    </form>
  );
};

export default CreateTodo;

const formStyles = {
  width: '500px',
  display: 'flex',
  flexFlow: 'column wrap',
  listStyleType: 'none',
  marginLeft: 0,
  padding: 0,
};

const fieldStyles = {
  marginBottom: '30px',
};
