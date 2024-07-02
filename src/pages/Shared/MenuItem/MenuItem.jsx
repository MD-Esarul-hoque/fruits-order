

const MenuItem = ({item}) => {
    const {name,image,price,recipe}=item;

    return (
        <div className="flex space-x-4">
            <img src={image} alt="" className="w-[70px] h-16 rounded-full border-2 border-rose-500 p-1"/>
            <div>
              <h3 className="uppercase font-bold ">{name} - - - - - - </h3>  
              <p>{recipe}</p> 
            </div>
            <p className="text-yellow-600"> ${price}</p>
            
        </div>
    );
};

export default MenuItem;
