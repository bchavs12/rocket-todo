import { Check, Trash } from "@phosphor-icons/react";

const isChecked: boolean = false;

export const TodoItem = () => {
  return (
    <div className="flex flex-1 items-start justify-between gap-3  bg-base-gray-500 p-4 border border-solid border-base-gray-400 rounded-lg">
      <label htmlFor="checkbox" className="mt-[6px]">
        <input
          type="checkbox"
          readOnly
          className="hidden"
          checked={isChecked}
        />
        <span
          className={`w-[18px] h-[18px] flex justify-center items-center rounded-full cursor-pointer ${
            isChecked
              ? "border-none bg-product-purple-dark text-base-gray-100 hover:bg-product-purple"
              : "border-2 hover:bg-product-blue-dark"
          }`}
        >
          {isChecked && <Check size={12} weight="bold" />}
        </span>
      </label>
      <p
        className={`flex-1 truncate hover:text-clip hover:h-auto hover:text-wrap text-base-gray-100 select-none transition-all text-sm
         ${isChecked ? "line-through text-base-gray-300" : ""}
        `}
      >
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer. Integer urna interdum massa libero auctor
        neque turpis turpis semper. Duis vel sed fames integer. Integer urna
        
      </p>
      <button  className="group border-none rounded-md py-[5px] px-[6px] hover:bg-base-gray-400 transition-all">
        <Trash
          size={24}
          color="#808080"
          className="group-hover:fill-feedBack-danger"
        />
      </button>
    </div>
  );
};
