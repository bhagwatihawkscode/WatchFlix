import React from "react";
import "./Authent.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  // Use Formik to handle form state and submission
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });
  return (
    <div className="main-login-container">
      <div className="login-container">
        <header className="login-header-1">
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="svg-that-hide"
            >
              <path
                d="M24 10.6667H25.3333C26.7478 10.6667 28.1044 11.2287 29.1046 12.2288C30.1048 13.229 30.6667 14.5856 30.6667 16.0001C30.6667 17.4146 30.1048 18.7711 29.1046 19.7713C28.1044 20.7715 26.7478 21.3334 25.3333 21.3334H24"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.66666 10.6667H24V22.6667C24 24.0812 23.4381 25.4378 22.4379 26.438C21.4377 27.4382 20.0812 28.0001 18.6667 28.0001H8C6.58551 28.0001 5.22896 27.4382 4.22876 26.438C3.22857 25.4378 2.66666 24.0812 2.66666 22.6667V10.6667Z"
                fill="white"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 1.33325V5.33325"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3333 1.33325V5.33325"
                stroke="#7900C2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.6667 1.33325V5.33325"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span
              style={{ color: "#FFF", fontSize: "2rem", margin: "10px 20px" }}
            >
              WATCHFLIX
            </span>
          </Link>
        </header>

        <div className="main-form-container">
          <div className="login">
            <form className="signin-form" onSubmit={formik.handleSubmit}>
              <h1 className="title">Sign In</h1>

              <div className="field">
                <input
                  type="text"
                  className="text-input"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <span className="floating-label">
                  Email address or phone number
                </span>
                {formik.touched.email && formik.errors.email ? (
                  <div className="error-message">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="field">
                <input
                  type="password"
                  className="text-input"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <span className="floating-label test">Password</span>
                {formik.touched.password && formik.errors.password ? (
                  <div className="error-message">{formik.errors.password}</div>
                ) : null}
              </div>

              <button className="signin-btn">Sign In</button>

              <div className="onboarding">
                <p style={{ color: "#FFF" }}>
                  New to Netflix?{" "}
                  <Link to={"/signup"} className="Links">
                    Sign up now.
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
