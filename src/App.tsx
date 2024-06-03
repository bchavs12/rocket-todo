import { Header } from "./components/Header"
import { TodoApp } from "./components/pages/TodoApp"

function App() {
  return (
    <div className="min-h-screen bg-base-gray-600 text-product-blue">
      <Header />
      <main className="flex flex-col justify-center max-w-app w-full m-auto">
        <TodoApp />
      </main>
    </div>
  )
}

export default App
