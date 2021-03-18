import React from 'react'
import '../styles/css/newsletter.css'

const Newsletter = (): JSX.Element => (
    <section>
        <h1>Subscribe to newsletter</h1>
        <p>Subscribe to our newsletter and get 10% discount on pineapple glasses</p>
        <form>
            <input type="text" placeholder="Type your email address here..."/>
            <input type="checkbox" /> <p>I agree to <a href="#">terms of service</a></p>
            <button type="submit">Subscribe</button>
        </form>
    </section>
)

export default Newsletter