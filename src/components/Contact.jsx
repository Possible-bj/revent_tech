import React from 'react';
import SubHeader from './SubHeader';
import ContactIcon from './ContactIcon';
import phone from '../svgs/phone.svg';
import mail from '../svgs/mail.svg';
import '../styles/Contact.css'
import Button from './Button';

const Contact = () => {
  return (
    <div id='contact'>
      <SubHeader> Get in Touch </SubHeader>
      <div className='contactIcons'>
        <ContactIcon info={'Call Us'} icon={phone} link={'+234-806 749-700'} />
        <ContactIcon info={'Send Email'} icon={mail} link={'revent@digital.com'} />
      </div>
      <form className='contactForm'>
        <div className='contactTop'>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' name='email' />
          </div>
        </div>
        <div className='subjectInput'>
          <label htmlfor="subject">Subject</label>
          <input type="text" id='subject' name='subject' />
        </div>
        <div className='messageArea'>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <Button type='submit'>Send Message</Button>
      </form>

    </div>
  );
}

export default Contact;
