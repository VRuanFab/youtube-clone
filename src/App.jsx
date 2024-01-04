import { Outlet } from "react-router-dom"
import NavBar from "./navbar/navBar"
import SideBar from "./navbar/sidebar"

function App() {

  return (
    <div className="w-screen h-screen bg-black text-black dark:text-white">
      <div className="grid">
        <div className="h-fit w-screen"> <NavBar/> </div>

        <div className="flex">
          <div className="h-fit w-fit"> <SideBar/> </div>
          <div className="ml-11"> <Outlet/> </div>
        </div>

      </div>
    </div>
  )
}

export default App
