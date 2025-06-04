import React from 'react'
import data from '../data/data'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiGodotengine } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

const Skill = () => {
  return (
    <div className='skill'>
        <h1><span>{data.eng.my} </span>{data.eng.skill}</h1>
        <div className='itms'>
            <div>
                <FaHtml5 style={{ fontSize: '5rem' }} />
                <h6>Html</h6>
            </div>
            <div>
                <FaCss3 style={{ fontSize: '5rem' }} />
                <h6>Css</h6>
            </div>
            <div>
                <IoLogoJavascript style={{ fontSize: '5rem' }} />
                <h6>JavaScript</h6>
            </div>
            <div>
                <FaPython style={{ fontSize: '5rem' }}/>
                <h6>Python</h6>
            </div>
            <div>
                <SiMysql style={{ fontSize: '5rem' }} />
                <h6>SQL</h6>
            </div>
          </div>
          <div className='itms'>
            <div>
                <BsGit style={{ fontSize: '5rem' }} />
                <h6>Git</h6>
            </div>
            <div>
                <FaReact style={{ fontSize: '5rem' }} />
                <h6>React.js</h6>
            </div>
            <div>
                < SiDjango style={{ fontSize: '5rem' }} />
                <h6>Django</h6>
            </div>
            {/* <div>
                <SiGodotengine style={{ fontSize: '5rem' }} />
                <h6>Godot</h6>
            </div> */}
            <div>
                <FaFigma style={{ fontSize: '5rem' }} />
                <h6>Figma</h6>
            </div>
            <div>
                <SiFlutter style={{ fontSize: '5rem' }} />
                <h6>Flutter</h6>
            </div>
          </div>
          {/* <div className='itms'>
            
            
        </div> */}
    </div>
  )
}

export default Skill