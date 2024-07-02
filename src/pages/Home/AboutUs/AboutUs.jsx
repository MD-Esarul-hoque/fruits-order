import img1 from '../../../assets/images/about-img.jpg';

const AboutUs = () => {
    return (
        <div>
            <section className="about_section layout_padding">
                <div className="container">
                    <div className="detail-box">
                        <div className="heading_container heading_center">
                            <h2 className='text-5xl font-bold text-center'>
                                About Us
                            </h2>
                        </div>
                        <p className='text-center mx-32 my-5 text-sm text-gray-500'>
                            Normal distribution of letters, as opposed to using Content here, content here, making it look like
                            readable English. Many desktop publishing packages and web page editors has a more-or-less normal
                            distribution of letters, as opposed to using Content here, content here, making it look like readable
                            English. Many desktop publishing packages and web page editors
                        </p>
                    </div>
                    <div className="col-md-9 mx-auto px-0 mb-20">
                        <div className="img-box">
                            <img src={img1} alt="" className='px-32'/>
                        </div>
                        
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;