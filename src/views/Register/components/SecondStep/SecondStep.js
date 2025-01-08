import { Button, MenuItem, Select, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { multiStepsContext } from "../../../../StepsContext";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const SecondStep = () => {
    const {setStep, userData, setUserData} = useContext(multiStepsContext)

    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const {errors} = formState

    // submit form and store data in the context
    const onSubmit = (data) => {
        setUserData({...userData, 
            'company_name':data.company_name,
            'company_address':data.company_address,
            'company_business_email':data.company_business_email,
            'company_country_id':data.company_country_id,
            'company_city_id':data.company_city_id,
            'company_phone':data.company_phone,
            'company_extra_data_phone':data.company_extra_data_phone
        })

        // change the step in the context to move to the next form
        setStep(3)
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="formSteps bg-white rounded-md p-4 flex justify-between flex-wrap">
                    <div className="company_name input_container">
                        <label>Company name</label>
                        <div className="flex phone_container">
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="Enter your company name" 
                                className={`rounded-md ${errors.company_name?.message && 'input_validation'}`}
                                value={userData['company_name']}
                                {...register("company_name", {
                                    required: {
                                        value: true,
                                        message: 'Company name is required'
                                    }
                                })}
                            />
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                className={`rounded-md w-full ${errors.company_name?.message && 'input_validation'}`}
                                value={1}
                            >
                            <MenuItem value={1}>English</MenuItem>
                        </Select>
                        </div>
                        <p className="errorValidatoin"> {errors.company_name?.message} </p>
                    </div>    
                    <div className="input_container mt-5">
                        <label>Address</label>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Enter your Address" 
                            className={`rounded-md ${errors.company_address?.message && 'input_validation'}`}
                            value={userData['company_address']}
                            {...register("company_address", {
                                required: {
                                    value: true,
                                    message: 'Company address is required'
                                }
                            })}
                        />
                        <p className="errorValidatoin"> {errors.company_address?.message} </p>
                    </div>    
                    <div className="input_container mt-5">
                        <label>business email</label>
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            placeholder="Enter your bussiness email" 
                            className={`rounded-md ${errors.company_business_email?.message && 'input_validation'}`}
                            value={userData['company_business_email']}
                            {...register("company_business_email", {
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: 'Invaled email format'
                                }
                            })}
                        />
                        <p className="errorValidatoin"> {errors.company_business_email?.message} </p>
                    </div>    
                    <div className="input_container half-width mt-5">
                        <label>country</label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="choose your country" 
                            className={`rounded-md w-full ${errors.company_country_id?.message && 'input_validation'}`}
                            value={userData['company_country_id']}
                            {...register("company_country_id", {
                                required: {
                                    value: true,
                                    message: 'country is required'
                                }
                            })}
                        >
                            <MenuItem value={1}>Egypt</MenuItem>
                        </Select>
                        <p className="errorValidatoin"> {errors.company_country_id?.message} </p>
                    </div>    
                    <div className="input_container half-width mt-5">
                        <label>city</label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="choose your city"
                            className={`rounded-md w-full ${errors.company_city_id?.message && 'input_validation'}`}
                            value={userData['company_city_id']}
                            {...register("company_city_id", {
                                required: {
                                    value: true,
                                    message: 'Company city is required'
                                }
                            })}
                        >
                            <MenuItem value={1}>Cairo</MenuItem>
                        </Select>
                        <p className="errorValidatoin"> {errors.company_city_id?.message} </p>
                    </div>    
                    <div className="phone input_container half-width mt-5">
                        <label>Company Phone Number</label>
                        <div className="flex phone_container">
                            <TextField 
                                id="user_phone_key"
                                variant="outlined"
                                className={`rounded-md ${errors.company_phone?.message && 'input_validation'}`} 
                                value={'+20'} 
                            />   
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                placeholder="Enter Your Company Phone Number" 
                                className={`rounded-md ${errors.company_phone?.message && 'input_validation'}`}
                                value={userData['company_phone']}
                                {...register("company_phone", {
                                    required: {
                                        value: true,
                                        message: 'Company phone is required'
                                    }
                                })}
                            />
                        </div>
                        <p className="errorValidatoin"> {errors.company_phone?.message} </p>
                    </div>    
                    <div className="phone input_container half-width mt-5">
                        <label>Company Phone Number</label>
                        <div className="flex phone_container">
                            <TextField 
                                id="user_phone_key"
                                variant="outlined"
                                className={`rounded-md ${errors.company_extra_data_phone?.message && 'input_validation'}`} 
                                value={'+20'} 
                            />   
                            <TextField
                                id="company_extra_data_phone"
                                variant="outlined"
                                placeholder="Enter Your Company Phone Number" 
                                className={`rounded-md ${errors.company_extra_data_phone?.message && 'input_validation'}`}
                                value={userData['company_extra_data_phone']}
                                {...register("company_extra_data_phone", {
                                    required: {
                                        value: true,
                                        message: 'Company phone is required'
                                    }
                                })}
                            />
                        </div>
                        <p className="errorValidatoin"> {errors['company_extra_data_phone']?.message} </p>
                    </div>    
                </div>
                <div className="form_actions flex justify-between w-full mt-5">
                    <div></div>
                    <div className='flex'>
                        <Button variant="contained" className="back-btn" onClick={()=>setStep(1)}>back</Button>
                        <Button variant="contained" className="next-btn" type="submit">Next</Button>
                        <DevTool control={control}  />
                    </div>
                </div>
            </form>
        </div>
    )
}
export default SecondStep;