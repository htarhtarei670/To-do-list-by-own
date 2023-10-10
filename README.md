# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


//edit task handler
  const editToDoHandler = (id) => {
    const editTodo = userTasks.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    console.log(editTodo);
    setUserTask(editTodo);
  };

  //update task handler
  const updateTodoHandler = (tsk, id) => {
    const updateTodo = userTasks.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            task: tsk,
            isEditing: !todo.isEditing,
            date: moment().format("lll"),
          }
        : todo
    );
    setUserTask(updateTodo);
  };

  // delete task handler
  const deleteToDoHandler = (id) => {
    const deleteTodo = userTasks.filter((todo) => todo.id !== id);
    setUserTask(deleteTodo);
  };

