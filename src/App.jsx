import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./Components/Todo/Todo";
import { db } from "./Firebase/firebaseConfig";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { FilterTodos } from "./Components/Filter/Filter";

const style = {
  bg: `h-screen w-screen p-4 bg-[#CF11D9]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4 max-sm:flex max-sm:flex-col`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between max-sm:w-sm`,
  input: `border p-2 w-full text-xl`,
  button: `border p-3 ml-2 bg-black text-slate-100 hover:bg-slate-500 rounded-xl`,
};

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");


  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };


  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);



  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };


  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className={style.bg}>
      <div className={`${style.container}`}>
        <h3 className={style.heading}>Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Add Todo"
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
        <FilterTodos />
      </div>
    </div>
  );
}

export default App;
