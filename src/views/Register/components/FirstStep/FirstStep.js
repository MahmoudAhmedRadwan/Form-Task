import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Visibility, VisibilityOff } from "@mui/icons-material";

const FirstStep = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showReapeatedPassword, setShowReapeatedPassword] = React.useState(false);

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
        <div className="formSteps flex justify-between flex-wrap">
            <div className="input_container">
                <label>Fulll Name</label>
                <input type="text" placeholder="Enter your full name" className="rounded-md" />
            </div>
            <div className="input_container mt-4">
                <label>Business Email</label>
                <input type="text" placeholder="Enter your business email" className="rounded-md" />
            </div>
            <div className="input_container half-width mt-4">
                <label>country</label>
                <select className="rounded-md" >
                    <option selected disabled>choose your country</option>
                </select>
            </div>
            <div className="input_container half-width mt-4">
                <label>Phone Number</label>
                <input type="text" placeholder="enter your phone number" className="rounded-md" />
            </div>
            <div className="input_container mt-4">
                {/* <label>Password</label>
                <input type="text" placeholder="Choose a password" className="rounded-md" /> */}
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
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
                    />
                    </FormControl>
            </div>
            <div className="input_container mt-4">
                {/* <label>Password</label>
                <input type="text" placeholder="Choose a password" className="rounded-md" /> */}
                <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Repeat Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
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
                    />
                    </FormControl>
            </div>
            <div className="form_actions flex justify-between w-full mt-5">
                <a href="#"> <ArrowLeftIcon /> Back to login </a>
                <Button variant="contained" className="next-btn">Next</Button>
            </div>
        </div>
    )
}
export default FirstStep;