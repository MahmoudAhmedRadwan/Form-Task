import React, { useState } from "react";
import App from "./App";

export const multiStepsContext = React.createContext();
const StepsContext = () => {
    const [currentStep, seTStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    return(
        <div>
            <multiStepsContext.Provider value={{currentStep, seTStep, userData, setUserData, finalData, setFinalData }}>
                <App />
            </multiStepsContext.Provider>
        </div>
    )
}
export default StepsContext;