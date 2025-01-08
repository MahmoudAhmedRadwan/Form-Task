import React, { useState } from "react";
import App from "./App";

export const multiStepsContext = React.createContext();
const StepsContext = () => {
    const [currentStep, setStep] = useState(1);
    const [userData, setUserData] = useState({});
    return(
        <div>
            <multiStepsContext.Provider value={{currentStep, setStep, userData, setUserData }}>
                <App />
            </multiStepsContext.Provider>
        </div>
    )
}
export default StepsContext;