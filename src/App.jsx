
import { Outlet } from 'react-router-dom'
import HeaderMenu from "./components/headerMenu/HeaderMenu";
import Footer from "./components/footer/Footer";
import { TrilhasContextProvider } from "./context/TrilhasContext"


function App() {
  
  
  return (
  <>
    <TrilhasContextProvider>
      <HeaderMenu></HeaderMenu>
      <Outlet> </Outlet>
      <Footer></Footer>
    </TrilhasContextProvider>
  </>
  ) 
}

export default App
