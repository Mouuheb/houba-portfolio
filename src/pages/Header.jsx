import React from 'react'
import data from '../data/data'

const Header = () => {
  return (
    <div>
        <header>
            <div>
                <a href='#'>
                    <div>
                        <div>
                            <img src={data.logo}/>
                        </div>
                        <h3>{data.name}</h3>
                    </div>
                </a>
            </div>
            <div>
                <a href='#'>{data.eng.about}</a>
                <a href='#'>{data.eng.skill}</a>
                <a href='#'>{data.eng.project}</a>
                <a href='#'>{data.eng.contact}</a>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <a href='#'>{data.eng.resume}</a>
            </div>
        </header>
    </div>
  )
}

export default Header