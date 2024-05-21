import { Check, Trash } from "@phosphor-icons/react";
import { ITask } from "../interface/TodoData";
import { BaseButton as BtnDeleteTask } from "./fragments/BaseButton";

interface TodoItemProps {
  data: ITask;
  onDeleteTask: (idToDelete: string) => void;
  onToggleTask: ({
    id,
    newCheckedValue,
  }: {
    id: string;
    newCheckedValue: boolean;
  }) => void;
}

export const TodoItem = ({
  data,
  onDeleteTask,
  onToggleTask,
}: TodoItemProps) => {
  function handleDeleteTask() {
    onDeleteTask(data.id);
  }

  function handleTaskToggle() {
    onToggleTask({ id: data.id, newCheckedValue: !data.isChecked });
  }

  return (
    <div className="flex items-center justify-between gap-3  bg-base-gray-500 p-4 border border-solid border-base-gray-400 rounded-lg">
      <div className="flex gap-2">
        <label htmlFor="checkbox" className="flex gap-2" onClick={handleTaskToggle}>
          <input
            type="checkbox"
            readOnly
            className="hidden"
            checked={data.isChecked}
          />
          <span
            className={`w-[18px] h-[18px] flex justify-center items-center rounded-full cursor-pointer ${
              data.isChecked
                ? "border-none bg-product-purple-dark text-base-gray-100 hover:bg-product-purple"
                : "border-2 hover:bg-product-blue-dark"
            }`}
          >
            {data.isChecked && <Check size={12} weight="bold" />}
          </span>
          <p
            className={`text-base-gray-100 select-none transition-all text-sm
         ${data.isChecked ? "line-through text-base-gray-300" : ""}
        `}
          >
            {data.text}
          </p>
        </label>
      </div>
      <BtnDeleteTask
        onClick={handleDeleteTask}
        className="group border-none rounded-md py-[5px] px-[6px] hover:bg-base-gray-400 transition-all"
      >
        <Trash
          size={24}
          color="#808080"
          className="group-hover:fill-feedBack-danger"
        />
      </BtnDeleteTask>
    </div>
  );
};
