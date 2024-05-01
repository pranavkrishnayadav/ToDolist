import styles from "./todoitem.module.css";
export default function Todoitem({ item, todos, setTodoos }) {
  function handleDelete(item) {
    console.log("Delete Button click for item", item);

    setTodoos(todos.filter((todo) => todo !== item));
  }
  function handleclick(name) {
    const newArray = todos.map((todo) =>
      todo.name == name ? { ...todo, done: !todo.done } : todo
    );
    setTodoos(newArray);
  }
  const classname = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span className={classname} onClick={() => handleclick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
