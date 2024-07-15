import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://fruits-server-lnshx3gf1-mdesarulhoques-projects.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])


    return (
        <section className="mb-10 mx-32">
            <SectionTitle subHeading={"What Our Client Say"}
                heading={"Testimonials"}
            >

            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">

                {
                    reviews.map(review => <SwiperSlide key={review._id} >
                        <div className="mx-24  mb-20 mt-10 flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180, }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="mt-5">{review.details}</p>
                            <h3 className="text-2xl text-ornage-400 mt-3 font-bold text-yellow-600">{review.name}</h3>
                        </div>


                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    );
};

export default Testimonials;