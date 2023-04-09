import React from 'react';
import ContactForm from '../components/ContactForm';
import ArrowDownSVG from '../components/ArrowDownSVG';

function Contact() {
  return (
    <section id="kontakt" >
        <div class="p-5 text-white" style={{backgroundColor:'#262626', fontFamily: 'Opensans, sans-serif'}}>
            <ContactForm />
            <div style={{float: 'right'}}>
                <a className="smoothscroll" href="#home" > <ArrowDownSVG style={{transform: 'rotate(90deg)'}} /> </a>
            </div>
        </div>
    </section>
  );
}

export default Contact;