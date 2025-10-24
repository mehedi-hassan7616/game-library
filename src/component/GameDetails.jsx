import React from 'react';
import { useLoaderData, useParams } from 'react-router';
const GameDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const gameDetails = data.find(game => game.id === id);
    const { title, coverPhoto, category, description, ratings, mb, } = gameDetails;
    console.log(gameDetails)
    return (
        <>
            <div className="container mx-auto">
                <figure>
                    <img src={coverPhoto} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">
                        title : {title}
                    </h2>
                    <p className='text-xl'>{description}</p>
                    <div className="card-actions justify-between">
                        <div className="badge "><img className='w-5' src="" alt="" />{ratings}</div>
                        <div className="badge badge-outline">{category}</div>
                    </div>
                    <button className=" flex justify-center btn w-1/2 bg-amber-500">Download({mb}MB) </button>
                </div>
            </div >
        </>
    );
};
export default GameDetails;