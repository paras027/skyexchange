import React, { useState } from 'react'
import './signup.css'
import { changeSignupValue,changeValue } from "../../Redux/LoginSlice";
import { useDispatch } from 'react-redux';
const Signup = () => {

  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: '',
  });
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        alert('Signup successful!');
        dispatch(changeSignupValue());
        localStorage.setItem('token', data.token);
      } else {
        const error = await response.json();
        console.error('Signup failed:', error);
        alert('Signup failed: ' + error.message);
      }
    } catch (err) {
      console.error('Error during API call:', err);
      alert('An error occurred. Please try again later.');
    }
  };
  return (
    <div className='signuppage'>

    <div className='signup'>
        <div className='signup_left'>
            <img src='assets/loginImg.png' className='image_signup' />
            </div>
        <div className='signup_right'>
            <p className='signup_heading'>Please signup to continue</p>
            <input type='text' placeholder='Username' className='input_signup' name="username" onChange={handleInputChange}/>
            <input type='text' placeholder='Email' className='input_signup' name="email" onChange={handleInputChange} />
            <input type='password' placeholder='Password' className='input_signup' name="password" onChange={handleInputChange} />
            <button className='signuppage_button' onClick={handleSubmit}>Signup</button>
        </div>
    </div>
    </div>
  )
}

export default Signup