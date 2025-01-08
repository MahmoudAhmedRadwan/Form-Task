import React, { useContext, useState } from "react";
import confirm from '../../../../assets/images/confirm.png';
import { multiStepsContext } from "../../../../StepsContext";
import { Button } from "@mui/material";
import axios from "axios";
const Comfirmation = () => {
    const { setStep, userData } = useContext(multiStepsContext);
    const [loading, setLoading] = useState(false)

    const submit = async () => {
        console.log(userData, 'testttt')
        setLoading(true)
        try {
            const formData = new FormData();
            formData.append('user_email', userData.user_email);
            formData.append('user_password', userData.user_password);
            formData.append('user_password_confirmation', userData.user_password_confirmation);
            formData.append('lang', 'ar');
            formData.append('company_name', userData.company_name);
            formData.append('company_address', userData.company_address);
            formData.append('company_phone', userData.company_phone);
            formData.append('company_business_email', userData.company_business_email);
            formData.append('company_avatar', userData.company_avatar);
            formData.append('company_country_id', userData.company_country_id);
            formData.append('company_extra_data[phone]', userData.company_extra_data_phone);
            formData.append('user_full_name', userData.user_full_name);
            formData.append('user_phone', userData.user_phone);
            formData.append('user_nationality', userData.user_nationality);
    
            const response = await axios.post('https://id.safav2.io.safavisa.com/register', formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*',
                },
            });
    
            // Handle success
            console.log("Response Data:", response.data);
            setStep(5)
            setLoading(false)
        } catch (error) {
            // Handle error
            setLoading(false)
            console.error("Error:", error);
            alert("Failed to submit form. Please try again.");
        }
    };
    

    
    return(
        <div>
            <div className="bg-white rounded-md p-4">
                <div className="section_img_container">
                    <img src={confirm} alt="confirm" className="block mx-auto" />
                </div>
                <div className="confirmation-message text-center">
                    <p>We will send a message for this e-mail</p>
                    <p> {userData?.user_email} </p>
                </div>
            </div>
            <div className="form_actions flex justify-between w-full mt-5">
                <div></div>
                <div className='flex'>
                    <Button variant="contained" className="back-btn" onClick={() => setStep(3)}>Back</Button>
                    <Button variant="contained" className="next-btn" onClick={submit}> {loading == true ? 'Loading' : 'Confirm'} </Button>
                </div>
            </div>
        </div>
    )
}
export default Comfirmation;