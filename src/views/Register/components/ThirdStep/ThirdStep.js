import { Button } from '@mui/material';
import myImage from '../../../../assets/images/uploadImg.png'; 
import React from 'react'

const ThirdStep = () => {
    return(
        <div className="formSteps">
            <div className="file-input-wrapper">
                <div className="file-input-circle">
                    <img src={myImage} alt="Placeholder Icon" />
                    <input type="file" className="file-input" />
                </div>
                <div className="add-icon"></div>
            </div>
            <p className='text-center'>Only images width size lower than 500 KB are allowed</p>

            <div className="form_actions flex justify-between w-full mt-5">
                <div></div>
                <div className='flex'>
                    <Button variant="contained" className="back-btn">back</Button>
                    <Button variant="contained" className="next-btn">Submit</Button>
                </div>
            </div>
        </div>
        
    )
}
export default ThirdStep;