import React from "react"
import small_logo from "../assets/Logo.svg"
import twitter_icon from '../assets/twitter-icon.svg'
import instagram_icon from '../assets/instagram-icon.svg'
import facebook_icon from '../assets/facebook-icon.svg'


const Footer = () => {
    return (
        <footer className="">
            <section>
                <div className="company-info">
                    <img src={small_logo} alt="" />
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br /> 123 Town Street, Chicago</li>
                        <li>Phone: <br /> +1 123 456 789</li>
                        <li>Email: <br /> littlemonCS@littlelemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href="/">Facebook <img src={facebook_icon} alt="Facebook Icon" className="social-icon" /></a></li>
                        <li><a href="/"> Instagram <img src={instagram_icon} alt="Instagram Icon" className="social-icon" /></a></li>
                        <li><a href="/"> Twitter <img src={twitter_icon} alt="Twitter Icon" className="social-icon" /> </a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;