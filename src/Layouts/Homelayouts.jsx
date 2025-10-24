import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import Banner from '../component/Banner';
import Card from '../component/card';
const Homelayout = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div className='container mx-auto space-y-15 py-4'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
            <div className=' flex justify-center'>
                <div className='grid bg-gray-100 md:grid-cols-2 lg:grid-cols-3 gap-7'>  {
                    data.map((game) =>
                        <Card key={game.id} game={game}></Card>
                    )
                }
                </div>
            </div>
        </div>
    );
};
export default Homelayout;