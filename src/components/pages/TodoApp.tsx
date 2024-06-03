import { useState } from "react"

import { ITask } from "../../interface/TodoData"
import { v4 as UUID } from "uuid"

import { TodoForm } from "../TodoForm"
import { TodoItem } from "../TodoItem"
import { TodoItemInfo } from "../TodoItemInfo"
import { TodoItemEmpty } from "../TodoItemEmpty"

export function TodoApp() {
  const [tasks, setTasks] = useState<ITask[]>([])

  const handleTaskSubmit = (formTextValue: string) => {
    if (!formTextValue) {
      alert("Insira a descrição da sua task para ser adicionada a lista!")
      return
    }

    const newTask: ITask = {
      id: UUID(),
      text: formTextValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
  }

  const handleDeleteTask = (idToDelete: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== idToDelete)
    // Criar modal e mostrar para comfirmar a remoção da task

    setTasks(filteredTasks)
  }

  const handleToggleTask = ({
    id,
    newCheckedValue,
  }: {
    id: string
    newCheckedValue: boolean
  }) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: newCheckedValue }
      }

      return { ...task }
    })

    setTasks(updatedTask)
  }

  const counterTodoChecked = tasks.reduce((prevValue, currentValue) => {
    if (currentValue.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  return (
    <>
      <TodoForm onHandleSubmit={handleTaskSubmit} />
      <section className="mt-16">
        <TodoItemInfo
          tasksCounterCreated={tasks.length}
          counterTodoChecked={counterTodoChecked}
        />
        <div className="min-h-28 flex flex-col gap-3 overflow-auto">
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return (
                <TodoItem
                  data={task}
                  key={task.id}
                  onDeleteTask={handleDeleteTask}
                  onToggleTask={handleToggleTask}
                />
              )
            })
          ) : (
            <TodoItemEmpty />
          )}
        </div>
      </section>
    </>
  )
}
