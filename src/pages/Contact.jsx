import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const sendEmail = async () => {
        console.log('jj')
        try {
            const result = await emailjs.send(
                'service_8k3mfpt',
                'template_3r1ihj4',
                {
                    user_name: formData.name,
                    user_email: formData.email,
                    message: formData.message
                },
                'VCl3M0UVEM0O9mg9Q'
            );
            console.log('Success:', result.text);
            alert('Email sent!');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send email.');
        }
    };


    return (
        <div className='contact' id='contact'>
            <div className='inp'  >
                <input type='text' placeholder='Your name' name="name"

        value={formData.name}
        onChange={handleChange} />
                <input type='email' placeholder='Email' name="email"
        value={formData.email}
        onChange={handleChange} />
                <textarea placeholder='How can I help ?' name="message"
        value={formData.message}
        onChange={handleChange}>


                </textarea>


                <div className='elm'>
                    <button onClick={sendEmail}>
                        Get in touch
                    </button>
                    <a href='https://www.linkedin.com/in/mouheb-htiwch-b61371224/'>
                        <FaLinkedinIn style={{ fontSize: '1.5rem' }} />
                    </a>

                    <a href='https://x.com/hatiwch'>
                        <FaXTwitter style={{ fontSize: '1.5rem' }} />
                    </a>

                    <a href='https://www.instagram.com/houba.exe/'>
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