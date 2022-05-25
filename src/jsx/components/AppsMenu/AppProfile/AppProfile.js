import React, { Fragment, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import PageTitle from "../../../layouts/PageTitle";
import { Formik } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
	
	password: Yup.string()
	  .min(5, "Your password must be at least 5 characters long")
	  .max(50, "Your password must be at least 5 characters long")
	  .required("Please provide a password"),
	  newpassword: Yup.string()
	  .min(5, "Your newpassword must be at least 5 characters long")
	  .max(50, "Your newpassword must be at least 5 characters long")
	  .required("Please provide a newpassword"),
	  confirmpassword: Yup.string()
	  .min(5, "Your confirmpassword must be at least 5 characters long")
	  .max(50, "Your confirmpassword must be at least 5 characters long")
	  .required("Please provide a confirmpassword"),
  });

const AppProfile = () => {
  
  const [showPassword, setShowPassword] = useState(false);
 
  return (
    <Fragment>

      <div className="row">
        
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Change Password</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <Formik
                  initialValues={{ username: "", password: "" }}
                  validationSchema={loginSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                  
                      <div
                        className={`form-group mb-3 ${
                          values.password
                            ? errors.password
                              ? "is-invalid"
                              : "is-valid"
                            : ""
                        }`}
                      >
                        <label className="text-label">Old Password *</label>
                        <div className="input-group transparent-append mb-2">
                          
                            <span className="input-group-text">
                              {" "}
                              <i className="fa fa-lock" />{" "}
                            </span>
                          
                          <input
                            type={`${showPassword ? "text" : "password"}`}
                            className="form-control"
                            id="val-password1"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Choose a safe one.."
                          />

                          <div
                            className="input-group-text show-pass"
                            onClick={() => setShowPassword(!showPassword)}
                          >

                              {" "}
                              <i className="fa fa-eye-slash" />
                            
                          </div>
                          <div
                            id="val-username1-error"
                            className="invalid-feedback animated fadeInUp"
                            style={{ display: "block" }}
                          >
                            {errors.password && errors.password}
                          </div>
                        </div>
                      </div>
					  <div
                        className={`form-group mb-3 ${
                          values.newpassword
                            ? errors.newpassword
                              ? "is-invalid"
                              : "is-valid"
                            : ""
                        }`}
                      >
                        <label className="text-label">New Password *</label>
                        <div className="input-group transparent-append mb-2">
                          
                            <span className="input-group-text">
                              {" "}
                              <i className="fa fa-lock" />{" "}
                            </span>
                          
                          <input
                            type={`${showPassword ? "text" : "password"}`}
                            className="form-control"
                            id="val-newpassword1"
                            name="newpassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.newpassword}
                            placeholder="Choose a safe one.."
                          />

                          <div
                            className="input-group-text show-pass"
                            onClick={() => setShowPassword(!showPassword)}
                          >

                              {" "}
                              <i className="fa fa-eye-slash" />
                            
                          </div>
                          <div
                            id="val-newpassword1-error"
                            className="invalid-feedback animated fadeInUp"
                            style={{ display: "block" }}
                          >
                            {errors.newpassword && errors.newpassword}
                          </div>
                        </div>
                      </div>
					  <div
                        className={`form-group mb-3 ${
                          values.confirmpassword
                            ? errors.confirmpassword
                              ? "is-invalid"
                              : "is-valid"
                            : ""
                        }`}
                      >
                        <label className="text-label">Confirm Password *</label>
                        <div className="input-group transparent-append mb-2">
                          
                            <span className="input-group-text">
                              {" "}
                              <i className="fa fa-lock" />{" "}
                            </span>
                          
                          <input
                            type={`${showPassword ? "text" : "password"}`}
                            className="form-control"
                            id="val-confirmpassword1"
                            name="confirmpassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmpassword}
                            placeholder="Choose a safe one.."
                          />

                          <div
                            className="input-group-text show-pass"
                            onClick={() => setShowPassword(!showPassword)}
                          >

                              {" "}
                              <i className="fa fa-eye-slash" />
                            
                          </div>
                          <div
                            id="val-confirmpassword-error"
                            className="invalid-feedback animated fadeInUp"
                            style={{ display: "block" }}
                          >
                            {errors.confirmpassword && errors.confirmpassword}
                          </div>
                        </div>
                      </div>
                     

                      <button
                        type="submit"
                        className="btn me-3 btn-primary"
                        disabled={isSubmitting}
                      >
                        Change Password
                      </button>
                      
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AppProfile;
