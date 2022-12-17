import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Portfolio from './components/portfolio/portfolio'
function App() {

  return (
    <div className='App'>
      <Header/>
      <Navbar/>
      <Portfolio/>
    </div>
  )
}

export default App
