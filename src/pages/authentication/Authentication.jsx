import React from "react";
import SignUpForm from "../../components/sign-up/SignUpForm";

import SignInForm from '../../components/sign-in-form/SignInForm';
import "./authentication.styles.scss";
const Authentication = () => {


  
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    
    </div>
  );
};

export default Authentication;
