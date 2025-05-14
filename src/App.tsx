import Header from "./Components/Header"
import Sidenav from "./Components/Sidenav"
import Resumo from "./Pages/Resumo"
import "./Style.css"
import { DataContextProvider } from "./Context/DataContext"

function App() {

  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Resumo />
          <Header />
        </main>
      </div>
    </DataContextProvider>
  )
}

export default App
