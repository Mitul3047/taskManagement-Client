import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner.png'
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
    return (
        <div className='flex justify-evenly items-center bg-slate-300 h-screen'>
            <div>
                <h1 className='text-6xl text-black font-semibold'>
                    We Help To Manage <br />
                    Your Task Here
                </h1>
                <Link to={'/dashboard/postTask'}><button className='btn rounded-sm mt-10 bg-gray-600 text-white border-none'>Explore Us <FaArrowRight></FaArrowRight></button></Link>
            </div>
            <img className='w-64 shadow-sm' src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;