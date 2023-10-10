import { useState } from "react";
import AddToDo from "./AddToDo";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

// components
import Header from "./Header";
import ToDoList from "./ToDoList";
import FliterLists from "./FliterLists"
import EditToDo from "./EditToDo"
import { useEffect } from "react";


const ToDo = () => {
  const [hidden, setHidden] = useState(false);
  const [userTasks, setUserTask] = useState([]);
  const [filterTasks, setFilterTasks] = useState([]);

//to store data localstorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setFilterTasks(savedTodos);
},[])

  // clickhandler for add btn
  const clickHandler = () => {
    setHidden(true);
  };

  //get tasks data
  const taskGetFun = (data) => {
    const tasks = [
      ...userTasks,
      {
        id: uuidv4(),
        date: moment().format("lll"),
        task: data,
        isEditing: false,
        category: "pending",
        isCheck: false,
      },
    ];
    setUserTask(tasks);
    setFilterTasks(tasks)

    localStorage.setItem("todos",JSON.stringify(tasks))

    //to go to do list component
    setHidden(false);
  };

  // fliter todo handler,it will work when we click each category
  let todoList = [];
  const fliterTodoHandler = (category) => {
    todoList =
      category !== "all"
        ? userTasks.filter((todo) => todo.category === category)
        : userTasks;
    setFilterTasks(todoList);
    localStorage.setItem("todos", JSON.stringify(todoList));
  };

  // fliterToDoHandler
  const fliterToDoListHandler = (check, id) => {
    const fliterTodo = filterTasks.map((todo) =>
      todo.id === id
        ? check
          ? { ...todo, category: "completed", isCheck: true }
          : { ...todo, category: "pending", isCheck: false }
        : todo
    );
    setUserTask(fliterTodo);
    setFilterTasks(flit)
    localStorage.setItem("todos", JSON.stringify(fliterTodo));

  };

  // edit to do handler
  const editToDoHandler = (id) => {
    const editToDo = filterTasks.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)
    setFilterTasks(editToDo);
  }

  // update to do handler
  const updateToDoHandler = (tsk, id) => {
    const updateToDo = filterTasks.map(todo => todo.id === id ? { ...todo, task: tsk, isEditing: !todo.isEditing } : todo)
    setUserTask(updateToDo);
    setFilterTasks(updateToDo);
    localStorage.setItem("todos", JSON.stringify(updateToDo));

  }

  //delete to do handler
  const deleteToDoHandler = (id) => {
    const deleteToDo = filterTasks.filter(todo => todo.id !== id);
    setFilterTasks(deleteToDo);
    localStorage.setItem("todos", JSON.stringify(deleteToDo));

  }

  // clear all tasks todo handler
  const clearAllToDoHandler = (todos) => {
    const clearTodo = todos.splice(0, todos.length);
    setFilterTasks(clearTodo);
    localStorage.setItem("todos", JSON.stringify(clearTodo));

  }

  return (
    <div className="bg-slate-100 w-[400px] min-h-[200px] rounded-md relative">
      <div className="pt-4 pb-16 px-4 md:px-6">
        <Header />
        {hidden ? (
          <AddToDo onGetTasks={taskGetFun} />
        ) : (
          <FliterLists
            todos={userTasks}
            onFliterToDo={fliterTodoHandler}
            onClearAllTodo={clearAllToDoHandler}
          />
        )}

        {filterTasks.length !== 0 ? filterTasks.map((tsk, index) =>
          tsk.isEditing ? (
            <EditToDo todo={tsk} key={index} onUpdateTodo={updateToDoHandler} />
          ) : (
            <ToDoList
              todo={tsk}
              key={index}
              onFliterTodoList={fliterToDoListHandler}
              onEditTodo={editToDoHandler}
              onDeleteTodo={deleteToDoHandler}
            />
          )
        ):<p className="text-center text-red-500 mt-4">There is no tasks yet!</p>}
      </div>

      {/* add btn */}
      <div className=" absolute bottom-5 right-4 cursor-pointer" onClick={clickHandler}>
        <i className="ri-add-line text-2xl p-2 rounded-full bg-orange-600 text-white"></i>
      </div>
    </div>
  );
};

export default ToDo;
