// import { useEffect } from "react";
import { useEffect } from "react";
import { useState } from "react";

const FliterLists = ({ todos, onFliterToDo, onClearAllTodo }) => {
  const [category, setCategory] = useState("all");

  const categories = [
    { name: "all", label: "All" },
    { name: "pending", label: "Pending" },
    { name: "completed", label: "Completed" },
  ];

  // getCategoryTodo
  useEffect(() => {
    if (todos.length !== 0) {
      onFliterToDo(category);
    }
  }, [category]);

  return (
    <>
      <div className="my-4">
        <ul className="flex justify-between mx-4 items-center cursor-pointer">
          {categories.map((cat) => (
            <li
              className={cat.name === category ? "text-orange-500" : ""}
              key={cat.name}
              id={cat.name}
              onClick={() => {
                setCategory(cat.name);
              }}
            >
              {cat.label}
            </li>
          ))}
          <li id="clearAll" onClick={() => onClearAllTodo(todos)}>
            <button className="bg-orange-500 p-2 text-white rounded-md">
              Clear All
            </button>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
};

export default FliterLists
