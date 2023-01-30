import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="#contact">
      <h2>Please Contact Me:</h2>
      <div>
        <strong>Phone:</strong>+90(535)3734149
        <strong>E-mail:</strong><a className="a-blue" href="mailto:puzik83@gmail.com">puzik83@gmail.com</a>
        <strong>Telegram:</strong><a className="a-blue" href="https://t.me/tpuzik" target="_blank">@Tpuzik</a>
        <strong>Discord:</strong><a className="a-blue" href="https://discord.com/puzik83#3229" target="_blank">puzik83#3229</a>
        <a className="a-blue" href="https://github.com/puzik83" target="_blank">My GitHub puzik83</a>
      </div>
    </section>
  )
}

export default Contact