import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Loading from "../Components/Loading/Loading";


const Main = () => {
    return (
        <div>
            <Loading/>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;