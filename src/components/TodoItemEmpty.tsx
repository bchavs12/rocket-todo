import clipboardIcon from "../assets/clipboard.png";

export const TodoItemEmpty = () => {
  return (
    <div className="flex flex-col items-center border-t border-solid border-t-base-gray-400 rounded-t-lg p-16 gap-4">
      <figure>
        <img src={clipboardIcon} alt="clipboardIcon" />
      </figure>
      <div className="text-base-gray-300">
        <p className="text-sm">
          <b className="block">Você ainda não tem tarefas cadastradas</b>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </div>
  );
};
