import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const GameDetail = () => {

    const {id} = useParams()

    const [games, setGames] = useState([]);
            useEffect(() => {
                fetch('/gamesdata.json').then(res => res.json()).then(data => setGames(data)).catch(err => console.log(err))
            },[])

    

            
    
    const findRes = games.find(game => game.id == id)
    console.log(findRes)

  return (
    <div>
        <title>Game details</title>
        <div className='flex flex-col justify-center items-center py-10 gap-2'>
            <img className='w-1/2 rounded-2xl' src={findRes?.coverPhoto} alt="" />
            <h2 className='font-bold text-3xl text-gray-800'>Title : {findRes?.title}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Category : {findRes?.category}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Description :<br></br> {findRes?.description}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Ratings : {findRes?.ratings}</h2>
            <h2 className='font-semibold text-xl text-gray-600'>Developer : {findRes?.developer}</h2>
            <button className="btn btn-primary bg-gray-800 border-none shadow-none"><a href={findRes?.downloadLink} target='blank'>Download link here</a></button>
        </div>
    </div>
  )
}

export default GameDetail
