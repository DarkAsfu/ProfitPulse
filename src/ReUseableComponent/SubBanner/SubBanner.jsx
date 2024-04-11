import './SubBanner.css'
const SubBanner = ({title}) => {
    return (
        <div className="sub-banner -mt-[70px]">
            <h1 className='text-5xl font-bold text-white text-center pt-[50%] md:pt-[10%]'>{title}</h1>
            <div className="divider divider-accent w-16 mx-auto"></div>
        </div>
    );
};

export default SubBanner;