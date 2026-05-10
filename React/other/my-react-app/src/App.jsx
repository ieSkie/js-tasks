// App.jsx
import { useState, useRef } from "react";
import Button from "./components/Button";

const list = [
  { id: 1, value: "Продать хлеб" },
  { id: 2, value: "Купить хлеб" },
  { id: 3, value: "Съесть хлеб" },
];

export default function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState(list);
  const inputRef = useRef();

  const findMax = () => {
    let max = 0;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id > max) {
        max = tasks[i].id;
      }
    }
    return max;
  };

  const plusClick = () => setCount(count + 1);
  const zeroClick = () => setCount(0);
  const minusClick = () => count > 0 && setCount(count - 1);

  const addTask = () => {
    if (inputRef.current.value === "") return;
    const clone = [...tasks];
    clone.push({ id: findMax() + 1, value: inputRef.current.value });
    setTasks(clone);
    inputRef.current.value = "";
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      {count % 2 === 0 ? (
        <h1 className="h1_green">{count}</h1>
      ) : (
        <h1 className="h1_red">{count}</h1>
      )}
      <Button text="+1" onClick={plusClick} />
      <Button text="Сброс" onClick={zeroClick} />
      <Button text="-1" onClick={minusClick} />

      <div className="for_list">
        <input placeholder="Новая задача" ref={inputRef} />
        <Button text="Добавить" onClick={addTask} />
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.value}
              <button onClick={() => deleteTask(task.id)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
