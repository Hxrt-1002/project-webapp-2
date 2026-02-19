import React from 'react'
import { useNavigate } from 'react-router-dom'

const CircuitsLayout = ({ id, image, name, country, corners }) => {

  const navigate = useNavigate()

  const handleViewDetails = () => {
    navigate(`/circuit/${id}`)
  }

  return (
    <div className='bg-red-900 rounded-3xl shadow-lg hover:shadow-red-600/40 
                    transition-all duration-300 overflow-hidden border border-red-700'>

      <img
        src={image}
        alt={name}
        className='w-full h-52 object-cover hover:scale-105 transition-all duration-500'
      />

      <div className='p-5 flex flex-col justify-between h-44'>

        <div>
          <h2 className='text-xl font-bold text-white tracking-wide'>
            {name}
          </h2>

          <p className='text-sm text-gray-400 mt-2 line-clamp-2'>
            {country}
          </p>
        </div>

        <div className='flex justify-between items-center mt-4'>

          <span className='text-red-500 font-bold text-lg'>
            {corners}
          </span>

          <button
            onClick={handleViewDetails}
            className='px-5 py-2 bg-red-600 text-white text-sm 
                       rounded-full hover:bg-red-700 
                       transition-all duration-300'
          >
            View Circuit
          </button>

        </div>
      </div>
    </div>
  )
}

export default CircuitsLayout
