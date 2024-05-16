import { Check, Trash } from "@phosphor-icons/react";
import { ITask } from "../interface/TodoData";

interface TodoItemProps {
  data: ITask;
}

export const TodoItem = ({ data }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between gap-3  bg-base-gray-500 p-4 border border-solid border-base-gray-400 rounded-lg">
      <div className="flex gap-2">
        <label htmlFor="checkbox" className="mt-1">
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
        </label>
        <p
          className={`text-base-gray-100 select-none transition-all text-sm
         ${data.isChecked ? "line-through text-base-gray-300" : ""}
        `}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a blanditiis minima praesentium eveniet impedit aspernatur voluptatum? Nam dicta vel ab vero, odio explicabo, iusto, excepturi facilis sapiente officiis ipsum.
          Libero odit, autem et labore architecto iure? Assumenda amet, eos impedit labore qui unde excepturi ea maxime ipsum. Deleniti nesciunt quas, qui possimus corporis magni voluptate ipsa illum maiores magnam.
          Doloremque eos, eligendi, quis quas ex excepturi et cumque dolores necessitatibus, delectus corrupti placeat ipsum voluptatibus atque aliquid similique iusto. Veniam, rerum inventore! Porro odio ad illum aperiam esse repudiandae!
        </p>
      </div>
      <button className="group border-none rounded-md py-[5px] px-[6px] hover:bg-base-gray-400 transition-all">
        <Trash
          size={24}
          color="#808080"
          className="group-hover:fill-feedBack-danger"
        />
      </button>
    </div>
  );
};
