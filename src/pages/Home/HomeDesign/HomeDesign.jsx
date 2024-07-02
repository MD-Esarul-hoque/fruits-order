import img1 from '../../../assets/images/team1.png';
import img2 from '../../../assets/images/whychoose1.png';
import img3 from '../../../assets/icons-svg/fruit 1.svg';
import img4 from '../../../assets/icons-svg/gift-box 1.svg';
import img5 from '../../../assets/icons-svg/group 1.svg';
import img6 from '../../../assets/icons-svg/ice-cream 1.svg';
import img7 from '../../../assets/icons-svg/like 1.svg';
import img8 from '../../../assets/icons-svg/love 1.svg';


const HomeDesign = () => {
    return (
        <div>
            <div>
                <img src={img1} alt="" className='mx-auto my-10' />
            </div>
            <section className="md:mb-20 md:mx-28 mx-5 my-6">
                <div className="text-center">
                    <h2 className="md:text-5xl text-3xl font-bold">Why Choose Us</h2>
                    <p className="font-normal md:text-base my-5 text-base w-72 mx-auto md:w-[55%]  text-gray-500">Contrary to popular belief, is not simply random text. It has roots in a piece of classNameical
                        Latin literature from 45 BC,  making it over 2000 years old.</p>

                </div>
                <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-3">
                    <div className=" md:hidden">
                        <img src={img2} alt="" />
                    </div>
                    <div className=" ">
                        <div className="md:flex gap-6 items-center mb-5 text-center mx-auto md:text-left md:mx-0">
                            <div className="bg-gray-300 rounded-full p-2 my-3 w-10 mx-auto md:mx-0 ">
                                <img src={img5} alt=""  />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold  border-b-2 mb-1  border-b-2">Dedicated Team
                                </h2>
                               
                                    <p className="text-xs mt-3 text-gray-500">Professional employees are there for you to pick
                                        </p><p className="text-xs mt-3 text-gray-500">  the most amazing and fresh fruits.</p>
                            </div>
                        </div>
                        <div className="md:flex gap-6 items-center mb-5 text-center mx-auto md:text-left md:mx-0">
                            <div className="bg-gray-300 rounded-full p-2 my-3 w-10 mx-auto md:mx-0 ">
                            <img src={img8} alt=""  />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold  border-b-2 mb-1 ">Fresh is Best
                                </h2>
                                <p className="text-xs mt-3 text-gray-500">Professional employees are there for you to pick
                                </p><p className="text-xs mt-3 text-gray-500">  the most amazing and fresh fruits.</p>
                            </div>
                        </div>
                        <div className="md:flex gap-6 items-center mb-5 text-center mx-auto md:text-left md:mx-0">
                            <div className="bg-gray-300 rounded-full p-2 my-3 w-10 mx-auto md:mx-0 ">
                            <img src={img4} alt=""  />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold  border-b-2 mb-1 ">Gift Certificates
                                </h2>
                                <p className="text-xs mt-3 text-gray-500">Professional employees are there for you to pick
                                </p><p className="text-xs mt-3 text-gray-500">  the most amazing and fresh fruits.</p>
                            </div>
                        </div>

                    </div>

                    <div className="hidden md:block">
                    <img src={img2} alt=""  />
                    </div>
                    <div className="md:items-end md:text-right  ">
                        <div className="md:flex md:flex-row-reverse gap-6 items-center mb-5 text-center mx-auto md:text-right ">
                            <div className="bg-gray-300 rounded-full p-2 my-3 w-10 mx-auto md:mx-0 ">
                            <img src={img3} alt=""  />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold  border-b-2 mb-1 ">Integrated Supplier
                                </h2>
                                <p className="text-xs mt-3 text-gray-500">Professional employees are there for you to pick
                                        </p><p className="text-xs mt-3 text-gray-500">  the most amazing and fresh fruits.</p>
                            </div>
                        </div>
                        <div className="md:flex md:flex-row-reverse gap-6 items-center mb-5 text-center mx-auto md:text-right m">
                            <div className="bg-gray-300 rounded-full p-2 my-3 w-10 mx-auto md:mx-0 ">
                            <img src={img6} alt=""  />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold  border-b-2 mb-1 ">Sustainable Practice
                                </h2>
                                <p className="text-xs mt-3 text-gray-500">Professional employees are there for you to pick
                                        </p><p className="text-xs mt-3 text-gray-500">  the most amazing and fresh fruits.</p>
                            </div>
                        </div>
                        <div className="md:flex  md:flex-row-reverse gap-6 items-center mb-5 text-center mx-auto md:text-right ">
                            <div className="bg-gray-300 rounded-full p-2 my-3 w-10 mx-auto md:mx-0 ">
                            <img src={img7} alt=""  />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold  border-b-2 mb-1 ">The Benefits Only
                                </h2>
                                <p className="text-xs mt-3 text-gray-500">Professional employees are there for you to pick
                                        </p><p className="text-xs mt-3 text-gray-500">  the most amazing and fresh fruits.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomeDesign;