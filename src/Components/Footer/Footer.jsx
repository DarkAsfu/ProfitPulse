import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="bg-[#001D29]">
            <footer className="footer w-10/12 mx-auto py-20 text-gray-300">
                <aside>
                    <h1 className="text-4xl font-bold">Profit<span className="text-[#1ABC9C]">Pulsar</span></h1>
                    <p className="md:w-72 mt-6 text-[#999999]">Profitpulsar is a leading affiliate network, with the highest paying offers of the entire industry. We strive for the best CR for our publishers and the best ROI for our advertisers</p>
                    <p className="mt-6 text-[#999999]">
                        Copyright © 2024 Profitpulsar.
                        All Rights Reserved.
                    </p>
                </aside>
                <nav>
                    <h6 className="text-[20px] font-bold text-white border-b-4 pb-3 border-accent">SIGN UP</h6>
                    {/* <div className="divider divider-accent"></div> */}
                    <p className="w-64">What are you waiting for? Join our network and become one of our top earning affiliates now</p>
                    <Link to="register"><button className="text-[#999999] border border-[#999999] px-6 py-2 mt-3">Register</button></Link>
                </nav>
                <nav>
                <h6 className="text-[20px] font-bold text-white border-b-4 pb-3 border-accent uppercase">useful links</h6>
                    <Link to='/' className="link link-hover flex items-center mt-3 hover:text-accent"><IoIosArrowForward />Home</Link>
                    <Link to="/about" className="link link-hover flex items-center mt-3 hover:text-accent"><IoIosArrowForward />About</Link>
                    <a className="link link-hover flex items-center mt-3 hover:text-accent"><IoIosArrowForward /> Advertisers</a>
                    <a className="link link-hover flex items-center mt-3 hover:text-accent"><IoIosArrowForward />Publishers</a>
                    <a className="link link-hover flex items-center mt-3 hover:text-accent"><IoIosArrowForward /> Publisher Terms</a>
                    <a className="link link-hover flex items-center mt-3 hover:text-accent"><IoIosArrowForward /> Privacy Policy</a>
                    <a className="link link-hover flex items-center mt-3 hover:text-accent"><IoIosArrowForward /> FAQ</a>
                </nav>
                <nav>
                <h6 className="text-[20px] font-bold text-white border-b-4 pb-3 border-accent">WE ARE THE</h6>
                    <div className="grid grid-cols-2 gap-2">
                        <button className="text-[#999999] border border-[#999999] px-2 py-1 mt-1 rounded-lg text-[10px] hover:text-accent uppercase">Highest Paying</button>
                        <button className="text-[#999999] border border-[#999999] px-2 py-1 mt-1 rounded-lg text-[10px] hover:text-accent uppercase">Best Supporting</button>
                        <button className="text-[#999999] border border-[#999999] px-2 py-1 mt-1 rounded-lg text-[10px] hover:text-accent uppercase">Best Converting</button>
                        <button className="text-[#999999] border border-[#999999] px-2 py-1 mt-1 rounded-lg text-[10px] hover:text-accent uppercase">Fastest Paying</button>
                        <button className="text-[#999999] border border-[#999999] px-2 py-1 mt-1 rounded-lg text-[10px] hover:text-accent uppercase">Fastest Realtime Network</button>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;