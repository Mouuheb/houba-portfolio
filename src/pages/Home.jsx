import React from 'react'
import data from '../data/data'
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='home'>
        <div className='text-cnt'>
            <div></div>
            <h1>{data.eng.home.g}<span className='bold'> {data.eng.home.name}</span></h1>
            <h1><span className='bold'>{data.eng.home.p} </span><span className='stroke'>{data.eng.home.pp}</span></h1>
            <h1>{data.eng.home.b} <span className='bold'>{data.eng.home.l}</span></h1>
            <div className='prf'>
              <p>{data.eng.home.prf}</p>
            </div>
            
            <div className='sosial-cnt'>
              <a>
                <FaLinkedinIn style={{ fontSize: '1.5rem' }} />
              </a>

              <a>
                <FaXTwitter style={{ fontSize: '1.5rem' }} />
              </a>

              <a>
                <FiInstagram style={{ fontSize: '1.5rem' }} />
              </a>
                
            </div>

        </div>

        <div className='img-cnt'>
            <img src='home.svg'/>
        </div>
    </div>
  )
}

export default Home