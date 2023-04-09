import React from 'react'
import emailjs from 'emailjs-com';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_USER_ID

const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    setFormStatus('Submitting')
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        setFormStatus('Sent')
        
      }, (error) => {
        console.log(error.text);
        
      });
    e.target.reset()
  }
  return (
    <div className="d-flex">
        <div style={{width: '70%'}}>
        <h2 className="mb-3 p-2">TA KONTAKT</h2>
        <form onSubmit={onSubmit}>
            <div className="mb-3 p-2">
            <label className="form-label" htmlFor="name">
                Navn
            </label>
            <input name='user_name' className="form-control" type="text" id="name" required />
            </div>
            <div className="mb-3 p-2">
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input name='user_email' className="form-control" type="email" id="email" required />
            </div>
            <div className="mb-3 p-2">
            <label className="form-label" htmlFor="message">
                Melding
            </label>
            <textarea name='user_message' className="form-control" id="message" required style={{height: '150px'}} />
            </div>
            <div className="p-2">
                <button className="btn btn-danger" type="submit" style={{backgroundColor: '#F06000', border:'none', float:'right'}}>
                    {formStatus}
                </button>
            </div>
        </form>
        </div>
        <div>
            <></>
        </div>
      </div>
  )
}
export default ContactForm