import { FormEvent, useState } from "react";
import { v4 as uuidv4  } from "uuid";

import { InputTask } from "./components/fragments/InputTask";
import { BaseButton as BtnAddTask } from "./components/fragments/BaseButton";
import { PlusCircle } from "@phosphor-icons/react/dist/icons/PlusCircle";

import { ITask } from "./interface/TodoData";

import { Header } from "./components/Header";
import { TodoItem } from "./components/TodoItem";
import { TodoItemInfo } from "./components/TodoItemInfo";
import { TodoItemEmpty } from "./components/TodoItemEmpty";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleTaskSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!inputValue) {
      alert("A tarefa precisar conter 5 caracteres ou mais!");
      return
    } 

    const newTask : ITask = {
      id: uuidv4(),
      text: inputValue,
      isChecked: false
    }

    setTasks((state) => [...state, newTask]);
    setInputValue('');
  };

  const handleCheckTask = ({id, valueChecked}: {id: string, valueChecked:boolean}) => {
    const checkTaskStatus = tasks.map((task) => {
      if(task.id === id) {
        return {...task, isChecked: valueChecked}
      }

      return {...task}
    })

    setTasks(checkTaskStatus)
  }

  return (
    <div className="min-h-screen bg-base-gray-600 text-product-blue">
      <Header />
      <main className="flex flex-col justify-center max-w-app w-full m-auto">
        <form
          onSubmit={handleTaskSubmit}
          className="flex flex-1 gap-2 justify-between"
        >
          <InputTask
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            minLength={5}
            maxLength={100}
          />
          <BtnAddTask
            type="submit"
            className="flex justify-center items-center gap-2 bg-product-blue-dark text-base-gray-100 hover:bg-product-blue rounded-lg p-4"
          >
            ADD
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </BtnAddTask>
        </form>
        <section className="mt-16">
          <TodoItemInfo tasksCounterCreated={tasks.length} />
          <div className="min-h-28 flex flex-col gap-3 overflow-auto">
            {tasks.length > 0 ? (
              tasks.map((tasks) => (
                <TodoItem 
                  key={tasks.id} 
                  data={tasks}
                  onHandleCheckTask={handleCheckTask}
                  />
                ))
            ) : (
              <TodoItemEmpty />
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
