import './App.css'
import { FaTrash } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';
import Todo from './Components/Todo'


function App() {
  const [todos, setTodos] = useState(['Lean React', 'Clean the House'])

  const style = {
    bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#CB54C1] to-[#DDA5D8]`,
    container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between`,
    input: `border p-2 w-full text-xl`,
    button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
    count: `text-center p-2`,
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <div className={style.heading}>Todo App</div>
        <form className={style.form}>
          <input type="text" placeholder="Add your todo" />
          <button className={style.button}>
            <FaTrash />
          </button>
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App
