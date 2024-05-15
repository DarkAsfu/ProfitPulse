import ScrollToTop from "../ScrollToTop/ScrollToTop";

const RegisterForm = () => {
    return (
    <>
        <ScrollToTop/>
        <div className="md:w-4/12 mx-auto py-20">
            <form className="card-body">
                <p className="text-2xl text-[#1abc9c] mb-3 font-bold uppercase">Member <span className="text-black">Register</span></p>
                <div className="divider w-14"></div>
                <div className="form-control">
                    <input type="text" placeholder="name" className="input input-bordered mb-5" required />
                </div>
                <div className="form-control">
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control mt-5">
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <p>Have an account? <a href="/login" className="text-[#1abc9c]">Login</a></p>
                <div className="mt-6 flex gap-4">
                    <button className="btn bg-[#1abc9c] text-white px-20 py-3">Register</button>

                </div>
            </form>
        </div>
    </>
    );
};

export default RegisterForm;