import { ITask } from "./interface/TodoData";

import "./global.css";
import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="min-h-screen bg-base-gray-600 text-product-blue">
      <Header />
      <main className="flex flex-col justify-center max-w-app w-full m-auto">
        <TodoForm />
        <TodoList/>
      </main>
    </div>
  );
}

export default App;
