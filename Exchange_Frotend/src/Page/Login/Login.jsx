import React, { useState } from 'react'
import './login.css'
import { changeSignupValue,changeValue } from "../../Redux/LoginSlice";
import { useDispatch } from 'react-redux';
const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        alert('Login successful!');
        dispatch(changeValue());
                localStorage.setItem('token', data.token);
      } else {
        const error = await response.json();
        console.error('Login failed:', error);
        alert('Login failed: ' + error.message);
      }
    } catch (err) {
      console.error('Error during API call:', err);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='loginpage'>

    <div className='login'>
        <div className='login_left'>
            <img src='assets/loginImg.png' className='image_login' />
            </div>
        <div className='login_right'>
            <p className='login_heading'>Please login to continue</p>
            <input type='text' placeholder='Username' className='input_login' name='username' onChange={handleInputChange}/>
            
            <input type='password' placeholder='Password' className='input_login' name='password'  onChange={handleInputChange} />
            <button className='loginpage_button' onClick={handleSubmit}>Login</button>
        </div>
    </div>
    </div>
  )
}

export default Login