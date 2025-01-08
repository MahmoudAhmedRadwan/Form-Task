import React from "react";
import success from "../../../../assets/images/confirm.png"

const Final = () => {
    return(
        // the final step when the step is 5
        <div className="final bg-white rounded-md p-4 m-auto">
            <div>
                <img src={success} alt="success" className="block m-auto" />
            </div>
            <div className="mt-2 mb-8 text-center">
                <h3>Congratz, you successfully created your account</h3>
                <p>We just sent you a confirmation email</p>
                <p>please check your e-mail</p>
            </div>
            <div className="text-center">
                <p>Didn't recieve it?</p>
                <p> Check your Spam folder or <span> Resend Email </span> </p>
            </div>
        </div>
    )
}
export default Final;