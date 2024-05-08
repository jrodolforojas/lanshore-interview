import { Provider } from "react-redux"
import Navbar from "./components/navbar"
import Navigation from "./components/navigation"
import { store } from "./state/redux/store"
import { Toaster } from "sonner"

function App() {
  return (
    <Provider store={store}>
      <div>
        <header>
          <Navbar />
        </header>
        <main className="max-w-5xl mx-auto px-10 py-5">
          <Navigation />
        </main>
      </div>
      <Toaster position="top-center" theme="dark" />
    </Provider>
  )
}

export default App
