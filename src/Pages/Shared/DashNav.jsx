import { Link } from "react-router-dom";


const DashNav = () => {
    return (
        <div className="  bg-gray-600 p-4">
            <div className=" flex  justify-center items-center">
                <ul className="space-x-5 flex  justify-center items-center text-white">
                    <Link to={'/'}><li className="btn-ghost cursor-pointer  p-2 rounded-lg">Home</li></Link>
                    <Link to={'/dashboard/postTask'}><li className="btn-ghost cursor-pointer  p-2 rounded-lg">Post A TasK</li></Link>
                    <Link to={'/dashboard/alltask'}><li className="btn-ghost cursor-pointer p-2 rounded-lg">All Task</li></Link>
                </ul>
            </div>
        </div>
    );
};

export default DashNav;