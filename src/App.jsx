import { Outlet } from "react-router-dom"
import NavBar from "./navbar/navBar original"

function App() {

  return (
    <div className="w-screen h-screen lg:scale-100 md:scale-100 xl:scale-100 dark:text-white bg-neutral-950">
      <div className="grid">
        <div className="w-screen z-40 sticky top-0"> <NavBar/> </div>

        <div className="flex bg-neutral-950">
          <div className="pb-10 h-full max-xl:ml-2 z-0 sticky"> <Outlet/> </div>
        </div>

      </div>
    </div>
  )
}

export default App
