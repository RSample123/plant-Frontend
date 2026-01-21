import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import AuthNav from '../components/AuthNav'
import '../assets/CSS/AgriCarePro.css'
import sadfarmer from '/sadFarmer.jpg'
import features from '/features.jpg'
import solution from '/solution.jpg'
import Contributor from '../components/Contributor.jsx'
const AgriCarePro = () => {


    return (
        <>
            <AuthNav />
            <div className="Project-des">
                <p> <span>AgriCare Pro</span> is a cutting-edge AgriTech company dedicated to empowering farmers with intelligent, data-driven solutions. Guided by our motto — “Smart Plant Disease Detection and Weather Advisory” — we blend the power of artificial intelligence, machine learning, and precision analytics to revolutionize modern farming.<br /><br />

                    Our platform enables farmers to detect plant diseases early through advanced image recognition and provides real-time, location-based weather forecasts and advisories. By transforming complex agricultural data into actionable insights, AgriCare Pro helps farmers make informed decisions that enhance crop health, optimize yield, and reduce losses.<br /><br />

                    We believe that technology should simplify agriculture, not complicate it. That’s why our user-friendly interface ensures accessibility for all — from small-scale farmers to large agricultural enterprises. Whether it’s predicting weather changes, identifying pest infestations, or suggesting preventive measures, AgriCare Pro stands as your trusted partner in sustainable and profitable farming.<br /><br />

                    With innovation at our core and farmers at our heart, AgriCare Pro is redefining the future of smart agriculture — one field at a time. Grow smarter, farm better, and stay ahead with AgriCare Pro.<br /></p>
            </div>


            <Link to="/signup">
                <button className='TryIt'>Try it now</button>
            </Link>

            {/* problem */}
            <div className="about-agriCarePro">
                <h2>PROBLEM FACED BY OUR FARMERS</h2>
                <div className="about-container">
                    <div className="about-container-image">
                        <img src={sadfarmer} alt="Sad Farmer" />
                    </div>

                    <div className="about-text">
                        <ul style={{ listStyleType: "disc" }}>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Silent Threat:</span> Plant diseases often spread unnoticed, destroying crops and months of hard work.</li>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Late Detection:</span> Farmers usually identify infections too late, when the damage can’t be reversed.</li>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Unpredictable Challenges:</span>Unpredictable Challenges: Sudden weather shifts and lack of timely insights worsen the crisis.</li>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Limited Support:</span> Many farmers struggle without expert advice or modern tools.</li>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Deep Impact:</span> These problems go beyond harvest loss — they threaten livelihoods, food security, and hope.</li>
                        </ul>

                    </div>
                </div>
            </div>


            {/* feature */}
            <div className="about-agriCarePro1">
                <h2>THE APP FEATURES WE PROVIDE</h2>
                <div className="about-container">

                    <div className="about-text">
                        <ul style={{ listStyleType: "disc" }}>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Instant Detection:</span> Farmers can quickly identify plant diseases by simply capturing an image of the affected crop.</li>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>AI-Powered Analysis:</span> Our smart system analyzes the image within seconds for accurate, reliable results.</li>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Actionable Insights:</span> Get clear information on the disease, along with preventive and treatment tips.</li>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Weather-Based Guidance:</span> Receive timely weather updates to plan and protect crops effectively.</li>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Empowering Farmers:</span> AgriCare Pro helps farmers act fast, safeguard their fields, and secure a healthy, thriving harvest.</li>

                            <Link to="/signup">
                                <button className='TryIt'>Try it now</button>
                            </Link>
                        </ul>

                    </div>

                    <div className="about-container-image">
                        <img src={features} alt="features" />
                    </div>
                </div>
            </div>


            {/* solution */}
            <div className="about-agriCarePro2">
                <h2>WE ARE MAKING FARMER'S LIFE EASY</h2>
                <div className="about-container">
                    <div className="about-container-image">
                        <img src={solution} alt="SOLUTION" />
                    </div>

                    <div className="about-text">
                        <ul style={{ listStyleType: "disc" }}>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Smart Agriculture:</span> AgriCare Pro — Smart Plant Disease Detection and Weather Advisory.</li>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Instant Detection:</span> Farmers can instantly identify plant diseases with our advanced platform.</li>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Accurate Weather Insights:</span> Receive precise, real-time weather advisories for better farm planning.</li>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Innovation Made Simple:</span> Our platform blends cutting-edge innovation with easy-to-use design for every farmer.</li>
                            <li>🌿 <span style={{color : 'yellow', fontWeight:"600"}}>Sustainable Growth:</span> We help farmers protect crops, improve yields, and adopt sustainable farming practices.</li>
                            <li>🌿
                                Our Promise: Grow smarter. Farm better. Thrive with
                                <span style={{ color: "lightgreen", textShadow: "black 4px 2px 6px" }}> AgriCarePro.</span>
                            </li>
                        </ul>

                        <Link to="/signup">
                            <button className='TryIt'>Try it now</button>
                        </Link>

                    </div>
                </div>
            </div>
            <Contributor />


        </>

    )
}

export default AgriCarePro