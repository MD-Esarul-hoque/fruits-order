import "./Banner.css"

import img1 from '../../../assets/images/fruit1.jpg';
import img3 from '../../../assets/images/fruit3.jpeg';
import img4 from '../../../assets/images/fruit4.jpg';
import img5 from '../../../assets/images/fruit5.png';
import img6 from '../../../assets/images/fruit6.jpg';




const Banner = () => {
    return (
        <>
        <section >
        <div >
            
            <div className='mb-20 ' >
            <div>
            <div id="bgImage" className="hero min-h-screen " >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-2 text-3xl font-bold text-white">
                        Exotic tastes at your doorstep</h1>
                        <p className="mb-2 text-white">We supply highly quality organic products</p>
                        <button className="btn bg-rose-500 text-white">SHOP NOW</button>
                    </div>
                </div>
            </div>

        </div>

                
        
            </div>
            
           
          </div>
            
            <div className="hidden grid-cols-5  mx-40 bg-white py-5  absolute  -bottom-[80px]  md:grid  shadow-md ">
                <div className="text-center mx-auto px-5 ">
                    <img src={img1} alt=""  className="h-32 border-double border-4 border-rose-500 "/>
                    <p className="text-center text-sm font-medium mt-3">Red Grapes</p>
                </div>
            
                <div className="text-center mx-auto px-5">
                <img src={img3} alt=""  className="h-32 border-double border-4 border-rose-500 "/>
                    <p className="text-center text-sm font-medium mt-5">Dates</p>
                </div>
            
                <div className="text-center mx-auto px-5">
                <img src={img4} alt=""  className="h-32 border-double border-4 border-rose-500 "/>
                    <p className="text-center text-sm font-medium mt-4">Grapes</p>
                </div>
                <div className="text-center mx-auto px-5">
                <img src={img5} alt=""  className="h-32 border-double border-4 border-rose-500 "/>
                    <p className="text-center text-sm font-medium mt-3">Pomegranate</p>
                </div>
                <div className="text-center mx-auto px-5">
                <img src={img6} alt=""  className="h-32 border-double border-4 border-rose-500 "/>
                    <p className="text-center text-sm font-medium mt-3">Apple</p>
                </div>
                

            </div>
        </section>
        
        
        
        </>
      
           
            
            
      
    );
};

export default Banner;