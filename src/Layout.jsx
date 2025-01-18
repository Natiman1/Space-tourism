import NavBar from "./components/NavBar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout