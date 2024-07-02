import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import OrderCategory from "../OrderCategory/OrderCategory";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <OrderCategory></OrderCategory>
            <PopularMenu></PopularMenu>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;