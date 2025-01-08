import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import myImage from '../../../../assets/images/uploadImg.png'; 
import { multiStepsContext } from "../../../../StepsContext";

const ThirdStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepsContext);

    // State to store the uploaded image
    const [uploadedImage, setUploadedImage] = useState(myImage);

    // Function to handle file upload
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Check if the file size is less than 500 KB
            if (file.size <= 500 * 1024) {
                const reader = new FileReader();
                reader.onload = () => {
                    
                    setUserData({...userData, 'img_show' : reader.result, 'company_avatar' : event.target.files[0]})
                    setUploadedImage(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                alert("File size must be less than 500 KB.");
            }
        }
    };

    useEffect(()=> {
        // get the image when i get back to the form
        if(userData.img_show){
            setUploadedImage(userData.img_show);
        }
    }, [])

    return (
        <div>
            <div className="formSteps bg-white rounded-md p-4">
                <div className="file-input-wrapper">
                    <div className="file-input-circle">
                        {/* Display the uploaded image or the placeholder */}
                        <img src={uploadedImage} alt="Uploaded or Placeholder Icon" />
                        <input
                            type="file"
                            className="file-input"
                            accept="image/*" // Accept only image files
                            onChange={handleFileUpload}
                        />
                    </div>
                    <div className="add-icon"></div>
                </div>
                <p className='text-center'>Only images with size lower than 500 KB are allowed</p>
            </div>
            <div className="form_actions flex justify-between w-full mt-5">
                <div></div>
                <div className='flex'>
                    <Button variant="contained" className="back-btn" onClick={() => setStep(2)}>Back</Button>
                    <Button variant="contained" className="next-btn" onClick={() => setStep(4)}>Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default ThirdStep;
