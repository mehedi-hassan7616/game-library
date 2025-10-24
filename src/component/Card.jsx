// import { use, useEffect } from "react";
import React from 'react';
import { Link } from 'react-router';
const Card = ({ game }) => {
    return (
        <>
            <Link to={`/gameDetails/${game.id}`}>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure>
                        <img src={game.coverPhoto} alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {game.title}
                        </h2>
                        <p>{game.description}</p>
                        <div className="card-actions justify-between">
                            <div className="badge "><img className='w-5' src="src/assets/icon-ratings.png" alt="" />{game.ratings}</div>
                            <div className="badge badge-outline">{game.category}</div>
                        </div>
                        <button className="btn bg-amber-500">Download({game.mb}MB) </button>
                    </div>
                </div>
            </Link>
        </>
    );
};
export default Card;