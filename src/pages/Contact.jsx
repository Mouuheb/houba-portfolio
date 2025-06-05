import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='inp'  >
                <input type='text' placeholder='Your name' />
                <input type='email' placeholder='Email' />
                <textarea placeholder='How can I help ?'>

                </textarea>
                <div className='elm'>
                    <button>
                        Get in touch
                    </button>
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
            <div className='txt'>
                <h1>Let’s <span>talk</span> for</h1>
                <h1>Something special</h1>
                <p>
                    I seek to push the limits of creativity to create high-engaging, website, and memorable interactive experiences.
                </p>
                <h2>mouhebhatiwch101@gmail.com</h2>
                <h2>+216 52377213</h2>
            </div>
        </div>
    )
}

export default Contact