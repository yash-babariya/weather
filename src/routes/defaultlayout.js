import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header'

export default function Defaultlayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}
