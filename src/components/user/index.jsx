import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserName } from '../../redux/userSilce'
const User = () => {
    const [userName, setuserName] = useState("")
    const dispatch = useDispatch()
    const handleSublit = () => {
            dispatch(setUserName(userName))
    }
  return (
    <div className=" flex justify-center">
    <div className="lg:w-11/12 w-full flex  justify-center lg:p-16 p-0 border lg:h-screen">
        
        <div className=' border  lg:w-2/5 w-full lg:h-[20.25rem] flex flex-col gap-10 p-10'>
        <div>
            <h2 className='lg:text-3xl  text-sm'>To Start the Quiz Enter User Name</h2>
        </div>
            <label htmlFor="name">
                User Name
            <input className='border border-lime-400 p-2 w-full' type="text" value={userName} onChange={(e) => setuserName(e.target.value)} />
            </label>
            <Link to={"/difficulty"}>
            <div className='bg-lime-400	 hover:bg-lime-700	 text-white w-full  font-bold py-2 px-4 rounded' onClick={handleSublit}>
              Submit
            </div>
            </Link>
               
        </div>
    </div>
    </div>
  )
}

export default User