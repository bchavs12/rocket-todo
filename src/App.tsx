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

    if(!inputValue){
      return
    }

    const newTask:ITask = {
      id: uuidv4(),
      text: inputValue,
      isChecked: false
    }

    setTasks([...tasks, newTask]);
    setInputValue("");
  }

  const handleDeleteTask = (idToDelete: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== idToDelete)
    // Criar modal e mostrar para comfirmar a remoção da task

    setTasks(filteredTasks) 
  }

  const handleToggleTask = ({id, newCheckedValue}:{id: string, newCheckedValue: boolean}) => {
     const updatedTask = tasks.map(task => {
        if(task.id === id){
          return {...task, isChecked: newCheckedValue}
        }

        return {...task}
     })

     setTasks(updatedTask);
  }

  const counterTodoChecked = tasks.reduce((prevValue, currentValue) => {
    if(currentValue.isChecked){
      return prevValue + 1
    }

    return prevValue;
  }, 0)

  const inputValidation = inputValue.length < 5;
  return (
    <div className="min-h-screen bg-base-gray-600 text-product-blue">
      <Header />
      <main className="flex flex-col justify-center max-w-app w-full m-auto">
        <form
          className="flex flex-1 gap-2 justify-between"
          onSubmit={handleTaskSubmit}
        >
          <InputTask
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            minLength={5}
            maxLength={100}
          />
          <BtnAddTask
            type="submit"
            className={`flex justify-center items-center gap-2 bg-product-blue-dark text-base-gray-100 rounded-lg p-4 ${inputValidation ? "opacity-80 cursor-not-allowed" : "hover:bg-product-blue  cursor-pointer"}`}
            disabled={inputValidation}
          >
            ADD
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </BtnAddTask>
        </form>
        <section className="mt-16">
          <TodoItemInfo 
            tasksCounterCreated={tasks.length}
            counterTodoChecked={counterTodoChecked} 
          />
          <div className="min-h-28 flex flex-col gap-3 overflow-auto">
            {tasks.length > 0 ? tasks.map(task => {
              return (
                <TodoItem 
                  data={task} 
                  key={task.id}
                  onDeleteTask={handleDeleteTask}
                  onToggleTask={handleToggleTask}
                />
              )
            }) : <TodoItemEmpty/>}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
