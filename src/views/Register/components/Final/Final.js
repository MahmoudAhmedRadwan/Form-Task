import React from "react";
import success from "../../../../assets/images/confirm.png"

const Final = () => {
    return(
        <div className="final">
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