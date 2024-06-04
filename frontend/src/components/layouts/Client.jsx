import React from 'react'
import Footer from '../partials/client/Footer'
import Header from '../partials/client/Header'
import Sidebar from '../partials/client/Sidebar'
import ClientRoute from '../../routes/ClientRoute'

export default function Client() {
    return (
        <>
            <div className='grid grid-cols-12'>
                <aside className='side-bar col-span-1'>
                    <Sidebar />
                </aside>
                <aside className='col-span-10'>
                    <header>
                        <Header />
                    </header>
                    <main className='main min-h-screen mt-16 pt-10'>
                        <ClientRoute />
                    </main>
                </aside>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
