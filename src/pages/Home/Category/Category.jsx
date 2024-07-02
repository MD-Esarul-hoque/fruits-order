import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/reels/01.jpg';
import slide2 from '../../../assets/reels/02.jpg';
import slide3 from '../../../assets/reels/03.jpg';
import slide4 from '../../../assets/reels/04.jpg';
import slide5 from '../../../assets/reels/05.jpg';
import slide6 from '../../../assets/reels/06.jpg';
import slide7 from '../../../assets/reels/07.jpg';
import slide8 from '../../../assets/reels/08.jpg';
import slide9 from '../../../assets/reels/09.jpg';
import slide10 from '../../../assets/reels/10.jpg';
import slide12 from '../../../assets/reels/12.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <>
            <section>

                <SectionTitle subHeading={"Online Order : 24 Hours"} heading={"Fruits Reels "}></SectionTitle>
                
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-20"
                >
                    <SwiperSlide>
                        <img src={slide1} alt=''className='h-[450px] rounded-xl' />
                        <h3 className='text-2xl  text-left ml-3 -mt-[450px] text-white  drop-shadow-lg'>Apple</h3>
                        
                        </SwiperSlide>
                    <SwiperSlide><img src={slide2} alt='' className='h-[450px] rounded-xl'/>
                    <h3 className='text-2xl  text-left ml-3 -mt-[450px] text-white  drop-shadow-lg'>Dates</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                    <img src={slide3} alt=''className='h-[450px] rounded-xl' />
                    <h3 className='text-2xl  text-left ml-3 -mt-[450px] text-white  drop-shadow-lg'>Grapes</h3>
                    </SwiperSlide>
                    <SwiperSlide><img src={slide4} alt='' className='h-[450px] rounded-xl' />
                    <h3 className='text-2xl  text-left ml-3 -mt-[450px] text-white  drop-shadow-lg'>Red Grapes</h3>
                    </SwiperSlide>
                    <SwiperSlide><img src={slide5} alt='' className='h-[450px] rounded-xl'/>
                    <h3 className='text-2xl  text-left ml-3 -mt-[450px] text-white  drop-shadow-lg'>Pomegranate</h3>
                    </SwiperSlide>
                    <SwiperSlide><img src={slide6} alt='' className='h-[450px] rounded-xl'/>
                    <h3 className='text-2xl  text-left ml-3 -mt-[450px] text-white  drop-shadow-lg'>Orange</h3>
                    </SwiperSlide>
                    <SwiperSlide><img src={slide7} alt='' className='h-[450px] rounded-xl'/>
                    <h3 className='text-2xl  text-left ml-3 -mt-[450px] text-white  drop-shadow-lg'>Pomegranate</h3>
                    </SwiperSlide>
                    <SwiperSlide><img src={slide8} alt=''className='h-[450px] rounded-xl' />
                    <h3 className='text-2xl  text-left ml-3 -mt-[450px] text-white  drop-shadow-lg'>Orange</h3>
                    </SwiperSlide>
                    <SwiperSlide><img src={slide9} alt=''className='h-[450px] rounded-xl' />
                    <h3 className='text-2xl  text-left ml-3 -mt-[450px] text-white  drop-shadow-lg'>Red Grapes</h3>
                    </SwiperSlide>
                    <SwiperSlide><img src={slide10} alt=''className='h-[450px] rounded-xl' />
                    <h3 className='text-2xl  text-left ml-3 -mt-[450px] text-white  drop-shadow-lg'>Dates</h3>
                    </SwiperSlide>
                    
                    <SwiperSlide><img src={slide12} alt=''className='h-[450px] rounded-xl' />
                    
                    </SwiperSlide>
                    
                </Swiper>
            </section>
        </>
    );
};

export default Category;