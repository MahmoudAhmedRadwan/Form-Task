import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import React, { useContext } from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { multiStepsContext } from "../../../../StepsContext";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const FirstStep = () => {
    const {setStep, userData, setUserData} = useContext(multiStepsContext)
    const [showPassword, setShowPassword] = React.useState(false);
    const [showReapeatedPassword, setShowReapeatedPassword] = React.useState(false);

    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const {errors} = formState

    const onSubmit = (data) => {
        console.log('sub',data.user_full_name)

        setUserData({...userData, 
            'user_full_name':data.user_full_name,
            'user_email':data.user_email,
            'user_nationality':data.user_nationality,
            'user_phone':data.user_phone,
            'user_password':data.user_password,
            'user_password_confirmation':data.user_password_confirmation,
        })
        setStep(2)
    }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowReapeatedPassword = () => setShowReapeatedPassword((show) => !show);

  const handleMouseDownReapeatedPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpReapeatedPassword = (event) => {
    event.preventDefault();
  };
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="formSteps bg-white rounded-md p-4 flex justify-between flex-wrap">
                    
                    <div className="input_container">
                        <label>Fulll Name</label>
                        <TextField 
                            id="user_full_name"
                            variant="outlined"
                            placeholder="Enter your full name"
                            value={userData['user_full_name']} 
                            className={`rounded-md ${errors.user_full_name?.message && 'input_validation'}`} 
                            {...register("user_full_name", {
                                required: {
                                    value: true,
                                    message: 'User full name is required'
                                }
                            })}
                        />
                        <p className="errorValidatoin"> {errors.user_full_name?.message} </p>
                    </div>
                    <div className="input_container mt-4">
                        <label>Business Email</label>
                        <TextField 
                            id="user_email"
                            variant="outlined"
                            placeholder="Enter your Business Email"
                            className={`rounded-md ${errors.user_email?.message && 'input_validation'}`} 
                            value={userData['user_email']} 
                        
                            {...register("user_email", {
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: 'Invaled email format'
                                }
                            })}
                        />
                        <p className="errorValidatoin"> {errors.user_email?.message} </p>
                    </div>
                    <div className="input_container half-width mt-4">
                        <label>country</label>
                        <Select
                            labelId="demo-simple-select-label"
                            id="user_nationality"
                            label="Age"
                            className={`rounded-md w-full ${errors.user_nationality?.message && 'input_validation'}`} 
                            value={userData['user_nationality']} 
                            
                            {...register("user_nationality", {
                                required: {
                                    value: true,
                                    message: 'User nationality is required'
                                }
                            })}
                        >
                            <MenuItem value={1}>Egypt</MenuItem>
                        </Select>
                        <p className="errorValidatoin"> {errors.user_nationality?.message} </p>
                    </div>
                    <div className="phone input_container half-width mt-4">
                        <label>Phone Number</label>
                        <div className="flex phone_container">
                            <TextField 
                                id="user_phone_key"
                                variant="outlined"
                                className={`rounded-md ${errors.user_phone?.message && 'input_validation'}`} 
                                value={'+20'} 
                            />    
                            <TextField 
                                id="user_phone"
                                variant="outlined"
                                placeholder="enter your phone number" 
                                className={`rounded-md phone_key ${errors.user_phone?.message && 'input_validation'}`} 
                                value={userData['user_phone']} 
                                
                                {...register("user_phone", {
                                    required: {
                                        value: true,
                                        message: 'User phone is required'
                                    }
                                })}
                            />
                        </div>
                        <p className="errorValidatoin"> {errors.user_phone?.message} </p>
                    </div>
                    <div className="input_container mt-4">
                        <FormControl variant="outlined" className={` ${errors.user_password?.message && 'input_validation'}`} >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="user_password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                                value={userData['user_password']} 
                                
                                {...register("user_password", {
                                    required: {
                                        value: true,
                                        message: 'User password is required'
                                    }
                                })}
                            />
                        </FormControl>
                            <p className="errorValidatoin"> {errors.user_password?.message} </p>
                    </div>
                    <div className="input_container mt-4">
                        <FormControl variant="outlined" className={` ${errors.user_password_confirmation?.message && 'input_validation'}`} >
                            <InputLabel htmlFor="outlined-adornment-password">Repeat Password</InputLabel>
                            <OutlinedInput
                                id="user_password_confirmation"
                                type={showReapeatedPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label={
                                        showReapeatedPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowReapeatedPassword}
                                    onMouseDown={handleMouseDownReapeatedPassword}
                                    onMouseUp={handleMouseUpReapeatedPassword}
                                    edge="end"
                                    >
                                    {showReapeatedPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                                value={userData['user_password_confirmation']} 
                                {...register("user_password_confirmation", {
                                    required: {
                                        value: true,
                                        message: 'User password confirmation is required'
                                    }
                                })}
                            />
                            </FormControl>
                            <p className="errorValidatoin"> {errors.user_password_confirmation?.message} </p>
                    </div>
                    
                </div>
                <div className="form_actions flex justify-between w-full mt-5">
                    <a href="#"> <ArrowLeftIcon /> Back to login </a>
                    <Button variant="contained" type="submit" className="next-btn"  >Next</Button>
                    <DevTool control={control} />
                </div>
            </form>
        </div>
    )
}
export default FirstStep;