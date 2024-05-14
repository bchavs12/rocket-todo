export const InputTask = ({...props}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>) => {
  return (
    <input
      className=" border border-base-gray-700 border-solid rounded-lg bg-base-gray-500 text-base-gray-100 p-4 w-full placeholder:text-base-gray-300 focus:border-product-purple-dark"
      type="text"
      placeholder="Adicione uma nova tarefa"
      required
      {...props}
    />
  );
};
