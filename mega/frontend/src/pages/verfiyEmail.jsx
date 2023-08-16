import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/operations/authAPI";

const verfiyEmail = () => {
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signUpData, loading } = useSelector((state) => state.auth);

  useEffect(()=>{
    if(!signUpData)
    {
        navigate("/signup");
    }
  })
  const handleOneSubmit = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      otp,
      navigate,
    } = signUpData;
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    <div>
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <div>
          <h1>Verify Email</h1>
          <p>A verification code has been sent to you. Enter the code below</p>
          <form onSubmit={handleOnSubmit}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
            />
            <button type="Submit">Verify Email</button>
          </form>

          <div>
            <Link to="/login">
              <p>Back to login</p>
            </Link>
          </div>
          <button
          {
            ()=>dispatch()
          }>Resent it</button>
        </div>
      )}
    </div>
  );
};

export default verfiyEmail;
