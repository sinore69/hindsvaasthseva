import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";
import TopBarSmall from "../components/TopBarSmall";
function Layout() {
  return(
    <>
    <TopBar/>
    <TopBarSmall/>
    <Outlet/>
    </>
  )
}

export default Layout;