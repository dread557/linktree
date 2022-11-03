import React from 'react'

const Contact = () => {
    return (
        <div className='contact-wrapper'>
            <h1>Contact</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <div className='form-wrapper'>
                <form>
                    <div className='names'>
                        <div className='first-name'>
                            <label for='first_name'>First name</label> <br />
                            <input type='text' id='first_name' placeholder='Enter your first name' />
                        </div>
                        <div className='last-name'>
                            <label for='last_name'>Last name</label> <br />
                            <input type='text' id='last_name' placeholder='Enter your last name' />
                        </div>
                    </div>
                    <label for='email'>Email</label> <br />
                    <input id='email' type='email' required placeholder='yourname@email.com' />
                    <label for='message'>Message</label> <br />
                    <input type='textarea' id='message' placeholder="Send me a message and I'll reply as soon as possible..." />
                    <div className='agree'>
                        <input type='radio' />
                        <p>You agree to providing your data to dread who may contact you.</p>
                    </div>
                    <button id='btn__submit'>Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact