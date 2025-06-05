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
                        i use react and django drf and three.js stripe

                    </p>
                    <a href=''>
                        <CiShare1/>
                    </a>
                </div>
            </div>

            <div className='projects-itm' id='inv'>
                
                <div className='txt'>
                    <h1>01</h1>
                    <h2>NFTs store</h2>
                    <p>
                        i use react and django drf and three.js stripe

                    </p>
                    <a href=''>
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
                    <h1>01</h1>
                    <h2>NFTs store</h2>
                    <p>
                        i use react and django drf and three.js stripe

                    </p>
                    <a href=''>
                        <CiShare1/>
                    </a>
                </div>
            </div>

            <div className='projects-itm' id='inv'>
                
                <div className='txt'>
                    <h1>01</h1>
                    <h2>NFTs store</h2>
                    <p>
                        i use react and django drf and three.js stripe

                    </p>
                    <a href=''>
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