import React from 'react'
import Sweets from '../assets/Sweets/holige.jpg'
import Tea from '../assets/Tea/Lemon_tea.jpg'
import Snacks from '../assets/Snacks/girmit.webp'




const categories = [
    {
        title: 'Sweetsa',
        imageUrl: Sweets,
    },
    {
        title: 'Special Tea',
        imageUrl: Tea,
    },   {
        title: 'Snacks',
        imageUrl: Snacks,
    },
]
const CategorySec = () => {  
  return (
    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer'>
        {categories.map((category,index)=>(
            <div key={index} className='images relative h-40 w-30 transform transition-transform duration-300 hover:scale-105 '>  
              <img src={category.imageUrl} alt="" className='w-full h-full object-cover rounded-lg shadow-md '/>
            <div className='absolute top-20 left-12'>
                <p className='text-xl font-bold text-white'>{category.title}</p>
                <p className='text-white'>View All</p>
            </div>
            
            </div>
        ))}

    </div>
  )
}

export default CategorySec