import { FormEvent, useState } from "react"

import { PlusCircle } from "@phosphor-icons/react"

import { BaseInput as InputTask } from "./fragments/BaseInput"
import { BaseButton as BtnAddTask } from "./fragments/BaseButton"

interface ITodoFormProps {
  onHandleSubmit: (formValue: string) => void
}

export function TodoForm({ onHandleSubmit }: ITodoFormProps) {
  const [inputValue, setInputValue] = useState("")

  function handleTaskSubmit(e: FormEvent) {
    e.preventDefault()
    onHandleSubmit(inputValue)

    setInputValue("")
  }

  const inputValidation = inputValue.length < 5
  return (
    <form
      className="flex flex-1 gap-2 justify-between"
      onSubmit={handleTaskSubmit}
    >
      <InputTask
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-base-gray-700 border-solid rounded-lg bg-base-gray-500 text-base-gray-100 p-4 w-full placeholder:text-base-gray-300 focus:border-product-purple-dark"
      />
      <BtnAddTask
        type="submit"
        className={`flex justify-center items-center gap-2 bg-product-blue-dark text-base-gray-100 rounded-lg p-4 ${
          inputValidation
            ? "opacity-80 cursor-not-allowed"
            : "hover:bg-product-blue  cursor-pointer"
        }`}
        disabled={inputValidation}
      >
        ADD
        <PlusCircle size={16} color="#f2f2f2" weight="bold" />
      </BtnAddTask>
    </form>
  )
}
