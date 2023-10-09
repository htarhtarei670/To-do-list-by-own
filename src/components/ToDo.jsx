import { useState } from "react";
import AddToDo from "./AddToDo";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

// components
import Header from "./Header";
import ToDoList from "./ToDoList";
import EditToDo from "./EditToDo";

const ToDo = () => {
  const [hidden, setHidden] = useState(false);
  const [userTasks, setUserTask] = useState([]);

  // clickhandler for add btn
  const clickHandler = () => {
      setHidden(true)
  };

  //get tasks data
  const taskGetFun = (data) => {
    const tasks = [
      ...userTasks,
      {
        id: uuidv4(),
        date: moment().format("lll"),
        task: data,
        categery:"all",
        isEditing: false,
      },
    ];
    setUserTask(tasks);

    //to go to do list component
    setHidden(false)
  };

  //submit click button handler
 
  

  return (
    <div className="bg-slate-100 w-[400px] min-h-[200px] rounded-md relative">
      <div className="py-4 px-6">
        <Header />
        {hidden ? (
          <AddToDo onGetTasks={taskGetFun}/>
        ) : (
            <ToDoList todos={userTasks} />
        )}
        {
          userTasks.map((task) => {
            task.isEditing ? <EditToDo /> : <ToDoList isEditing={ task.isEditing }/>
          })
        }

        <div className=" absolute bottom-5 right-4" onClick={clickHandler}>
          <i className="ri-add-line text-2xl p-2 rounded-full bg-orange-600 text-white"></i>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
