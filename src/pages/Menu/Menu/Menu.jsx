import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import"./Menu.css"


const Menu = () => {

    

    const [menu]=useMenu();
    const apple=menu.filter(item=>item.category === 'Apple');
    const orange=menu.filter(item=>item.category === 'Orange');
    const dates=menu.filter(item=>item.category === 'Dates');
    const grapes=menu.filter(item=>item.category === 'Grapes');
    const pomegranate=menu.filter(item=>item.category === 'Pomegranate');
    const redGrapes=menu.filter(item=>item.category === 'Red Grapes');
    const offered=menu.filter(item=>item.category === 'offered');

    return (
        <div>
            <div id="bgImageHome" className="hero min-h-screen mb-10" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-5xl font-bold text-white">OUR MENU FRUITS</h1>
                        <p className="mb-1 text-white font-semibold">Taste Temptations. Palate Pleasers
                        </p>
                        <p className="mb-1 text-white font-semibold">Culinary Craft. Epicurean Eats</p>
                        <p className="mb-4 text-white font-semibold">Tasty Bites. Flavor Fusion<p />

                        </p>
                        <button className="btn bg-rose-500 text-white">Get Started</button>
                    </div>
                </div>
            </div>
            <SectionTitle
            subHeading={"Don't Miss"}
            heading={"Today's Offer"}
            ></SectionTitle>
            
            <MenuCategory items={offered}></MenuCategory>

            <div id="bgImage1" className="hero h-[400px] mb-10" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-5xl font-bold text-white">APPLE FRUITS</h1>
                        <p className="mb-1 text-white  ">Apple, (Malus domestica), domesticated tree and fruit of the rose family (Rosaceae), one of the most widely cultivated tree fruits. Apples are predominantly grown for sale as fresh fruit, though apples are also used commercially for vinegar, juice, jelly, applesauce, and apple butter and are canned as pie stock.
                        </p>
                        

                       
                        <button className="btn bg-rose-500 text-white">OverViews</button>
                    </div>
                </div>
            </div>
           
            <MenuCategory items={apple}></MenuCategory>

            <div id="bgImage0" className="hero h-[400px] mb-10" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-5xl font-bold text-white">Red Grapes FRUITS</h1>
                        <p className="mb-1 text-white  ">Red seedless grapes range from light red to deep purple-red, depending on variety. They have round or oblong, medium-sized berries and are crisp, sweet and juicy, sometimes with a hint of tartness.
                        </p>
                        

                       
                        <button className="btn bg-rose-500 text-white">OverViews</button>
                    </div>
                </div>
            </div>
           
            <MenuCategory items={redGrapes}></MenuCategory>

            <div id="bgImage2" className="hero h-[400px] mb-10" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-5xl font-bold text-white">Orange FRUITS</h1>
                        <p className="mb-1 text-white  ">Oranges are citrus fruits with fragrant, leathery skin and juicy flesh. The most common types are the sweet (or common) orange, the sour (or Seville) orange, and the mandarin orange. The sweet orange is the most widely grown citrus fruit in the world.
                        </p>
                        

                       
                        <button className="btn bg-rose-500 text-white">OverViews</button>
                    </div>
                </div>
            </div>
            
            <MenuCategory items={orange}></MenuCategory>

            <div id="bgImage3" className="hero h-[400px] mb-10" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-5xl font-bold text-white">Dates FRUITS</h1>
                        <p className="mb-1 text-white  ">They are high in several nutrients, fiber, and antioxidants, all of which may provide health benefits ranging from improved digestion to a reduced risk of disease. There are several ways to add dates to your diet. One popular way to eat them is as a natural sweetener in various dishes. They also make a great snack
                        </p>
                        

                       
                        <button className="btn bg-rose-500 text-white">OverViews</button>
                    </div>
                </div>
            </div>
            
            <MenuCategory items={dates}></MenuCategory>
            
            <div id="bgImage4" className="hero h-[400px] mb-10" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-5xl font-bold text-white">Grapes</h1>
                        <p className="mb-1 text-white  ">A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes are a non-climacteric type of fruit, generally occurring in clusters. The cultivation of grapes began perhaps 8,000 years ago, and the fruit has been used as human food over history.
                        </p>
                        

                       
                        <button className="btn bg-rose-500 text-white">OverViews</button>
                    </div>
                </div>
            </div>
           
            <MenuCategory items={grapes}></MenuCategory>

            <div id="bgImage5" className="hero h-[400px] mb-10" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-5xl font-bold text-white">Pomegranate </h1>
                        <p className="mb-1 text-white  ">The pomegranate usually has a thick reddish skin but can range from yellow to purple and can have around 600 seeds. Each seed is surrounded by a sweet edible pulp called aril, and can range in color from white to deep red or purple. The seeds are embedded in a white, spongy, bitter pulp.
                        </p>
                        

                       
                        <button className="btn bg-rose-500 text-white">OverViews</button>
                    </div>
                </div>
            </div>
           
            <MenuCategory items={pomegranate}></MenuCategory>

          
            
            
            
        </div>
    );
};

export default Menu;