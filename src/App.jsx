import LineChart from "./components/LineChart"
import Navbar from "./components/NavBar/Navbar"
import Phones from "./components/Phones/Phones"
import PriceOptions from "./components/PriceOptions/PriceOptions"

function App() {

  return (
    <div className="container mx-auto">
      <Navbar/>
      <PriceOptions/>
      <LineChart/>
      <Phones/>
      <p>My Name is Amit Biswas.</p>
    </div>
  )
}

export default App
