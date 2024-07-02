import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShare, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex my-10">
            <div className="w-64 min-h-screen font-semibold text-white bg-gray-900 rounded-left text-white font-semibold">
                <ul className="menu ">
                    <li>
                        <a> <FaHome></FaHome>User Home</a>
                    </li>

                    <li>
                        <a> <FaCalendar></FaCalendar>Reservation</a>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart>My Cart</NavLink>
                    </li>
                    <li>
                        <a> <FaList></FaList>My Booking</a>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment"> <FaWallet></FaWallet>Payment</NavLink>
                    </li>
                    <li>
                        <a> <FaAd></FaAd>Add  Review</a>
                    </li>
                    <div className="divider divider-error"></div>
                    <li>
                        <NavLink to="/"> <FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu"> <FaShare></FaShare>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Order"> <FaSearch></FaSearch>Order Fruits</NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1 p-8 bg-gray-600 text-white font-semibold ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;