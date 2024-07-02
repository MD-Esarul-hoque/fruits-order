import img1 from '../../../assets/icons/logo.png';
import img2 from '../../../assets/icons/twitter 1.svg';
import img3 from '../../../assets/icons/facebook 1.svg';
import img4 from '../../../assets/icons/linkedin 1.svg';
import img5 from '../../../assets/icons/instagram 1.svg';
import img6 from '../../../assets/icons/apple 1.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer footer-center p-10 bg-black">
                <div className="items-center">
                    <a className="text-white md:text-4xl text-2xl flex gap-2 font-bold"><img src={img1} className="h-10 w-10" alt="" /> Fruits Order</a>
                </div >
                <div className="flex flex-wrap gap-10 text-white ">
                    <a className="">Home</a>
                    <a className="">About us</a>
                    <a className="">Shop</a>
                    <a className="">All Fruits</a>
                    <a className="ml-16 md:ml-0">Support</a>
                    <a className="">MyAccount</a>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-10 text-white">
                        <img src={img2}  alt="" className="h-8 w-8"/>
                        <img src={img3}  alt="" className="h-8 w-8"/>
                        <img src={img4}  alt="" className="h-8 w-8"/>
                        <img src={img5}  alt="" className="h-8 w-8"/>
                        <img src={img6}  alt="" className="h-8 w-8"/>
                     
                       
                    </div>
                </div>

            </div>
            <div className=" footer-center p-4 bg-rose-500">
                <aside>
                    <p className="text-white ">Copyright © 2024 - All right reserved by Fruit Industries Ltd</p>
                </aside>
            </div>
        </footer>
        );
};
 export default Footer;