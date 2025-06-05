import React from 'react'
import data from '../data/data'
import { CiShare1 } from "react-icons/ci";


const Certification = () => {
  return (
    <div className='black-cnt'>
      <div className='certif'>
        <h1><span>{data.eng.my} </span>{data.eng.certif}</h1>

        <div className='cnt'>
          <div className='th-cnt'>
            <div className='card'>
              <div className='img-cnt'>
                <img src='1.png' />
              </div>
              <h3>Meta Principles of UX/UI Design <a href='https://coursera.org/share/810e28e664653b4da5d3141b3dc3bd51'><CiShare1 /></a></h3>
            </div>

            <div className='card'>
              <div className='img-cnt'>
                <img src='2.png' />
              </div>
              <h3>Meta Version Control <a href='https://coursera.org/share/7cc04b368353de15ee91961856e7b821'><CiShare1 /></a></h3>
            </div>

            <div className='card'>
              <div className='img-cnt'>
                <img src='3.png' />
              </div>
              <h3>Meta APIs <a href='https://coursera.org/share/1e9991340fbac81889ce475f85d36db1'><CiShare1 /> </a></h3>
            </div>
          </div>
          <div className='t-cnt'>
            <div className='card'>
              <div className='img-cnt'>
                <img src='4.png' />
              </div>
              <h3>Meta Django Web Framework <a href='https://coursera.org/share/0e45ccecdd860cb21364ff621c4d9b41'><CiShare1 /></a></h3>
            </div>

            <div className='card'>
              <div className='img-cnt'>
                <img src='5.png' />
              </div>
              <h3>Meta Advanced React <a href='https://coursera.org/share/28884a912ccb11d8a2d0b2c80d199f0d'><CiShare1 /></a></h3>
            </div>


          </div>

          <div className='th-cnt'>
            <div className='card'>
              <div className='img-cnt'>
                <img src='6.png' />
              </div>
              <h3>Freecodecamp Responsive Web Design <a href='https://www.freecodecamp.org/certification/fcc92a01587-9897-45a8-ba25-787be8f99a11/responsive-web-design'><CiShare1 /></a></h3>
            </div>

            <div className='card'>
              <div className='img-cnt'>
                <img src='7.png' />
              </div>
              <h3>Freecodecamp scientific computing with Python <a href='https://www.freecodecamp.org/certification/fcc92a01587-9897-45a8-ba25-787be8f99a11/scientific-computing-with-python-v7'><CiShare1 /></a></h3>
            </div>

            <div className='card'>
              <div className='img-cnt'>
                <img src='8.png' />
              </div>
              <h3>Freecodecamp Legacy javascript Algorithms and data structures <a href='https://www.freecodecamp.org/certification/fcc92a01587-9897-45a8-ba25-787be8f99a11/javascript-algorithms-and-data-structures'><CiShare1 /></a></h3>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Certification