import './Reputation.css'
import { IoMdCheckmark } from "react-icons/io";
import { MdRssFeed } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
const Reputation = () => {
    return (
        <div className="repu-banner py-20">
            <div className='w-10/12 mx-auto'>
                <div className="text-center">
                    <h1 className="text-2xl text-white md:text-3xl font-bold">OUR <span className='text-[#1abc9c]'>REPUTATION</span></h1>
                    <div className="divider divider-accent w-20 mx-auto"></div>
                    <p className="md:text-md text-white font-semibold md:px-72">We are a highly reputable affiliate network. ProfitPulsar was founded in early 2016 and has grown from 0 to over 20.000 publishers within 5 years.</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-4 w-10/12 mx-auto mt-10'>
                    <div >
                        <IoMdCheckmark className='text-7xl mx-auto text-white my-3' />
                        <h4 className='text-[#1abc9c] text-center pb-2 text-2xl md:text-4xl font-bold'>2000+</h4>
                        <p className='text-white text-sm md:text-md text-center font-bold'>Payment Done</p>
                    </div>
                    <div>
                        <MdRssFeed className='text-7xl mx-auto text-white my-3' />
                        <h4 className='text-[#1abc9c] text-center pb-2 text-2xl md:text-4xl font-bold'>1000+</h4>
                        <p className='text-white text-sm md:text-md text-center font-bold'>Live offer</p>
                    </div>
                    <div>
                        <FaDollarSign className='text-7xl mx-auto text-white my-3' />
                        <h4 className='text-[#1abc9c] text-center pb-2 text-2xl md:text-4xl font-bold'>300000+</h4>
                        <p className='text-white text-sm md:text-md text-center font-bold'>PAID OUT LAST MONTH</p>
                    </div>
                    <div>
                        <FaUsers className='text-7xl mx-auto text-white my-3' />
                        <h4 className='text-[#1abc9c] text-center pb-2 text-2xl md:text-4xl font-bold'>220000+</h4>
                        <p className='text-white text-sm md:text-md text-center font-bold'>HAPPY AFFILIATES</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reputation;