import SubBanner from "../../ReUseableComponent/SubBanner/SubBanner";
import About from "../../Components/About/About.jsx"
import Offers from "../../Components/Offers/Offers.jsx";
import Partner from "../../Components/Partner/Partner.jsx";
import Subscribe from "../../Components/Subscribe/Subscribe.jsx"
const AboutPage = () => {
    return (
        <div>
            <SubBanner title={"About US"}/>
            <About/>
            <Offers/>
            <Partner/>
            <Subscribe/>
        </div>
    );
};

export default AboutPage;