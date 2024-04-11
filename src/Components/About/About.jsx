const About = () => {
    return (
        <div className="w-10/12 mx-auto md:grid grid-cols-2 items-center py-10">
            <div className="order-2">
                <img src="https://i.ibb.co/1JPTytP/about.png" alt="" />
            </div>
            <div className=" mt-4">
                <h3 className="text-2xl md:text-3xl font-bold">Who We Are?</h3>
                <p className="text-[17px] mt-3">We are the best converting affiliate network of the industry!</p>
                <p className="text-[17px]">DMSAffiliates is a leading affiliate network. We always focus on onboarding the best converting, newest and highest paying offers within the industry. We are also known for our excellent support. The owner of DMSAffiliates used to be an affiliate for over 4 years. We will personally help you improve your conversion rate!</p>
                <h4 className="text-xl font-bold text-stone-600 mt-3">Our Verticals</h4>
                <p>We are always expanding our network with new verticals, currently we have offers within the following verticals: VOD (Sports/Movie/Ebook), Sweepstakes, Email-Submits (SOI/DOI), Nutra, VPN, Biz Opp, Insurance and Finance</p>
            </div>
        </div>
    );
};

export default About;