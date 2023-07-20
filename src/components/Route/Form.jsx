import { useState } from "react";


const defaultForm = {
    firstname: "",
    lastname:  "",
    email: "",
    phone: "",
    address: "",
    message: "",
    option: ""
}


const Form = () => {
    const [formField, setFormField] = useState(defaultForm)
    const {firstname, lastname, email,phone, address, message, option} = formField;
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false)

    const resetForm = () => {
        setFormField(defaultForm)
    }

    const successMessage = () => {
        setSuccess ('Form is submited successfully')
        setTimeout(() => {
            setSuccess(false)
        }, 3000);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(firstname.length <= 3) {
            setError('First Name is Required and at least 4 characters')
        } else if(lastname.length <= 3) {
            setError('Last Namee is required and at least 4 characters')
        } else if(email.length === 0)  {
            setError('A valid E-Maiil is required')
        } else if(phone.length <= 10)  {
            setError('Phone number is required and at least 11-digits')
        } else if(address.length <= 2) {
            setError('Address is required and at least 4 characters')
        } else if(message.length <= 10)  {
            setError('Message is required and at least 11 characters')
        } else {
            console.log(formField)
            resetForm()
            successMessage()
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormField({...formField, [name] : value})
        setError(false)
        console.log(formField)
    }

    return(
        <div className="form-container">
            <h3 style={{margin: '8px'}}>ACCOUNT INFORMATION</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name 
                    <input type="text" placeholder="first name" name="firstname" value={firstname} onChange={handleChange} />
                </label>

                <label>
                    Last Name 
                    <input type="text" placeholder="last name" name="lastname" value={lastname} onChange={handleChange} />
                </label>

                <label>
                    Email 
                    <input type="text" placeholder="email" name="email" value={email} onChange={handleChange} />
                </label>

                <label>
                    Phone Number 
                    <input type="number" placeholder="phone" name="phone" value={phone} onChange={handleChange} />
                </label>

                <label>
                    Address 
                    <input type="text" placeholder="address" name="address" value={address} onChange={handleChange} />
                </label>
                <select name="option" value={option} onChange={handleChange} >
                    <option>Choose Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <textarea name="message" placeholder="describe yoursef" value={message} onChange={handleChange} ></textarea>
                <button type="submit">SUBMIT</button>
                {error && <p style={{color: 'red', marginBottom: '10px'}}>{error}</p>}
                {success && <h3 style={{color: 'green', marginBottom: '10px'}}>{success}</h3>}
            
            </form>
        </div>
    )
};

export default Form;  