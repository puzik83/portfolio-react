import React from 'react';
import './contact.css';
import { AiOutlineMail} from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { TbBrandTelegram } from 'react-icons/tb';
import { useRef } from 'react';


const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xr8ga6x', 'template_cbltt38', form.current, 'SsE3i6KsarUwowcqg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h2>Contact Me:</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
          <AiOutlineWhatsApp className='contact-option-icon' />
          <h4>Whatsapp:</h4>
          <h5>+90(535)3734149</h5>
          <a href="https://api.whatsapp.com/send?phone+905353734149" target="_blank">Send a message</a>
          </article>
          <article className="contact-option">
          <AiOutlineMail className='contact-option-icon' />
          <h4>Email:</h4>
          <h5>puzik83@gmail.com</h5>
          <a href="mailto:puzik83@gmail.com">Send a message</a>
          </article>
          <article className="contact-option">
          <TbBrandTelegram className='contact-option-icon' />
          <h4>Telegram:</h4>
          <h5>@Tpuzik</h5>
          <a href="https://t.me/tpuzik" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name'placeholder='Your full name' required />
          <input type="email" name='email'placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your message' required></textarea>
          <input type="submit" value="Send" className='btn'/>
        </form>
      </div>
    </section>
  )
}

export default Contact