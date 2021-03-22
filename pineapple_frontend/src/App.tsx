import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Newsletter from './components/newsletter'
import Footer from './components/footer'

const App = (): JSX.Element => {
    return (
        <div className="content">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="register">
                <Newsletter />
                <Footer />
            </div>
        </div>
    )
}
export default App
