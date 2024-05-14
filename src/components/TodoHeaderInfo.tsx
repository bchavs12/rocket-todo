export const TodoHeaderInfo = () => {
  return (
    <header className="flex justify-between item mb-6">
      <aside className="flex gap-2 items-center justify-center">
        <p className="font-semibold">Tarefas criadas</p>
        <span className="text-base-gray-200 font-bold bg-base-gray-400 rounded-l-full rounded-r-full px-3 ">
          5
        </span>
      </aside>

      <aside className="flex gap-2 items-center justify-center">
        <p className="font-semibold text-product-purple">Concluídas</p>
        <span className="text-base-gray-200 font-bold bg-base-gray-400 rounded-l-full rounded-r-full px-3 ">
          2 de 5
        </span>
      </aside>
    </header>
  );
};
