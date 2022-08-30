import React from 'react'
import { Outlet } from 'react-router-dom'

const LogIn = () => {
  return (
    <div>
        <h1>From login </h1>

        <Outlet />
    </div>
  )
}

export default LogIn