import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Newsletter from './components/newsletter'
import Footer from './components/footer'
import './styles/css/app.css'
import pineappel from './pineapple-3413953_960_720.jpg'

const App = (): JSX.Element => {
    return (
        <div className="content">
            <div>
                <Navbar />
                <div>
                    <Newsletter />
                    <Footer />
                </div>
            </div>
            <img src={pineappel} alt="image of a beatiful pineapple" />
        </div>
    )
}
export default App
