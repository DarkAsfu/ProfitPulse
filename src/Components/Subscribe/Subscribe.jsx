import { GrSend } from "react-icons/gr";
import { Link } from "react-router-dom";
const Subscribe = () => {
    return (
        <div className="bg-[#1abc9c] py-10">
            <div className="md:w-10/12 mx-auto md:flex justify-between px-3">
                <div className="text-white text-2xl md:text-4xl font-bold md:flex items-center gap-2">
                <GrSend className="text-4xl mb-3 md:text-7xl" />  WANT TO PARTNER WITH ProfitPulsar?
                </div>
                <div>
                    <Link to={'/register'} className="mt-4 btn btn-outline text-white rounded-none px-10">Register Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;