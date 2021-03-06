import { useState } from 'react';
import Container from '../layout/Container';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'message':
        setText(value);
        break;
      default:
        break;
    }
  };

  // const handleSubmit = (e, name, lastName, email, subject, text) => {
  //   e.preventDefault();
  //   const message = { name, email, text, subject, lastName };
  //   const parsedMessage = JSON.stringify(message);
  //   fetch('https://formsubmit.co/vad.evlanov@gmail.com', {
  //     method: 'POST',
  //     data: parsedMessage,
  //     dataType: 'json',
  //   })
  //     .then(res => console.log(res))
  //     .catch(error => console.log(error.message));
  // };

  return (
    <Container>
      <h2 className={s.title}>easy way to contact me</h2>
      <form
        target="_blank"
        action="https://formsubmit.co/vad.evlanov@gmail.com"
        method="POST"
        className={s.form}
        // onSubmit={e => handleSubmit(e, name, email, text, subject, lastName)}
      >
        <div className={s.inputBlock}>
          <label htmlFor="name"></label>
          <input
            className={s.input}
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="your name"
            required
          />
          <label htmlFor="lastName"></label>
          <input
            className={s.input}
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="your last name"
          />

          <label htmlFor="email"></label>
          <input
            className={s.input}
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="your email"
          />
          <label htmlFor="subject"></label>
          <input
            className={s.input}
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={handleChange}
            placeholder="subject"
          />
        </div>
        <textarea
          className={s.textArea}
          name="message"
          id="textArea"
          cols="30"
          rows="10"
          value={text}
          onChange={handleChange}
          placeholder="enter your message"
          required
        ></textarea>
        <button className="button" type="submit">
          submit
        </button>
      </form>
    </Container>
  );
}
