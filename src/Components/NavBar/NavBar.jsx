import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop === 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`${isScrolled ? 'bg-transparent' : 'bg-[#1ABC9C]'} sticky top-0 z-50 transition-colors duration-300 ease-in-out`}>
            <div className="navbar w-full md:w-10/12 mx-auto relative">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={1} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
                                </svg>
                            )}
                        </div>
                        {isMenuOpen && (
                            <ul className="space-y-10 menu menu-sm text-[#fff] dropdown-content mt-3 z-[1] p-4 shadow bg-[#1ABC9C] rounded-box w-52 h-72 absolute top-full left-0 right-0 mx-auto">
                                <li><a href='/' onClick={toggleMenu}>Home</a></li>
                                <li><a href='/about' onClick={toggleMenu}>About</a></li>
                                <li><a href='/login' onClick={toggleMenu}>Login</a></li>
                                <li><a href='/register' onClick={toggleMenu}>Affiliate Register</a></li>
                            </ul>
                        )}
                    </div>
                    <a href="/" className="text-2xl font-bold text-white">ProfitPulsar</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu text-white font-semibold text-md menu-horizontal px-1">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/login'>Login</a></li>
                        <li><a href='/register'>Affiliate Register</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
