import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Reputation from "../../Components/Reputaion/Reputation";
import Services from "../../Components/Services/Services";
import Subscribe from "../../Components/Subscribe/Subscribe";

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Reputation/>
            <Subscribe/>
        </div>
    );
};

export default Home;