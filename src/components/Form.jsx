import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodoos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodoos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.change}>
        <input
          className={styles.moderninput}
          type="text"
          value={todo.name}
          placeholder="Enter ToDo Item"
          onChange={(e) => setTodo({ name: e.target.value, done: false })} // Update state with input value
        />
        <button className={styles.modernButton} type="submit">
          ADD
        </button>
      </div>
    </form>
  );
}
