import React from 'react'
import Logo from '../movie_logo.png'
import { Link } from 'react-router'

const Navigation = () => {
    return (
        <div className='flex border space-x-10 items-center pl-3 py-1'>
            <img className='w-[50px]' src={Logo} alt="This is logo of film" />

            <Link className='text-orange-500 text-2xl font-extrabold' to='/'>Home</Link>
            <Link className='text-orange-500 text-2xl font-extrabold' to='/watchlist'>Watchlist</Link>
        </div>
    )
}

export default Navigation