import { Button } from '@mui/material';
import React from 'react'

const SecondStep = () => {
    return(
        <div className="formSteps flex justify-between flex-wrap">
            <div className="input_container">
                <label>Company name</label>
                <input type="text" placeholder="Enter your company name" className="rounded-md" />
            </div>    
            <div className="input_container mt-5">
                <label>Address</label>
                <input type="text" placeholder="Enter your Address" className="rounded-md" />
            </div>    
            <div className="input_container mt-5">
                <label>business email</label>
                <input type="text" placeholder="Enter your bussiness email" className="rounded-md" />
            </div>    
            <div className="input_container half-width mt-5">
                <label>county</label>
                <select className="rounded-md" >
                    <option selected disabled>choose your country</option>
                </select>
            </div>    
            <div className="input_container half-width mt-5">
                <label>city</label>
                <select className="rounded-md" >
                    <option selected disabled>choose your city</option>
                </select>
            </div>    
            <div className="input_container half-width mt-5">
                <label>Company Phone Number</label>
                <input type="text" placeholder="Enter Your Company Phone Number" className="rounded-md" />
            </div>    
            <div className="input_container half-width mt-5">
                <label>Company Phone Number</label>
                <input type="text" placeholder="Enter Your Company Phone Number" className="rounded-md" />
            </div>    
            <div className="form_actions flex justify-between w-full mt-5">
                <div></div>
                <div className='flex'>
                    <Button variant="contained" className="back-btn">back</Button>
                    <Button variant="contained" className="next-btn">Next</Button>
                </div>
            </div>
        </div>
    )
}
export default SecondStep;