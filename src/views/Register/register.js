import React, { useContext, useEffect, useState } from 'react';
import './style.css';
import Title from './components/Title/Title';
import FirstStep from './components/FirstStep/FirstStep';
import SecondStep from './components/SecondStep/SecondStep';
import ThirdStep from './components/ThirdStep/ThirdStep';
import { multiStepsContext } from '../../StepsContext';
import Comfirmation from './components/Comfirmation/Comfirmation';
import Final from './components/Final/Final';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BurstModeIcon from '@mui/icons-material/BurstMode';
import BeenhereIcon from '@mui/icons-material/Beenhere';

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
      case 4:
        return <Comfirmation />
    }
  }

  useEffect(() => {
    if (currentStep === 1) {
      setTitle('Tell us more about you.');
    } else if(currentStep === 2){
      setTitle('Verify your company')
    } else if(currentStep === 3){
      setTitle('Upload Company Logo')
    } else if(currentStep === 4){
      setTitle('You`re all set. Ready?')
    }
  }, [currentStep]);
  return (
   <div>
    <div className='container mx-auto'>
      {
        currentStep < 5 &&
      
        <div className='steps flex justify-between items-center mt-5'>
          <div className={currentStep < 2 ? 'active-step step rounded-full bg-white flex justify-center items-center' : 'success-step step rounded-full bg-white flex justify-center items-center'}>
            <AccountBoxIcon />
          </div>
          <div className={currentStep > 1 ? 'step_line success-step-line' : 'step_line'}></div>
          <div className={ `step rounded-full bg-white flex justify-center items-center ${currentStep == 2 && 'active-step'} ${currentStep > 2 && 'success-step'}`}>
            <ApartmentIcon />
          </div>
          <div className={currentStep > 2 ? 'step_line success-step-line' : 'step_line'}></div>
          <div className={ `step rounded-full bg-white flex justify-center items-center ${currentStep == 3 && 'active-step'} ${currentStep > 3 && 'success-step'}`}>
            <BurstModeIcon />
          </div>
          <div className={currentStep > 3 ? 'step_line success-step-line' : 'step_line'}></div>
          <div className={ `step rounded-full bg-white flex justify-center items-center ${currentStep == 4 && 'active-step'} ${currentStep > 4 && 'success-step'}`}>
            <BeenhereIcon />
          </div>
        </div>
      }
        {/* form title changes with every step by sending the title as a propsx */}
      {
        currentStep < 5 &&
        <Title title={title} />
      }

      
        <div className='form-steps-body rounded-sm p-2 mt-5'>
          {
            stepCheck(currentStep)
          }
          {
            currentStep == 5 &&
              <Final />
          }
        </div>
      
    </div>
   </div>
  );
};

export default RegistrationForm;
