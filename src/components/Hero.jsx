import React from 'react'

function Hero() {
    return (
        //  className='w-30 h-9 text-white bg-cyan-500 border rounded-[30px] mt-[72vh] ml-[47vw] cursor-pointer'
        <>
            <section className="w-full h-full">
                <img src="./hero.jpg" alt="hero img" className='absolute z-[-1] h-[100vh] w-full' />
                <button className='w-30 h-9 text-white bg-cyan-500 border rounded-[30px] mt-[72vh] ml-[47vw] cursor-pointer' onClick={() => (window.location.href = "https://login-auth-murex.vercel.app/")}>Get Started</button>
            </section>
        </>
    )
}

export default Hero 