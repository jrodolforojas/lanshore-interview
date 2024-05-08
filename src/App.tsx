import Navbar from "./components/navbar"
import Navigation from "./components/navigation"

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="max-w-5xl mx-auto px-10 py-5">
        <Navigation />
      </main>
    </div>
  )
}

export default App
