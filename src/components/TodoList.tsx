import { TodoHeaderInfo } from "./TodoHeaderInfo";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  return (
    <section className="mt-16">
      <TodoHeaderInfo />
      <div className="min-h-28 flex flex-col gap-3 overflow-auto">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </section>
  );
};
