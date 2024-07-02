import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

const Payment = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    
    const handlePayment = () => {
       
                Swal.fire({
                    title: "Your Payment Successfully",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                
    }
    return (
        <>
            <div>
                <h1 className="text-center text-5xl font-bold text-white-500 mb-5 ">Payment</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="mx-auto space-y-3 text-black">
                    <input type="text" placeholder="Name" className="input input-bordered w-full "required  />
                    <input type="email" placeholder="Email" className="input input-bordered w-full "required  />
                    <input type="number" placeholder="bkash/nogod Number" className="input input-bordered w-full "required  />
                    <input type="date" placeholder="date" className="input input-bordered w-full "required  />

                </div>
                <div className=" mx-auto space-y-3 text-black">
                    <input type="text" placeholder="District" className="input input-bordered w-full "required  />
                    <input type="text" placeholder="Address" className="input input-bordered w-full "required  />
                    <input type="number" placeholder="Zip Cope" className="input input-bordered w-full "required  />
                    <input type="" value={totalPrice} className="input input-bordered w-full "required  />

                </div>
            </div>
            <div className="text-center mx-auto mt-10">
                <button onClick={()=>handlePayment ()}
                    className="btn btn-outline bg-rose-500 text-white border-0  ">Done</button>
            </div>

        </>
    );
};

export default Payment;