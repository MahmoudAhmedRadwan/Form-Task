import React, { useState } from 'react';
import './style.css';
import Title from './components/Title/Title';

const RegistrationForm = () => {
  const [title, setTitle] = useState('Tell us more about you.')
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    country: '',
    phoneNumber: '',
    password: '',
    repeatPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
   <div>
    <div className='container mx-auto'>
        <div className='steps flex justify-between items-center mt-5'>
          <div className='step success-step rounded-full bg-white flex justify-center items-center'>
            1
          </div>
          <div className='step_line success-step-line'></div>
          <div className='step active-step rounded-full bg-white flex justify-center items-center'>
            2
          </div>
          <div className='step_line'></div>
          <div className='step rounded-full bg-white flex justify-center items-center'>
            3
          </div>
          <div className='step_line'></div>
          <div className='step rounded-full bg-white flex justify-center items-center'>
            4
          </div>
        </div>

        {/* form title changes with every step by sending the title as a propsx */}
        <Title title={title} />
        
        <div className='form-steps-body bg-white rounded-sm p-2 mt-5'>

        </div>
    </div>
   </div>
  );
};

export default RegistrationForm;
