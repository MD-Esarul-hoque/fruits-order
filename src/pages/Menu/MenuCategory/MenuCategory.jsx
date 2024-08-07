
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items }) => {
    return (
        <div>
            
            <div className="grid md:grid-cols-2 gap-5 mt-10 mb-20 mx-28">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

        </div>
    );
};

export default MenuCategory;