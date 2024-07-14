import React from "react"
import '../styles/Welcome.scss'
import scroll from '../assets/scroll.svg'
import scrollArrow from '../assets/scroll-arrow.svg'

function Welcome() {
    return (
        <section className="welcome">
            <div className="welcome-texts">
                <h1 className="welcome-h1">Lorem ipsum dolor sit amet</h1>
                <p className="welcome-sub">Lorem ipsum dolor sit amet</p>
                <p className="welcome-about">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex delectus deleniti dolorem praesentium assumenda id adipisci vel doloremque accusamus impedit unde hic sint </p>
                <div className="welcome-btn-container">
                    <div className="welcome-btn">
                        <a href="#">Lorem, ipsum</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome