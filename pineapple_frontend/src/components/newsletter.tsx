import React from 'react'

const Newsletter = (): JSX.Element => (
    <div>
        <h1>Subscribe to newsletter</h1>
        <p>Subscribe to our newsletter and get 10% discount on pineapple glasses</p>
        <form>
            <input type="text" placeholder="Type your email address here..."/>
            <input type="checkbox" /> <p>I agree to <a href="#">terms of service</a></p>
            <button type="submit">Subscribe</button>
        </form>
    </div>
)

export default Newsletter