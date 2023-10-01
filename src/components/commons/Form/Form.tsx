import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

export function Form () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);

  function SubmitButton() {
    if (name && email && phone && message && agree) {
      return <button type="submit" className="send-btn-enabled">Enviar</button>;
    } else {
      return <button type="submit" className="send-btn-disabled" disabled>Enviar</button>;
    }
  }

  function sendEmail(e: any) {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      phone: phone,
    }

    emailjs.send('service_h3xfsii', 'template_bun8b8h', templateParams, 'XBVPKBTGkllKPh6zX')
      .then((response) => {
        console.log('Email enviado', response.status, response.text)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setAgree(false)

      }, (error) => {
        console.log('Email não enviado', error)
      })

    alert('E-mail enviado com sucesso!');
  }

  return (
    <div className="form-container">
      <div className="form-header">
        <h2 className="form-title">Agende sua consulta</h2>
        <div className="form-line" />
        <p className="form-subtitle">Preencha o formulário para agendar sua consulta</p>
      </div>
      <form className="form" onSubmit={sendEmail}>
        <div className="form-group">
          <input type="text" name="name" id="name" placeholder="Digite seu nome" value={name} onChange={ e => setName(e.target.value) } />
        </div>
        <div className="form-group">
          <input type="text" name="email" id="email" placeholder="Digite seu e-mail" value={email} onChange={ e => setEmail(e.target.value) } />
        </div>
        <div className="form-group">
          <input type="text" name="phone" id="phone" placeholder="Digite seu telefone" value={phone} onChange={e => setPhone(e.target.value) } />
        </div>
        <div className="form-group">
          <textarea name="message" id="message" placeholder="Digite sua mensagem" value={message} onChange={ e => setMessage(e.target.value) }></textarea>
        </div>
        <div className="checkbox-group">
          <input type="checkbox" name="checkbox" id="checkbox" checked={agree} onChange={ e => setAgree(e.target.checked) } />
          <span className="agree-text">Concordo com as <a href="index.html" className="politics">políticas de privacidade.</a></span>
        </div>
        <div className="form-group send-btn-group">
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}