import { useState } from "react";

const EditToDo = ({ todo, onUpdateTodo }) => {
  const [updateTodo, setUpdateTodo] = useState(todo.task);
  //submitHandler
  const submitHandler = (e) => {
    e.preventDefault();

    onUpdateTodo(updateTodo, todo.id);

    setUpdateTodo('')
  };

  return (
    <form
      action=""
      className="border-2 rounded-full bg-slate-100 flex justify-between mt-6"
      onSubmit={submitHandler}
    >
      <button
        type="submit"
        className=" bg-slate-600 text-white py-3 px-6 rounded-full"
      >
        Update
      </button>
      <input
        type="text"
        placeholder="Write today's task"
        className="px-4 py-3 bg-transparent border-none outline-none"
        value={updateTodo}
        onChange={(e) => setUpdateTodo(e.target.value)}
      />
    </form>
  );
};

export default EditToDo;
