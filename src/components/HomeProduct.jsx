import React from 'react'
import products from '../data'
import { formatPrice } from '../utils/helper'
const HomeProduct = () => {
  return (
    <>
    <section className="my-24">
        <div className="container hidden md:flex  items-center justify-between  mx-auto px-5 text-xs md:text-base xl:px-28  ">
        {/* Right buttons */}
        <div className="space-x-10 ">
        <button className="uppercase tracking-widest py-1">Furniture</button>
        <button className="uppercase tracking-widest py-1">Lighting</button>
        <button className="uppercase tracking-widest py-1">Sofas</button>
        <button className="uppercase tracking-widest py-1">Lounge Chairs</button>
        <button className="uppercase tracking-widest py-1">All</button>
        </div>
        {/* Left button */}
        <div className="space-x-2 text-xs  ">
            <button className="uppercase tracking-widest border-r pr-2 border-black">Back</button>
            <button className="uppercase tracking-widest">Next</button>
        </div>
    </div>

<div className="container mx-auto px-5 xl:px-28 mt-10">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(15, 23).map((product) => {
            const {id, image, name, price} = product
            return(
                <article key={id} className=" space-y-4">
                <img src={image} alt="" className=' w-full h-44 xl:h-96 object-cover object-center' />
                <div>
                    <p className='text-gray-500 capitalize '> {name}</p>
                    <p className='font-semibold'> {formatPrice(price)} </p>
                </div>
            </article>    
            )
        })}          
    </div>

    {/* Button */}
    <div className="my-10 flex flex-row justify-between items-center space-x-4">
        <div className=" border-b bg-gray-600 w-2/3 xl:w-2/5"></div>
    <button className="uppercase tracking-wider border border-green-500  xl:px-10 py-3 text-gray-700 font-medium text-sm xl:text-base w-full md:w-1/2 xl:w-1/5">
        Go to shop
    </button>
    <div className=" border-b bg-gray-600 w-2/3 xl:w-2/5"></div>
    </div>
</div>
    </section>
    </>
  )
}

export default HomeProduct