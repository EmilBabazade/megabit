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
            <Navbar />
            <div className="register">
                <div>
                    <Newsletter />
                    <Footer />
                </div>
            </div>
        </div>
    )
}
export default App
