import React from 'react'
// import { MdOutlineAddShoppingCart } from "react-icons/md";
// import { BiSolidCartAdd } from "react-icons/bi";

import './product.css'


const ProductsCard = ({data}) => {
  return (
    <div className='max-w-screen-1xl container mx-auto xl:px-28 px-4 mb-12'>
        <div className='cart_card grid grid-cols-1 sm:grid-cols-3
        md:grid-cols-5 gap-1 place-items-center'>
            {/* car section  */}
            {
                data.map((data)=>(
                    <div key={data.id}>
                        <div className='relative items-center text-center pb-3 pt-9 text-1xl  text-pramary' >
                            <img src={data.img} alt="" className='images object-cover
                            rounded-md '/>
                            <div className='leading-7'>
                            <h2 className='font-semibold'>{data.title}</h2>
                            <h2 className='font-bold'>${data.Price}</h2>
                        
                        </div>
                        <button className='cart'>Add to cart</button>
                            {/* hover button  */}
                           
                               
                            
                        </div>

                        
                    </div>
                    
                ))
            }
        </div>

    </div>
  )
}

export default ProductsCard