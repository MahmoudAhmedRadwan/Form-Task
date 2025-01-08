import React, { useState } from "react";
import App from "./App";

export const multiStepsContext = React.createContext();
const StepsContext = () => {
    const [currentStep, setStep] = useState(2);
    const [userData, setUserData] = useState({});
    const [finalData, setFinalData] = useState([]);
    return(
        <div>
            <multiStepsContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData }}>
                <App />
            </multiStepsContext.Provider>
        </div>
    )
}
export default StepsContext;