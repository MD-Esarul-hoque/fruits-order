import { Link } from "react-router-dom";


const ordedPage = ({item}) => {
    const {name,image,recipe}=item;
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
                    <div className="card-actions justify-end">
                        
                      <Link to="/order">
                       <button className="btn btn-outline bg-gray-200 border-0 border-b-4 border-orange-400 ">Ordered</button>
                       </Link>
                        
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ordedPage;