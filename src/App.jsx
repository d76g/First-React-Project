import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Portfolio from './components/portfolio/portfolio'
import About from './components/About'
import Services from './components/Services'
import Price from './components/Price'
import Footer from './components/Footer'
function App() {

  return (
    <div className='App'>
      <Header/>
      <Portfolio/>
      <Navbar/>
      <About/>
      <Services/>
      <Price/>
      <Footer/>
    </div>
  )
}

export default App
