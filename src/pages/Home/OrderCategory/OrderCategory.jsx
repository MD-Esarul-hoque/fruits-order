import OrderPage from "./ordedPage";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";



const OrderCategory = () => {
    

    const [menu] = useMenu();
    
    const order = menu.filter(item => item.category === 'order');
    return (
        <div>
            <SectionTitle heading={"From Our Order "} subHeading={"Order Category"}>

            </SectionTitle>
            <div className='grid md:grid-cols-3 gap-10 mt-16'>
                {
                    order.map(item => <OrderPage key={item._id} item={item} ></OrderPage>)
                }
                
            </div>

        </div>
    );
};

export default OrderCategory;
