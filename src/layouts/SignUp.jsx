import React from 'react'
import { Outlet } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className='flex flex-col flex-1 h-full'>
        <Outlet/>
    </div>
  )
}
