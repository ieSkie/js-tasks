import AddTaskForm from "./AddTaskForm";
import SearchTaskForm from "./SeatchTaskForm";
import ToDoInfo from "./ToDoInfo";
import ToDoList from "./ToDoList";

const ToDo = () => {
  const tasks = [
    { id: "task-1", title: "Джастдуит", isDone: false },
    { id: "task-2", title: "Джастдуит", isDone: true },
  ];

  const deleteAllTasks = () => {
    console.log("Удаляем задачи");
  };

  const deleteTask = () => {
    console.log(`Удаляем задачу с id ${taskId}`);
  };
  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <ToDoInfo
        total={tasks.length}
        done={tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <ToDoList tasks={tasks} onDeleteTaskButtonClick={deleteTask} />
    </div>
  );
};

export default ToDo;
