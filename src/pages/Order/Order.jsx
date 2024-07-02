import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./Order.css"
import { useState } from 'react';
import HomeDesign from "../Home/HomeDesign/HomeDesign";
import AboutUs from "../Home/AboutUs/AboutUs";
import useMenu from '../../hooks/useMenu';
import FoodCard from '../../Components/FoodCard/FoodCard';


const Order = () => {
  
    
    
    const [tabIndex,setTabIndex]=useState(0)
    const [menu]=useMenu();
    const apple=menu.filter(item=>item.category === 'Apple');
    const orange=menu.filter(item=>item.category === 'Orange');
    const dates=menu.filter(item=>item.category === 'Dates');
    const grapes=menu.filter(item=>item.category === 'Grapes');
    const pomegranate=menu.filter(item=>item.category === 'Pomegranate');
    const redGrapes=menu.filter(item=>item.category === 'Red Grapes');
  

    return (
        <div>
            <div id="bgImage24" className="hero min-h-screen " >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-3 text-5xl font-bold text-white">ORDER FRUITS</h1>
                        <p className="mb-1 text-white font-semibold">Speedy Delivery, Guaranteed!
                        </p>
                        <p className="mb-1 text-white font-semibold">Your Packages, Our Priority</p>
                        <p className="mb-4 text-white font-semibold">Swift and Safe Deliveries<p />

                        </p>
                        <button className="btn bg-rose-500 text-white">Get Started</button>
                    </div>
                </div>
            </div>

            <div className='my-20 text-center'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Apple</Tab>
                    <Tab>Orange</Tab>
                    <Tab>Pomegranate</Tab>
                    <Tab>Dates</Tab>
                    <Tab>Grapes</Tab>
                    <Tab>Red Grapes</Tab>
                </TabList>
                <TabPanel>
                   <div className='grid md:grid-cols-3 gap-10 mt-16'>
                   {
                        apple.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10 mt-16'>
                   {
                        orange.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10 mt-16'>
                   {
                        pomegranate.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10 mt-16'>
                   {
                        dates.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10 mt-16'>
                   {
                        grapes.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                    }
                   </div>
                </TabPanel>
                <TabPanel>
                <div className='grid md:grid-cols-3 gap-10 mt-16'>
                   {
                        redGrapes.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                    }
                   </div>
                </TabPanel>
            </Tabs>
            </div>
            <div>
                <HomeDesign></HomeDesign>
                <AboutUs></AboutUs>
            </div>

        </div>
    );
};

export default Order;