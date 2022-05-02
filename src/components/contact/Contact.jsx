import './contact.css'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { HiOutlineMail } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import { SiMessenger } from 'react-icons/si'

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_364llxh',
        'template_q8pqlir',
        form.current,
        'P36aSqq8xytgFolSx'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icons' />
            <h4>Email</h4>
            {/* <h5>ashish241.shejwal@gmail.com</h5> */}
            <a
              rel='noreferrer'
              target='_blank'
              href='mailto:ashish02.shejwal@gmail.com'
            >
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <SiMessenger className='contact__option-icons' />
            <h4>Messenger</h4>
            <h5>Ashish Shejwal</h5>
            <a
              href='http://m.me/ashish.shjwal.5'
              rel='noreferrer'
              target='_blank'
            >
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icons' />
            <h4>WhatsApp</h4>
            <h5>+91 9892896924</h5>
            <a href='https://wa.me/9892896924' rel='noreferrer' target='_blank'>
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your full Name'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email Address'
            required
          />
          <textarea
            name='message'
            placeholder="You'r Message"
            rows='7'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
