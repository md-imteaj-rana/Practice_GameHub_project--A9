import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";

const AllGames = () => {
    const [games, setGames] = useState([]);
    
        useEffect(() => {
            fetch('gamesdata.json').then(res => res.json()).then(data => setGames(data)).catch(err => console.log(err))
        },[])
  return (
    <div className='px-5 pl-13 mb-20'>
      <title>All Games</title>
        <div>
            <h2 className='font-bold text-4xl text-center my-10'>All Games</h2>
        </div>
      {/*All games cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-6'>
              {
                  games.map(game => 
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
    </div>
  )
}

export default AllGames
