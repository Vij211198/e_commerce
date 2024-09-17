import React from 'react'
import { SiCodefresh } from "react-icons/si"
import { RiHomeHeartLine } from "react-icons/ri";
import { GrStatusGood } from "react-icons/gr"

const InfoSection = () => {
    const infoItems = [
        {
            icon: <SiCodefresh  className="text-3xl text-primary"/>,
            title: 'Fresh Food',
            description: 'Elevate your dining experience with our commitment to freshness. At ViTan, every dish is a testament to our dedication to quality.',
        },
        {
        icon: <RiHomeHeartLine  className="text-3xl text-primary"/>,
        title: 'Home made',
        description: 'Experience the authentic flavors of homemade meals without the hassle of cooking. At ViTan,  we bring the warmth and comfort of home to your dining experience',

        
    },{icon: <GrStatusGood className="text-3xl text-primary"/>,
    title: 'Good Food',
    description: 'From the soil to your plate, we are passionate about quality at ViTan. Join us for a culinary experience that celebrates the best of what nature has to offer.',
    }   
    ]
    return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {infoItems.map((item,index) =>(
                <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    {item.icon}
                    <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                    <p className='mt-2 text-gray-'>{item.description}</p>
                    </div>
            ))}
        </div>
    </div>
        
  )
}

export default InfoSection