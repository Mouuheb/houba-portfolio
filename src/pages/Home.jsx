import React from 'react'
import data from '../data/data'
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='home' id='a'>
        <div className='text-cnt'>
            <div></div>
            <h1>{data.eng.home.g}<span className='bold'> {data.eng.home.name}</span></h1>
            <h1><span className='bold'>{data.eng.home.p} </span><span className='stroke'>{data.eng.home.pp}</span></h1>
            <h1>{data.eng.home.b} <span className='bold'>{data.eng.home.l}</span></h1>
            <div className='prf'>
              <p>{data.eng.home.prf}</p>
            </div>
            
            <div className='sosial-cnt'>
              <a href='https://www.linkedin.com/in/mouheb-htiwch-b61371224/'>
                <FaLinkedinIn style={{ fontSize: '1.5rem' }} />
              </a>

              <a href='https://x.com/hatiwch' >
                <FaXTwitter style={{ fontSize: '1.5rem' }} />
              </a>

              <a href='https://www.instagram.com/houba.exe/'>
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