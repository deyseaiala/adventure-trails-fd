
import { Outlet } from 'react-router-dom'
import HeaderMenu from "./components/headerMenu/HeaderMenu";
import Footer from "./components/footer/Footer";


function App() {
  
  
  return (
  <>
     <HeaderMenu></HeaderMenu>
     <Outlet> </Outlet>
    <Footer></Footer>
  </>
  )
}

export default App
