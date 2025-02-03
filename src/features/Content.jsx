import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";

const Container = styled.div`
  border-radius: 0.5rem;
  height: 10rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
  min-height: 40rem; /* Prevent it from shrinking too small */
  max-height: 100%; /* Ensure it doesn't exceed its parent */
  padding: 2rem 16rem;

  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 2rem 10rem;
  }

  @media (max-width: 1040px) {
    padding: 2rem 6rem;
  }

  @media (max-width: 845px) {
    padding: 2rem 4rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const Input = styled.input`
  background-color: #faf9f7;
  width: 85%;
  padding: 1rem 1rem;
  border-radius: 0.5rem 0.5rem 0 0;

  border: none; /* Remove default borders */
  border-bottom: 2px solid transparent; /* Transparent border initially */
  outline: none; /* Remove the default focus outline */
  transition: border-bottom-color 0.3s ease;

  &:focus {
    border-bottom-color: #f24563;
  }

  @media (max-width: 1260px) {
    width: 80%;
  }

  @media (max-width: 1160px) {
    width: 75%;
  }

  @media (max-width: 600px) {
    width: 70%;
  }
`;

const Ul = styled.ul`
  overflow-y: scroll;
  scroll-behavior: smooth;
  margin-top: 2rem;
`;

const Button = styled.button`
  background-color: #f5748a;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  color: white;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.97);
  }

  &:hover {
    background-color: #f24563;
  }
`;

const ButtonClear = styled.button`
  color: #656565;
  text-decoration: underline;
  text-transform: capitalize;
  margin-top: auto;
  transition: all 0.2s ease;

  &:active {
    transform: scale(0.99);
  }

  &:hover {
    color: black;
  }
`;

function Content() {
  const [todos, setTodos] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    // Get the saved todos from localStorage
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos)); // Set the todos state if there are saved todos
    }
  }, []);

  function handleAddTodo(todo) {
    // Add the new todo to the state
    setTodos((todos) => {
      const updatedTodos = [...todos, todo];
      // Save the updated todos array to localStorage
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  function handleToggle(id) {
    setTodos((todos) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  function handleDelete(id) {
    setTodos((todos) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      // Update localStorage with the updated todos list
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  function handleDeleteAll() {
    localStorage.clear("todos");
    setTodos([]);
  }

  function handleSubmit(e) {
    e.preventDefault(); // preventing to load the entire page once the form is submitted.

    if (!content) return; // if there's no value the form can't be submitted

    const newTodo = { content, isChecked: false, id: Date.now() };

    handleAddTodo(newTodo);
    setContent("");
  }

  return (
    <Container>
      <form className="flex justify-between" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Todo..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button>add</Button>
      </form>

      <Ul className="mt-8">
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </Ul>

      <ButtonClear onClick={handleDeleteAll}>clear all</ButtonClear>
    </Container>
  );
}

export default Content;
