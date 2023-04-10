import React from 'react'
import './contact.css'
import {GoMail} from 'react-icons/go'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_een9ply', 'template_fkhebjs', form.current, 'RE7U9jasHJfyteSsP')
      .then((result) => {
        e.target.reset();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

          <div className="contact__options">

              <article className='comtact__option'>
                <GoMail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>suyogsabale88@gmail.com</h5>
                <a href="mailto:suyogsabale88@gmail.com">Send a mail</a>
              </article>

              <article className='comtact__option'>
                <BsLinkedin className='contact__option-icon'/>
                <h4>LinkedIn</h4>
                <h5>suyog-sabale</h5>
                <a href="https://www.linkedin.com/in/suyog-sabale" target='_blank'>View Profile</a>
              </article>

              <article className='comtact__option'>
                <BsWhatsapp className='contact__option-icon'/>
                <h4>WhatsApp</h4>
                <h5>+91 7666195872</h5>
                <a href="https://api.whatsapp.com/send?phone=+917666195872" target='_blank'>Send a message</a>
              </article>

          </div>


          <form ref={form} onSubmit={sendEmail} >

              <input type="text" name='name' placeholder='Ur Full Name' required />
              <input type="email" name='email' placeholder='Ur E-mail' required />
              <textarea name="message" placeholder='Ur Msg' required></textarea>
              <button type='submit' className='btn btn-primary' >Send Message</button>



          </form>


      </div>
    </section>
  )
}

export default Contact
