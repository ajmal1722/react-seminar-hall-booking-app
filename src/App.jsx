import './App.css'
import BookingDate from './components/Date'
import Navbar from './components/Navbar'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>} >
      <Route index element={<HomePage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='signup' element={<SignUp/>} />
    </Route>
  )
)

function App() {

  return (
    <>
      < RouterProvider router={router}/>
    </>
  )
}

export default App
