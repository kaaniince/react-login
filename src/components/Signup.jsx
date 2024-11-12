import React from "react";
import { useFormik } from "formik";
import validationSchema from "./Validations";
import "../index.css";

function Signup() {
  const { handleSubmit, values, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      onSubmit: (value) => {
        console.log(value);
      },
      validationSchema,
    });

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          className="input-field"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <div className="error-message">{errors.email}</div>
        )}

        <label>Password</label>
        <input
          className="input-field"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="error-message">{errors.password}</div>
        )}

        <label>Confirm Password</label>
        <input
          className="input-field"
          name="passwordConfirm"
          type="password"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error-message">{errors.passwordConfirm}</div>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Signup;
