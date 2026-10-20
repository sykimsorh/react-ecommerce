import React from 'react'

function About() {
    return (
        <div className='max-w-[90%] lg:max-w-5xl mx-auto my-20 font-jost'>
            <div className='grid grid-cols-1 items-start lg:grid-cols-2 gap-8'>
                <div className=''>
                    <img className='w-full h-full' src="56f487956d979cc13a3bf4de48654892.jpg" alt="About Us" />
                </div>
                <div className=''>
                    <h1 className='text-3xl font-bold mb-2'>Our Story</h1>
                    <p>Athletes do not settle for average. And neither do we. We have a clear mission: 
                        To be the best sports brand in the world. Every day, 
                        we come to work to create and sell the best sports products in the world, 
                        and to offer the best service and consumer experience – and to do it all in a sustainable way. 
                        We are the best when we are the credible, inclusive, and sustainable leader in our industry.</p>
                </div>
            </div>
        </div>
    )
}

export default About
