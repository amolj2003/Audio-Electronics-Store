import "./Footer.scss";
import React from "react";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
        <div className="col">
            <div className="title">About</div>
            <div className="text">
            Welcome to our shopping website! We are dedicated to
            providing you with a seamless and enjoyable online shopping experience.
            From the moment you enter our virtual store,
            you'll find a wide range of high-quality products,
            exceptional customer service, and a convenient platform
             that makes your shopping journey a breeze.
            </div>
        </div>
        <div className="col">
            <div className="title">Contact</div>
        <div className="c-items">
            <FaLocationArrow/>
            <div className="text">
                Kayaloram Rd,Punnamada,Kottankulangara,Alappuzha,
                Kerala,68806
            </div>
        </div>
        <div className="c-items">
            <FaMobileAlt/>
            <div className="text">
               Phone: 0471 272 0261
            </div>
        </div>
        <div className="c-items">
            <FaEnvelope/>
            <div className="text">
                Email: store@jscreate.com
            </div>
        </div>
        </div>
        <div className="col">
            <div className="title">Categories</div>
            <span className="text">Headphones</span>
            <span className="text">Smart Watches</span>
            <span className="text">Bluetooth Speakers</span>
            <span className="text">Wireless Earbuds</span>
            <span className="text">Home Theatre</span>
            <span className="text">Projectors</span>
        </div>
        <div className="col">
            <div className="title"> Pages</div>
            <span className="text">Home</span>
            <span className="text">About</span>
            <span className="text">Privacy Policy</span>
            <span className="text">Returns</span>
            <span className="text">Terms and Conditions</span>
            <span className="text">Contact Us</span>

        </div>
    </div>
    <div className="bottom-bar">
        <div className="bottom-bar-content">
           <div className="text">JSCREATE STORE 2022 CREATED BY AMOL JAISWAL .
            PREMIUM E-COMMERCE SOLUTION.
            </div>
        <img src={Payment}/>
    </div>
    </div>
    </footer>
};

export default Footer;
