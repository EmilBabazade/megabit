import React from 'react'
import Arrow from './arrow.svg'

const Newsletter = (): JSX.Element => (
    <section>
        <h1>Subscribe to newsletter</h1>
        <p>Subscribe to our newsletter and get 10% discount on pineapple glasses</p>
        <form>
            <div className="email">
                <input type="email" placeholder="Type your email address here..."/>
                <a className="submit" href="#">
                    <img src={Arrow} />
                </a>
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