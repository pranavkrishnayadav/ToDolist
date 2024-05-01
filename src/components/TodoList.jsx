import styles from "./todolist.module.css";

import Todoitem from "./Todoitem";
export default function TodoList({ todos, setTodoos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <Todoitem
          key={item.name}
          item={item}
          todos={todos}
          setTodoos={setTodoos}
        />
      ))}
    </div>
  );
}
