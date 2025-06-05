import React from 'react'
import data from '../data/data'
import { MdOutlineFileDownload } from "react-icons/md";

const Header = () => {
  return (
    <div className='desk'>
        <header>
            <div>
                <a href='#a'>
                    <div className='logo-cnt'>
                        <div>
                            <img src={data.logo}/>
                        </div>
                        <h3>{data.name}</h3>
                    </div>
                </a>
            </div>
            <div className='link-cnt'>
                <a href='#about'>{data.eng.about}</a>
                <a href='#skill'>{data.eng.skill}</a>
                <a href='#certif'>Certification</a>
                <a href='#project'>{data.eng.project}</a>
                <a href='#contact'>{data.eng.contact}</a>
            </div>
            <div className='lg-bt-cnt'>
                {/* <div className='lg'>
                    <img src='fr.jfif' />
                </div>
                <div className='lg'>
                    <img src='en.jfif' />
                </div>
                <div className='lg'>
                    <img src='tn.jfif' />
                </div> */}
                <a href='#' className='btn'>{data.eng.resume} <MdOutlineFileDownload style={{ fontSize: '.91rem' }}  /></a>
            </div>
        </header>
    </div>
  )
}

export default Header