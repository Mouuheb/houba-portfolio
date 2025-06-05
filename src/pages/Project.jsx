import React from 'react'
import data from '../data/data'
import { CiShare1 } from "react-icons/ci";

const Project = () => {
  return (
    <div className='black-cnt' id='project'>
        <div className='project'>
        <h1><span>{data.eng.my}</span> {data.eng.project}</h1>
        <div className='projects-cnt'>
            <div className='projects-itm'>
                <div className='img-cnt'>
                    <img src='p1.svg'/>
                </div>
                <div className='txt'>
                    <h1>01</h1>
                    <h2>NFTs store</h2>
                    <p>
                        This is a modern NFT marketplace built using React for the frontend, Three.js for interactive 3D visuals, and Django REST Framework (DRF) for the backend API. The platform allows users to explore, view, and purchase unique digital assets in an immersive 3D environment. With seamless integration between the frontend and backend, the site offers smooth browsing, secure user authentication, and efficient management of NFTs.

                    </p>
                    <a href='https://github.com/Mouuheb/project_fd'>
                        <CiShare1/>
                    </a>
                </div>
            </div>

            <div className='projects-itm' id='inv'>
                
                <div className='txt'>
                    <h1>02</h1>
                    <h2>Loading Screen Website</h2>
                    <p>
                        This is a sleek and responsive loading screen built with React, designed to enhance user experience during data fetching or app initialization. It features smooth animations, customizable themes, and efficient state management to ensure users stay engaged while the main content is loading. Ideal for modern web apps that prioritize performance and visual polish.

                    </p>
                    <a href='https://github.com/Mouuheb/positifis'>
                        <CiShare1/>
                    </a>
                </div>
                <div className='img-cnt'>
                    <img src='p2.svg'/>
                </div>
            </div>

            <div className='projects-itm'>
                <div className='img-cnt'>
                    <img src='p3.svg'/>
                </div>
                <div className='txt'>
                    <h1>03</h1>
                    <h2>Portfolio Website</h2>
                    <p>
                        A clean and interactive personal portfolio built with React, showcasing projects, skills, and experience in a modern and responsive design. It features smooth navigation, dynamic content, and modular components for easy updates—perfect for highlighting professional work and attracting potential clients or employers.

                    </p>
                    <a href='https://github.com/Mouuheb/portfolio-3'>
                        <CiShare1/>
                    </a>
                </div>
            </div>

            <div className='projects-itm' id='inv'>
                
                <div className='txt'>
                    <h1>04</h1>
                    <h2>E-Commerce Website</h2>
                    <p>
                        A full-featured eCommerce platform developed with React for the frontend, Django REST Framework for the backend API, and Stripe for secure online payments. The site includes user-friendly product browsing, shopping cart functionality, and a seamless checkout process. An integrated admin dashboard allows for easy management of products, orders, and users, making it a powerful solution for online retail.

                    </p>
                    <a href='https://github.com/Mouuheb/ecomerce'>
                        <CiShare1/>
                    </a>
                </div>
                <div className='img-cnt'>
                    <img src='p4.svg'/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Project