import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div> 
            <div className=" p-24  grid grid-cols-1  md:grid-cols-2 gap-10 items-center">
                <div className="text-center space-y-3">
                    <h2 className="text-7xl">404</h2>
                    <p className="text-3xl mb-8">Page Not Found</p>
                    <Link to="/"><button className="btn  bg-rose-500 text-white normal-case" >Go Back</button></Link>
                    

                </div>
                <div>
                    <img src="https://i.ibb.co/D5vZMYT/404.jpg" alt="" className="rounded-md shadow-md" />
                </div>

            </div>
            
        </div>
    );
};

export default ErrorPage;