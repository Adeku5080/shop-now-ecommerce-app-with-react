import React, { useState } from "react";
import "./SignInForm.styles.scss";
import {useNavigate} from 'react-router-dom'
import FormInput from "../form-input/FormInput";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/Button";

const defaultFormFields = {
  password: "",
  email: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState("defaultFormFields");
  const { password, email } = formFields;
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
      await signInWithGooglePopup();  
            navigate('/')

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      
      console.log(user , "loggedinUser")
     if (user) {
      navigate('/')
     }
      resetFields();
      
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("incorrect password");
      } else if (error.code === "auth/user-not-found") {
        alert("email does not exist");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="E-mail"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          {" "}
          <Button type="submit">Sign in</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
