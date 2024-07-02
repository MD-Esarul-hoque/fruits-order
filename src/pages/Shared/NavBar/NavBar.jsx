import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthPovider";

import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../../hooks/useCart";


const NavBar = () => {

   
    const { user, logOut } = useContext(AuthContext);
    const [cart]=useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));

    }

    const navOptions =
        <>
            <li><a ><NavLink to="/" className="text-lg font-normal">Home</NavLink></a></li>
            <li><a ><NavLink to="/menu" className="text-lg font-normal">Our Menu</NavLink></a></li>
            <li><a ><NavLink to="/Order" className="text-lg font-normal">Order food</NavLink></a></li>
            <li><Link to="/dashboard/cart">
                <button className=" flex flex-cols gap-2 bg-opacity-0 border-none mt-0 items-center">
                    <AiOutlineShoppingCart className="text-white text-2xl"></AiOutlineShoppingCart>
                    <div className="badge badge-secondary p-4 font-semibold ">+{cart.length}</div>
                </button>
            </Link></li>

        </>


    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black  text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-gost lg:hidden mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="font-semibold text-3xl text-white">Fruits Order</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <><a onClick={handleLogOut} className="btn btn-outline bg-gray-200   "><Link to="/signup" >SignUp</Link></a></> : <><a className="btn btn-outline bg-gray-200   "><Link to="/login" >Login</Link></a></>
                    }


                </div>
            </div>


        </>
    );
};

export default NavBar;