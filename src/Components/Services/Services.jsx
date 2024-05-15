import { FaLaptop } from "react-icons/fa6";
import { IoBarChartSharp, IoSettingsOutline } from "react-icons/io5";
import { FaImages } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GrDiamond } from "react-icons/gr";
const Services = () => {
    return (
        <div className="bg-[#F9F9F9] py-10">
            <div className="w-full mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl font-bold">OUR <span className='text-[#1abc9c]'>SERVICES</span></h1>
                    <div className="divider divider-accent w-20 mx-auto"></div>
                    <p className="md:text-md text-gray-600 font-semibold md:px-72">As an affiliate network, we strive to provide outstanding support. We listed a few of our features below, do you want to experience all of our top features? Register now</p>
                </div>
                <div className="grid md:grid-cols-3 align-middle items-center">
                    <div className="">
                        <ul className="timeline timeline-vertical text-right md:left-40 ml-20">
                            <li className="">
                                <div className="timeline-start mr-4">
                                <br /><br /><br />
                                    <h3 className="text-xl font-semibold  text-[#1abc9c]">Highest Converting</h3>
                                    <p className="mt-2">Our network has the highest converting offers and landing pages of the industry</p>
                                    <br /><br /><br />
                                </div>
                                
                                <div className="timeline-middle bg-[#1ABC9C] text-white p-3 text-4xl rounded-full">
                                    <FaLaptop />
                                </div>
                                <hr />
                            </li>
                            <li>
                            <hr />
                                <div className="timeline-start mr-4">
                                    <h3 className="text-xl font-semibold  text-[#1abc9c]">Highest Paying</h3>
                                    <p className="mt-2">We make sure you are getting the highest possible EPC</p>
                                    <br /><br /><br />
                                </div>
                                <div className="timeline-middle bg-[#1ABC9C] text-white p-3 text-4xl rounded-full">
                                    <IoSettingsOutline />
                                </div>
                                <hr />
                            </li>
                            <li>
                            <hr />
                                <div className="timeline-start mr-4 mt-4">
                                    <h3 className="text-xl font-semibold  text-[#1abc9c]">Best Design</h3>
                                    <p className="mt-2">We thrive to be as innovative as possible offer wise.</p>
                                </div>
                                <div className="timeline-middle bg-[#1ABC9C] text-white p-3 text-4xl rounded-full">
                                    <FaImages />
                                </div>
                              
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <img src="https://i.ibb.co/n3rQRPN/Ivory-Green-Minimalist-Phone-Mockup-Mood-Board-Beauty-Pinterest-Pin-removebg-preview.png" alt="" />
                    </div>
                    <div className="">
                        <ul className="mr-20 timeline timeline-vertical md:right-40">
                            <li>
                                <div className="timeline-middle bg-[#1ABC9C] text-white p-3 text-4xl rounded-full">
                                    <FaUsers />
                                </div>
                                <div className="timeline-end ml-4">
                                    <h3 className="text-xl font-semibold  text-[#1abc9c]">Real Time Reporting</h3>
                                    <p className="mt-2">Our dashboard is 100% realtime, we made sure you get to see your earnings realtime</p></div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle bg-[#1ABC9C] text-white p-3 text-4xl rounded-full">
                                    <GrDiamond />
                                </div>
                                <div className="timeline-end ml-4 mt-20">
                                    <h3 className="text-xl font-semibold  text-[#1abc9c]">24/7 Support</h3>
                                    <p className="mt-2">There will always be someone available who will answer your questions and/or give you personal assistance</p>
                                    <br /><br />
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle bg-[#1ABC9C] text-white p-3 text-4xl rounded-full">
                                    <IoBarChartSharp />
                                </div>
                                
                                <div className="timeline-end ml-4 mt-4">
                                    <h3 className="text-xl font-semibold  text-[#1abc9c]">Mobile Responsive</h3>
                                    <p className="mt-2">Our landing pages are 100% responsive.</p>
                                    <br />
                                </div>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;