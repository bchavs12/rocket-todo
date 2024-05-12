/* eslint-disable @typescript-eslint/no-unused-vars */
import "./global.css";
import rocketLogo from "./assets/rocket.svg";
import ButtonPlusIcon from "./assets/ButtonPlusIcon.svg";

import { TodoType } from "./interface/TodoData";

const todos: TodoType[] = [
  {
    text: "Atualizar meu portifolio",
    done: false,
    id: 1,
  },
  {
    text: "Concluir BootCampCTD",
    done: false,
    id: 2,
  },
  {
    text: "Me formar na faculdade",
    done: false,
    id: 3,
  },
  {
    text: "Desenvolvedor Web",
    done: false,
    id: 4,
  },
  {
    text: "Hello World",
    done: false,
    id: 5,
  },
];

function App() {
  return (
    <div className="min-h-screen grid grid-rows-app bg-base-gray-600 text-product-blue">
      <header className="flex justify-center bg-base-gray-700">
        <div className="flex items-center justify-center gap-3">
          <figure>
            <img src={rocketLogo} alt="rocket-logo" />
          </figure>

          <h1 className="text-3xl font-sans font-extrabold">
            to<span className="text-product-purple-dark">do</span>
          </h1>
        </div>
      </header>
      <main className="flex justify-center w-screen">
        <form className="flex absolute gap-2 w-full max-w-2xl">
          <input
            className="w-full p-4 rounded-lg bg-base-gray-500 text-base-gray-100 placeholder:text-base-gray-300 border-none"
            type="text"
            name="todo"
            id="todo"
            placeholder="Adicione uma nova tarefa"
            required
          />
          <button
            type="submit"
            className="flex justify-center items-center gap-2 bg-product-blue-dark text-base-gray-100 hover:bg-product-blue rounded-lg p-4"
          >
            ADD
            <img src={ButtonPlusIcon} />
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
