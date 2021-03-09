import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Newsletter from './components/newsletter'
import Footer from './components/footer'

const App = (): JSX.Element => {
    return (
        <div>
            <Navbar />
            <Newsletter />
            <h1>HERE GOES THE PINAPPLE IMAGE</h1>
            <Footer />
        </div>
    )
}
export default App
