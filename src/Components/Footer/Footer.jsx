const Footer = () => {
    return (
        <div className="bg-[#001D29]">
            <footer className="footer w-10/12 mx-auto py-20 text-gray-300">
                <aside>
                    <h1 className="text-4xl font-bold">Profit<span className="text-[#1ABC9C]">Pulse</span></h1>
                    <p className="md:w-96 text-[#999999]">ProfitPulse is a leading affiliate network, with the highest paying offers of the entire industry. We strive for the best CR for our publishers and the best ROI for our advertisers</p>
                    <p className="text-[#999999]">
                        Copyright © 2024 ProfitPulse.
                        All Rights Reserved.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;