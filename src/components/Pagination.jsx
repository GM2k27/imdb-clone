import React from 'react'

const Pagination = ({arrowLeft,arrowRight,pageNo}) => {
  return (
    <div className='bg-orange-500  flex justify-center m-8 space-x-10  text-2xl'>
        <div onClick={arrowLeft }><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNo}</div>
        <div onClick={arrowRight}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination
