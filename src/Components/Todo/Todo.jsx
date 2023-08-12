import { FaRegTrashAlt } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import { AppContext, useAuth } from "../../Context/useContext";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
  tachar: `line-through`,
};

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  const { setTodoDone, todosDone } = useContext(AppContext);

  const [crossoutTodo, setcrossoutTodo] = useState(false);

  const doneTodo = (tarea) => {
    setcrossoutTodo(true);
    const todoexist = todosDone.find((item) => item.id === tarea.id);

    if (!todoexist) {
      setTodoDone([...todosDone, tarea]);
    }
  };

  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? "checked" : ""}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={
            todo.completed
              ? style.textComplete
              : crossoutTodo
              ? style.tachar
              : style.text
          }
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
      <button onClick={() => doneTodo(todo)}>
        <BsFillCheckCircleFill />
      </button>
    </li>
  );
};

export default Todo;
