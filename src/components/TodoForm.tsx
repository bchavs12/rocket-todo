import { PlusCircle } from "@phosphor-icons/react";
import { InputTask } from "./fragments/InputTask";

export const TodoForm = () => {
  return (
    <form className="flex flex-1 gap-2 justify-between">
      <InputTask/>
      <button
        type="submit"
        className="flex justify-center items-center gap-2 bg-product-blue-dark text-base-gray-100 hover:bg-product-blue rounded-lg p-4"
      >
        ADD
        <PlusCircle size={16} color="#f2f2f2" weight="bold" />
      </button>
    </form>
  );
};
