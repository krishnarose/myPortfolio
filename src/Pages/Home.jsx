import React from 'react'
import hero from '../assets/hero.png'

const Home = () => {
  return (
   <>
   <div className=' w-full h-screen bg-black relative'>
   </div>
   <div className='absolute lg:top-[300px] lg:left-[500px]  text-white text-center top-[250px] font-semibold left-[20px] md:top-[400px] md:right-[300px] md:font-bold md:text-3xl md:mt-3 xl:-left-[50px] xl:w-[1000px] '>
      <h1 className='text-white tracking-wide lg:font-bold lg:text-2xl xl:text-red-500'> Web Developer</h1>
      <h1 className='text-white tracking-wide lg:font-bold lg:text-4xl lg:mt-4 md:mt-4'> KRISHNA KUMAR</h1>

    </div>
    <div  className='absolute lg:top-1 lg:right-[250px] top-[100px] right-[50px] '>
      <img src={hero} alt="heroImg" className='lg:w-[350px] w-[150px] md:w-[300px]' />
    </div>
   </>
  )
}

export default Home
