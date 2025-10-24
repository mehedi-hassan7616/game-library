import React from 'react';
import { useLoaderData, useParams } from 'react-router';
const GameDetails = () => {
    const { id } = useParams();
    const GameDetailsId = parseInt(id);
    const data = useLoaderData();
    const gameDetails = data.find(game => parseInt(game.id) === GameDetailsId);
    // const { title, coverPhoto } = gameDetails;
    console.log(data, id, gameDetails)
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    {/* <img src={coverPhoto} alt="" /> */}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {/* title : {title} */}
                    </h2>
                    {/* <p>{game.description}</p>
                    <div className="card-actions justify-between">
                        <div className="badge "><img className='w-5' src="src/assets/icon-ratings.png" alt="" />{game.ratings}</div>
                        // <div className="badge badge-outline">{game.category}</div>
                </div> */}
                    {/* <button className="btn bg-amber-500">Download({game.mb}MB) </button> */}
                </div>
            </div >
        </>
    );
};
export default GameDetails;