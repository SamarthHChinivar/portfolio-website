import React from 'react'
import './contact.css'
import {MdMarkEmailRead} from 'react-icons/md' 
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iwjc1kl', 'template_fbzgn18', form.current, 'nMr0XeW24fKynFdn4')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 8971201756</h5>
            <a href="https://api.whatsapp.com/send?phone=918971201756" target='_blank'>Send a message</a>
          </article>
          
          <article className="contact__option">
            <MdMarkEmailRead className='contact__option-icon'/>
            <h4>Email</h4>
            <small>samarthhchinivar.19is@saividya.ac.in</small> <br />
            <a href="mailto:samarthhchinivar.19is@saividya.ac.in" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>FB Messenger</h4>
            <h5>Samarth Harish Chinivar</h5>
            <a href="https://m.me/samarthh.chinivar" target='_blank'>Send a message</a>
          </article>
        </div>
        
        {/* End of Contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Enter Name' required title='Enter Name' />
          <input type="email" name="email" placeholder='Enter Email' required title='Enter Email' />
          <textarea name="message" rows="7" placeholder='Enter Message' title='Enter Message' ></textarea>
          <button type="submit" className='btn btn-primary' title='submit'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact