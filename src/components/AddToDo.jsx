import { useState } from "react";

const AddToDo = ({ onGetTasks }) => {
  const [tasks, setTasks] = useState();
  const [input, setInput] = useState("");

 
  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    //to sent tasks data to todo js
    if (tasks) {
      onGetTasks(tasks);
    }

    //   take user input data tasks
    setTasks(input);

    //  to delete input value
    setInput("");
  };

  return (
    <div className="mt-5">
      <form
        action=""
        onSubmit={submitHandler}
        className="border rounded-full bg-slate-100 flex justify-between"
      >
        <input
          type="text"
          placeholder="Write today's task"
          className="px-4 py-3 bg-transparent border-none outline-none"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className=" bg-orange-600 text-white py-3 px-8 rounded-full"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddToDo;
