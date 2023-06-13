import React, { useState, useRef } from "react";
import validator from "validator";

const PopupWithForm = (props) => {
  const [errors, setErrors] = useState({});
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  function handleRegisterSubmit(e) {
    e.preventDefault();
    emailRef.current.value = "";
    passwordRef.current.value = "";
    nameRef.current.value = "";
    props.setRegisterSuccessPopup(true);
    props.setFormPopup(false);
    props.setRegisterSuccess(true);
  }

  function handleSigninSubmit(e) {
    e.preventDefault();
    emailRef.current.value = "";
    passwordRef.current.value = "";
    props.setLoggedIn(true);
    closePopup();
  }

  function validateInputs(email, password, username = null) {
    const errors = {};

    if (!email || !validator.isEmail(email)) {
      errors.email = "Invalid email address";
    }

    if (!password) {
      errors.password = "Password is a required field";
    }

    if (username === null) {
    } else if (!username) {
      errors.username = "Username is a required field.";
    }

    return errors;
  }

  function registerFormChange() {
    const validatedInputs = validateInputs(
      emailRef.current.value,
      passwordRef.current.value,
      nameRef.current.value
    );
    if (Object.keys(validatedInputs).length === 0) {
      setErrors(false);
      return;
    }

    setErrors(validatedInputs);
    return;
  }

  function signinFormChange() {
    const validatedInputs = validateInputs(
      emailRef.current.value,
      passwordRef.current.value
    );
    if (Object.keys(validatedInputs).length === 0) {
      setErrors(false);
      return;
    }

    setErrors(validatedInputs);
    return;
  }

  function closePopup() {
    props.setPopup(false);
    props.setFormPopup(false);
  }

  function handleRegisterPopup() {
    props.setRegisterPopup(!props.isRegisterPopupOpen);
  }

  function handleRegister() {
    if (props.isRegisterPopupOpen) {
      return (
        <>
          <h2 className="popup__title">Sign up</h2>
          <form
            onChange={() => registerFormChange()}
            onSubmit={handleRegisterSubmit}
            className="popup__form form"
          >
            <label className="form__label" htmlFor="register-email">
              Email
            </label>
            <input
              className="form__input"
              type="email"
              id="register-email"
              ref={emailRef}
              placeholder="Email"
              required
            ></input>
            {errors.email ? (
              <span className="form__error">{errors.email}</span>
            ) : (
              ""
            )}

            <label className="form__label" htmlFor="register-password">
              Password
            </label>
            <input
              className="form__input"
              type="password"
              id="register-password"
              ref={passwordRef}
              placeholder="Password"
              required
            ></input>
            {errors.password ? (
              <span className="form__error">{errors.password}</span>
            ) : (
              ""
            )}

            <label className="form__label" htmlFor="register-username">
              Username
            </label>
            <input
              className="form__input"
              type="text"
              id="register-username"
              ref={nameRef}
              placeholder="Username"
              required
            ></input>
            {errors.username ? (
              <span className="form__error">{errors.username}</span>
            ) : (
              ""
            )}
            <button
              type="submit"
              className={`popup__submit
              ${!errors ? "popup__submit_active" : ""}`}
            >
              {props.isRegisterPopupOpen ? "Sign up" : "Sign in"}
            </button>
          </form>

          <p className="popup__form-text">
            or&nbsp;
            <button
              onClick={handleRegisterPopup}
              className="popup__form-button"
            >
              Sign in
            </button>
          </p>
        </>
      );
    } else {
      return (
        <>
          <h2 className="popup__title">Sign in</h2>
          <form
            onChange={signinFormChange}
            onSubmit={handleSigninSubmit}
            className="popup__form form"
          >
            <label className="form__label" htmlFor="register-email">
              Email
            </label>
            <input
              className="form__input"
              type="email"
              id="register-email"
              ref={emailRef}
              placeholder="Email"
              required
            ></input>
            {errors.email ? (
              <span className="form__error">{errors.email}</span>
            ) : (
              ""
            )}

            <label className="form__label" htmlFor="register-password">
              Password
            </label>
            <input
              className="form__input"
              type="password"
              id="register-password"
              ref={passwordRef}
              placeholder="Password"
              required
            ></input>
            {errors.password ? (
              <span className="form__error">{errors.password}</span>
            ) : (
              ""
            )}

            <button
              type="submit"
              className={`popup__submit
              ${!errors ? "popup__submit_active" : ""}`}
            >
              {props.isRegisterPopupOpen ? "Sign up" : "Sign in"}
            </button>
          </form>

          <p className="popup__form-text">
            or&nbsp;
            <button
              onClick={handleRegisterPopup}
              className="popup__form-button"
            >
              Sign up
            </button>
          </p>
        </>
      );
    }
  }

  return <>{props.isFormPopupOpen ? handleRegister() : ""}</>;
};

export default PopupWithForm;
