
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import SignIn from './pages/SignIn'
import "./reset.scss"

function App() {

  return (
    <>
      <Header />
      <Outlet />
      {/* <SignIn /> */}
    </>
  )
}

export default App
