import './CSS/App.css'
import Fav from './Pages/Fav'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import NavBar from './Components/NavBar'
import {MovieProvider} from './Context/MovieContext'

function App() {
  
  return (
    <MovieProvider>
      <NavBar/> 
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/fav' element={<Fav/>}/>
      </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
