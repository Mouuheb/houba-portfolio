import React from 'react'
import data from '../data/data'

const About = () => {
  return (
    <div className='about' id='about'>
        <div>
            <img src='about.svg'/>
        </div>
        <div className='txt'>
            <h1><span>{data.eng.my}</span> {data.eng.abt}</h1>
            <p>
              {data.eng.home.prf}
            </p>
        </div>
    </div>
  )
}

export default About