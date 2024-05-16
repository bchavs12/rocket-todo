import { useState } from "react";

import { ITask } from "./interface/TodoData";
import { v4 as uuid } from "uuid";

import { Header } from "./components/Header";
import { TodoForm } from "./components/TodoForm";
import { TodoHeaderInfo } from "./components/TodoHeaderInfo";
import { TodoItem } from "./components/TodoItem";
import { TodoEmpty } from "./components/TodoEmpty";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: uuid(),
      text: "Concluir BootCampCTD",
      isChecked: true,
    },
    {
      id: uuid(),
      text: "Cansando para caralho dessa merfda dddddd",
      isChecked: false,
    },
    {
      id: uuid(),
      text: "Me tornar Web developer",
      isChecked: true,
    },
    {
      id: uuid(),
      text: "Arrumar um novo emprego!",
      isChecked: false,
    },
  ]);

  return (
    <div className="min-h-screen bg-base-gray-600 text-product-blue">
      <Header />
      <main className="flex flex-col justify-center max-w-app w-full m-auto">
        <TodoForm />
        <section className="mt-16">
          <TodoHeaderInfo />
          <div className="min-h-28 flex flex-col gap-3 overflow-auto">
            {tasks.map((task) => <TodoItem data={task} key={task.id}/>)}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
