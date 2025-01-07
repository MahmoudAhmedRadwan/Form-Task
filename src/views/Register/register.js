import React, { useContext, useState } from 'react';
import './style.css';
import Title from './components/Title/Title';
import FirstStep from './components/FirstStep/FirstStep';
import SecondStep from './components/SecondStep/SecondStep';
import ThirdStep from './components/ThirdStep/ThirdStep';
import { multiStepsContext } from '../../StepsContext';

const RegistrationForm = () => {
  // const [step, setStep] = useState(1)
  const {currentStep, finalData} = useContext(multiStepsContext)
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

  const stepCheck = (step) => {
    switch(step) {
      case 1:
        return <FirstStep />
      case 2:
        return <SecondStep />
      case 3:
        return <ThirdStep />
    }
  }

  return (
   <div>
    <div className='container mx-auto'>
        <div className='steps flex justify-between items-center mt-5'>
          <div className={currentStep < 2 ? 'active-step step rounded-full bg-white flex justify-center items-center' : 'success-step step rounded-full bg-white flex justify-center items-center'}>
            1
          </div>
          <div className={currentStep > 1 ? 'step_line success-step-line' : 'step_line'}></div>
          <div className={ `step rounded-full bg-white flex justify-center items-center ${currentStep == 2 && 'active-step'} ${currentStep > 2 && 'success-step'}`}>
            2
          </div>
          <div className={currentStep > 2 ? 'step_line success-step-line' : 'step_line'}></div>
          <div className={ `step rounded-full bg-white flex justify-center items-center ${currentStep == 3 && 'active-step'} ${currentStep > 3 && 'success-step'}`}>
            3
          </div>
          <div className={currentStep > 3 ? 'step_line success-step-line' : 'step_line'}></div>
          <div className={ `step rounded-full bg-white flex justify-center items-center ${currentStep == 4 && 'active-step'} ${currentStep > 4 && 'success-step'}`}>
            4
          </div>
        </div>

        {/* form title changes with every step by sending the title as a propsx */}
        <Title title={title} />
        
        <div className='form-steps-body bg-white rounded-sm p-2 mt-5'>
          {
            stepCheck(1)
          }
          {/* <FirstStep /> */}
          {/* <SecondStep /> */}
          {/* <ThirdStep /> */}
        </div>
    </div>
   </div>
  );
};

export default RegistrationForm;
