import Image from "next/image";
import TodoCheckBox from "./components/todoCheckbox";

export default async function Home() {

  // const fetchTodos = await fetch('http://localhost:3000/api/todos');
  // const todos = await fetchTodos.json();
  // console.log(todos,"todos")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <ul>
         {todos.result.map((todo:any)=><li key={todo.id}> <TodoCheckBox todo={todo} /> {todo.title}</li>)}
      </ul> */}
    </main>
  );
}
