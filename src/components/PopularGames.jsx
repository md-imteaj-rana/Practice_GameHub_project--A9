import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const PopularGames = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('gamesdata.json').then(res => res.json()).then(data => setGames(data)).catch(err => console.log(err))
    },[])

    //console.log(games)

  return (
    <div className='mt-10 px-8'>
      <div>
        <h2 className='font-bold text-4xl text-center'>Popular Games</h2>
      </div>

    {/*card*/}
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-6'>
        {
            games.slice(0,6).map(game => 
                <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                    src={game?.coverPhoto}
                    alt="Game cover picture" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{game?.title}</h2>
                    <p>{game?.description}</p>
                    <div className='flex items-center'>
                        <p className='text-blue-400 font-semibold flex items-center gap-1'>{game?.ratings}<FaStar /></p>
                        <p className='font-semibold text-purple-600'>{game?.category}</p>
                        <p className='font-semibold text-red-600'>{game?.developer}</p>
                    </div>
                    <div className="card-actions flex items-center justify-between mt-4">
                    <button className="btn btn-primary bg-gray-800 border-none shadow-none"><a href={game?.downloadLink} target='blank'>Download</a></button>
                    <button className="btn btn-primary bg-gray-800 border-none shadow-none"><a href={game?.downloadLink} target='blank'>View Details</a></button>
                    </div>
                </div>
                </div>
            )
        }
        </div>
      
      <div className="flex justify-center mt-8">
				<Link to="/AllGames">
					<button className="btn btn-primary shadow-none bg-gray-800 mb-5">
						Show All
					</button>
				</Link>
			</div>

    </div>
  )
}

export default PopularGames
