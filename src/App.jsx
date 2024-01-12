import { Outlet } from "react-router-dom"
import NavBar from "./navbar/navBar"
import SideBar from "./navbar/sidebar"

function App() {

  return (
    <div className="w-screen h-screen lg:scale-100 md:scale-100 xl:scale-100 dark:text-white bg-black">
      <div className="grid">
        <div className="w-screen"> <NavBar/> </div>

        <div className="flex bg-black">
          <div className="h-fit w-fit lg:scale-100 md:scale-90 xl:scale-100 max-xl:hidden"> <SideBar/> </div>
          <div className="ml-11 h-fit"> <Outlet/> </div>
        </div>

      </div>
    </div>
  )
}

export default App
