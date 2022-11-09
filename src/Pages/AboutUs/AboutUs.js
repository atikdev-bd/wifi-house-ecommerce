import React from 'react';
import img from '../../Assets/img/Lovepik_com-500678624-mobile-phone-intelligent-wifi-background (1).jpg'
import img2 from  '../../Assets/img/NicePng_internet-globe-png_4139394.png'

const AboutUs = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
            <div className='relative w-1/2'>
                <img src={img} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                <img src={img2}  alt="" className="absolute right-5 top-1/2 w-3/5 border-8 border-rose-300  rounded-lg bg-slate-700 shadow-2xl" />
            </div>
            <div className='w-1/2'>
                <p className="text-2xl font-bold text-orange-600">About Us</p>
                <h1 className="my-5 text-5xl font-bold">
                Expertise of our staff in this profession</h1>
                <p className="py-6">We always try our best to serve our customers properly and if there is any mistake you can complain to our support. </p>
                <p className="py-6">We try our best to ensure that there are no mistakes and provide the right service that makes our customers more aware of coming to us. </p>
                <button className="btn btn-primary">Get More Info</button>
            </div>
        </div>
    </div>
    );
};

export default AboutUs;