import React from 'react'
import whiterice from '../assets/kitchen/whiterice.jpg';
import {cards} from '../constants';
const Main = () => {
  return (
    <div className='opacity-80 w-full'>

        <div className='adventure flex flex-col mt-20 lg:flex-row'>
            <article className='flex flex-col w-full px-20 pt-10 gap-2'>
            <h2 className='text-sm text-green-600 font-bold'> CULINARY ADVENTURE AWAIT</h2>
            <span className='text-3xl '>Experience cooking like never before</span>
            <p>Join Chef Amara Cooking Tour in Enugu, NG, where culinary dreams come to life! 
                Discover the riche flavors and vibrant aromas of local cuisine as you embark on an unforgettable cooking journey. 
                partenering with talenetd chefs, we offer immersive tours that celebrate the art of cooking. 
                Whether you're a passionate home cook or a culinary enthusiast, our tours are designed to inspire and elevate your skills. 
                Sign up today and let your culinary adventure begin!</p>
            <a href="#" className='underline my-5 animate-bounce'>Get in touch</a>
            </article>
            <img src={whiterice} alt="rice" className='px-18 h-100 w-full' />
        </div>

        <div className='adventure flex flex-col items-center'>

            <article className='flex flex-col w-full px-20 pt-20 gap-2'>
            <h2 className='text-sm text-green-600 font-bold'> CULINARY ADVENTURE </h2>
            <span className='text-3xl lg:text-4xl'>Join us for an unforgettable cooking tour!</span>
            </article>

            <div className='cards my-10 w-110 flex flex-wrap justify-center gap-15 md:w-full lg:w-full flex-row py-10 px-5 lg:gap-10'>
                {cards.map((card, index)=>(
                    <div key={index} className='bg-neutral-800 pb-4 rounded-lg w-100 md:w-100 lg:w-100'>
                        <img src={card.image} alt="card images" className='h-80 w-100' />
                        <span className='text-2xl text-green-700 px-2'>{card.text}</span>
                        <p className='px-2'>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default Main
