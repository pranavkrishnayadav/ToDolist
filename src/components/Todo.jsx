import { useState } from "react";
import Todoitem from "./Todoitem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  
  const [todos, setTodoos] = useState([]);
 let TotalToDos= todos.length
  const completeditems = todos.filter((todo)=>todo.done).length
  return (
    <div>
      <Form todos={todos} setTodoos={setTodoos}></Form>
<TodoList todos={todos} setTodoos={setTodoos}></TodoList>
<Footer completeditems={completeditems} TotalToDos={TotalToDos}></Footer>
    </div>
  );
}
