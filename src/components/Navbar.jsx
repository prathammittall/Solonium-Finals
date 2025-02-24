import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav>
                <ul className="absolute w-full h-14 navbar text-[20px] flex justify-between items-center gap-10 text-white">
                    <img src="./Logo-full.png" alt="" className='w-[150px]' />
                    <div className='w-[60vw] gap-10 flex'>
                        <button><Link to="/">Home</Link></button>
                        <button><Link to="/contact">Contact</Link></button>
                        <button className='cursor-pointer' onClick={() => (window.location.href = "https://login-auth-murex.vercel.app/")}>Login</button>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Navbar