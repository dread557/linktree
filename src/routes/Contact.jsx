import React, { useState } from 'react'
import '../styles/contact.scss'

const Contact = () => {

    const initialValues = {
        firstname: '',
        lastname: '',
        email: '',
        message: ''
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setFormValues(initialValues)
        setIsSubmit(true);
    }

    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstname) {
            errors.firstname = "first name cannot be blank!";
        }
        if (!values.lastname) {
            errors.lastname = "last name cannot be blank!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.message) {
            errors.message = 'Please enter a message'
        }
        return errors;
    }

    const name = 'dread'

    return (
        <div className='contact-wrapper'>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="message-success">Message sent!</div>
            ) : (
                null
            )}
            <h1>Contact</h1>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <div className='form-wrapper'>
                <form onSubmit={handleSubmit}>
                    <div className='names'>
                        <div className='first-name'>
                            <label htmlFor='first_name'>First name</label> <br />
                            <input
                                name='firstname'
                                type='text' id='first_name'
                                placeholder='Enter your first name'
                                value={formValues.firstname}
                                onChange={handleChange}
                            />
                            <span className='error'>{formErrors.firstname}</span>
                        </div>
                        <div className='last-name'>
                            <label htmlFor='last_name'>Last name</label> <br />
                            <input
                                name='lastname'
                                type='text'
                                id='last_name'
                                placeholder='Enter your last name'
                                value={formValues.lastname}
                                onChange={handleChange}
                            />
                            <span className='error'>{formErrors.lastname}</span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label> <br />
                        <input
                            name='email'
                            id='email'
                            type='email'
                            placeholder='yourname@email.com'
                            value={formValues.email}
                            onChange={handleChange}
                        />
                        <span className='error'>{formErrors.email}</span><br />
                    </div>
                    <div>
                        <label htmlFor='message'>Message</label> <br />
                        <input
                            name='message'
                            type='textarea'
                            id='message'
                            placeholder="Send me a message and I'll reply as soon as possible..."
                            value={formValues.message}
                            onChange={handleChange}
                        />
                        <span className='error'>{formErrors.message}</span>
                    </div>
                    <div className='agree'>
                        <input
                            name='agree'
                            type='checkbox'
                            required
                        />
                        <p>You agree to providing your data to {name} who may contact you.</p>
                    </div>
                    <button id='btn__submit'>Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact