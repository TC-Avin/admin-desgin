import React from "react";
import RoundButton from "../../comman/RoundButton";

const Verify = () => {
  return (
    <div>
      <div className="text-center">
       <h2>Email List Verification</h2>
            <h6>
              Verify by UpLead provides real-time email verification and email
            </h6>
            <h6>cleansing as an add-on service. Please see pricing below</h6>
      </div>
      <div className="d-flex m-5 justify-content-between" >
        <div className="d-flex card flex-row justify-content-center" style={{width:'60%'}}>
          <div className="w-50 text-center m-5 p-5">
          <h4>Calculate Your Cost</h4>
          <h6>Enter your estimated number of emails:</h6>
        <p><div>
                 
                  <input
                    type="text"
                    className="form-control"
                  />
                </div></p>
          </div >
          <div className="w-50 m-5 p-5">
            <h2>Pay As you Go!</h2>
            <table className="text-start ">
              <tr>
                <th className="p-1">Emails</th>
                <th className="p-1">Price per Email</th>
              </tr>
              <tr>
                <th className="w-50">
                  up to <strong>10,000</strong>
                </th >
               
                <th className="p-1">$0.008</th>
              </tr>
              <tr>
                <th className="w-50">
                  up to <strong>250,000</strong>
                </th>
                <th className="p-1">$0.008</th>
              </tr>
            </table>
            <p>The minimum total cost is $0.50</p>
          </div>
        </div>
        <div className="card " style={{width:"36%",height:"333.8px",borderStyle:"dashed",borderWidth:"medium"}}>
        <div className="p-5 m-auto">  <h5 className="text-center">Upload a file and start verifying your email list</h5>
          <p className="icon text-center w-100"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-cloud-arrow-up-fill" viewBox="0 0 16 16">
  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"/>
</svg></p>
          <h6 className="text-center px-5">Simple drag and drop CSV file or browse to upload your list</h6>
          <h5 className="text-center">or</h5>
          <p className="text-center"><RoundButton data="Upload File"></RoundButton></p>
        </div></div>
      </div>
    </div>
  );
};

export default Verify;
