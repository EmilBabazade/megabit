import React from 'react'

const Newsletter = (): JSX.Element => (
    <section>
        <h1>Subscribe to newsletter</h1>
        <p>Subscribe to our newsletter and get 10% discount on pineapple glasses</p>
        <form>
            <div className="email">
                <input type="email" placeholder="Type your email address here..."/>
                <button type="submit">Subscribe</button>
            </div>
            <div className="checkmark">
                <input type="checkbox" /> 
                <span></span>
                <label>I agree to <a href="#">terms of service</a></label>
            </div>
        </form>
    </section>
)

export default Newsletter