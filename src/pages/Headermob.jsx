import React from 'react'
import data from '../data/data'
import { MdOutlineFileDownload } from "react-icons/md";


const Headermob = () => {
  return (
    <div>
        <header className='mob'>
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
            <div className='lg-bt-cnt'>
                <a href='#' className='btn'>{data.eng.resume} <MdOutlineFileDownload style={{ fontSize: '.91rem' }}  /></a>
            </div>
        </header>
    </div>
  )
}

export default Headermob