import { AppContext, useAuth } from "../../Context/useContext";
import { useState, useContext } from "react";

export const FilterTodos = () => {
  const { todosDone, setTodoDone } = useContext(AppContext);

  const [showTask, setshowTask] = useState(false);
  const [clean, setclean] = useState(false);

  const toogleShowCompleted = () => {
    setshowTask(!showTask);
    setclean(false);
  };

  const cleanTable = () => {
    setclean(true);
  };

  return (
    <div className="flex m-2 p-2 bg-black text-white flex-col rounded-lg">
      <button
        className={`p-3 text-sm cursor-pointer hover:bg-slate-500`}
        onClick={() => toogleShowCompleted()}
      >
        Mostrar tareas terminadas
      </button>
      <div
        className={`text-2xl p-1 rounded-full cursor-pointer ${
          clean && "hidden"
        }`}
      >
        {showTask && (
          <ul className="mb-2">
            {todosDone.map((todo) => (
              <li className="text-sm" key={todo.id}>
                {todo.text}
              </li>
            ))}
          </ul>
        )}
        <button
          className="p-2 bg-slate-400 rounded-md w-full cursor-pointer hover:bg-slate-600 text-sm"
          onClick={() => cleanTable()}
        >
          Limpiar ventana
        </button>
      </div>
    </div>
  );
};
