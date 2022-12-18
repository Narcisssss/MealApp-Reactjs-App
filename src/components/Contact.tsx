import React from 'react'
import '../styles/Contact.scss';

interface Props { }

function Contact(props: Props) {
    const { } = props

    return (

        <div className='contact-container'>
            <h2 className='form-title'>Send me a message</h2>
            <form className="contact-form" action="https://formsubmit.co/narcis.teodor30@gmail.com" method="POST">
                <input className='form-input' name="name" type="text" placeholder="Name" />
                <input className='form-input' type="hidden" name="_subject" value="New submission!" />
                <input className='form-input' name="email" type="email" placeholder="Email" />
                <input className='form-input' type="hidden" name="_autoresponse"
                    value="Thank you for your submission! I will reply to you as soon as i can :)" />
                <input className='form-input' type="hidden" name="_next" value="https://narcisssss.github.io/MealDB" />
                <textarea name="message" cols={5} rows={5} placeholder="Your message..."></textarea>
                <button className='form-button' type="submit">Send</button>
            </form>
        </div>

    )
}

export default Contact
