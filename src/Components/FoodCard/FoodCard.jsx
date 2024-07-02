import Swal from "sweetalert2";

import {AuthContext} from "../../providers/AuthPovider"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";



const FoodCard = ({item}) => {
    const {name,image,price,recipe,_id}=item;
    const {user}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();
    const axiosSecure=useAxiosSecure();
    const [,refetch]=useCart();
  

    const handleAddToCart=()=>{
        
        if(user && user.email){
            const cartItem={
                menuId:_id,
                email:user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts',cartItem)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                        refetch();
                    }
                })
        }
        else{
            Swal.fire({
                title: "You are not Login?",
                text: "Please login to add to the Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state:{from:location}});
                 
                }
              });
        }
        
        
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 h-[500px] shadow-xl ">
                <figure>
                    <img
                        src={image}
                        alt="Shoes"className="h-64 w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title ">{name}</h2>
                    <p className="text-left">{recipe}</p>
                    <p className="text-left font-bold ">Amount :<span className="text-rose-500"> 1 Kg</span></p>

                    <div className="card-actions justify-between items-center">
                        <div>
                            <p className="text-yellow-600 font-bold texl-xl"> Price : $ {price}</p>
                        </div>
                        <div>
                        <button onClick={handleAddToCart} 
                        className="btn btn-outline bg-gray-200 border-0 border-b-4 border-orange-400 ">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;