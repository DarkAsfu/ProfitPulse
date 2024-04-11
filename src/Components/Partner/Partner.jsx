const Partner = () => {
    return (
        <div className="w-10/12 mx-auto py-20">
            <h1 className="text-2xl md:text-3xl font-bold uppercase text-center">Some Of Our<span className='text-[#1abc9c]'> Partner</span></h1>
            <div className="divider divider-accent w-24 mx-auto"></div>
            <div className="grid grid-cols-2 md:grid-cols-4">
                <img src="https://i.ibb.co/Q8Vtw3n/itrader.jpg" alt="" />
                <img src="https://i.ibb.co/DMPBzxN/leovegas.jpg" alt="" />
                <img src="https://i.ibb.co/fQjwKVP/quasar.jpg" alt="" />
                <img src="https://i.ibb.co/zHZTM2R/tradorax.jpg" alt="" />
            </div>
        </div>
    );
};

export default Partner;