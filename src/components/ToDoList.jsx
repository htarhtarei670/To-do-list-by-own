import { useState } from "react";
import EachToDoList from "./EachToDoList";
import FliterLists from "./FliterLists";

const ToDoList = ({ todos }) => {
  const [fliterTodo, setFliterTodo] = useState([]);

  const getFliterTodo = (fliTodo) => {
    setFliterTodo(fliTodo)
  }

  return (
    <div className="">
      <FliterLists todos={todos} getFliterTodo={getFliterTodo} />

      <div className="mb-8">
        {todos.length !== 0 ? todos.map((todo, index) => <EachToDoList key={index} todo={todo} />) : <p className="text-center text-red-600 pt-4">There is no task yet!</p>}
      </div>
    </div>
  );
};

export default ToDoList;
