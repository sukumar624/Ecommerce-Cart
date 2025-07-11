import React from 'react'
import Header from "../components/Header/Header"
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const RootLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout