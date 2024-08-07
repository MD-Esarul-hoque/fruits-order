import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetch('https://fruits-server.vercel.app/menu')
        .then(res=>res.json())
        .then(data=>{
            const popularItems=data.filter(item=>item.category ==='popular');
            setMenu(popularItems)})

    },[])


    return (
        <section>
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}>

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-5 mt-10 mb-20 mx-28">
                {
                    menu.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;