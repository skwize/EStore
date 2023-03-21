import { Outlet } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'


function Root () {
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
}

export default Root