import React, { Fragment } from "react";
import { Form } from "react-bootstrap";

const Billpayment = () => {
   return (
      <Fragment>
         <div className="row">
            <div className="col-xl-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
                        <div className="col-md-12 order-md-1">
                           <h4 className="mb-3">Billing address</h4>
                           <form className="needs-validation" noValidate="">
                              <div className="row">
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">
                                       First name
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                        <i className="fa fa-user" />{" "}
                                        </span>
                                        <input
                                        type="text"
                                        className="form-control"
                                        id="firstName"
                                        placeholder="Firstname..."
                                        required
                                        />
                                    </div>
                                    <div className="invalid-feedback">
                                       Valid first name is required.
                                    </div>
                                 </div>
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                        <i className="fa fa-user" />{" "}
                                        </span>
                                        <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        placeholder="Lastname..."
                                        required
                                        />
                                    </div>
                                    <div className="invalid-feedback">
                                       Valid last name is required.
                                    </div>
                                 </div>
                              </div>

                              <div className="row">
                                  <div className="col-md-6 mb-3 mb-3">
                                    <label htmlFor="username">Username</label>
                                    <div className="input-group">
                                        <span className="input-group-text">@</span>
                                        <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Username..."
                                        required
                                        />
                                    </div>
                                  </div>
                                  <div className="col-md-6 mb-3 mb-3">
                                    <label htmlFor="email">
                                        Email 
                                        <span className="text-muted">
                                        (Optional)
                                        </span>
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                        <i className="fa fa-envelope" />{" "}
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Email..."
                                        />
                                    </div>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for
                                        shipping updates.
                                    </div>
                                  </div>
                              </div>

                              <div className="row">
                                  <div className="col-md-6 mb-3">
                                        <label htmlFor="address">Address</label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="fa fa-users" />{" "}
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address"
                                                placeholder="Address..."
                                                required=""
                                            />
                                        </div>
                                        <div className="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                  </div>
                                  <div className="col-md-6 mb-3">
                                        <label htmlFor="address2">
                                            Address 2
                                            <span className="text-muted">
                                            (Optional)
                                            </span>
                                        </label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <i className="fa fa-users" />{" "}
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="address2"
                                                placeholder="Address..."
                                            />
                                        </div>
                                  </div>
                              </div>

                              <div className="row">
                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="state">Country</label>
                                    <Form.Control as="select">
                                       <option style={{ color: "blue" }}>
                                          Choose...
                                       </option>
                                       <option>United States</option>
                                    </Form.Control>

                                    <div className="invalid-feedback">
                                       Please provide a valid state.
                                    </div>
                                 </div>
                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="state">State</label>
                                    <Form.Control as="select">
                                       <option>Choose...</option>
                                       <option>California</option>
                                    </Form.Control>

                                    <div className="invalid-feedback">
                                       Please provide a valid state.
                                    </div>
                                 </div>
                                 <div className="col-md-3 mb-3">
                                    <label htmlFor="zip">Zip</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="zip"
                                       placeholder=""
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Zip code required.
                                    </div>
                                 </div>
                              </div>
                              <hr className="mb-4" />
                              <div className="form-check custom-checkbox mb-2">
                                 <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="same-address"
                                 />
                                 <label
                                    className="form-check-label"
                                    htmlFor="same-address"
                                 >
                                    Shipping address is the same as my billing
                                    address
                                 </label>
                              </div>
                              <div className="form-check custom-checkbox mb-2">
                                 <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="save-info"
                                 />
                                 <label
                                    className="form-check-label"
                                    htmlFor="save-info"
                                 >
                                    Save this information for next time
                                 </label>
                              </div>
                              <hr className="mb-4" />

                              <h4 className="mb-3">Payment</h4>

                              <div className="d-block my-3">
                                 <div className="form-check custom-radio mb-2">
                                    <input
                                       id="credit"
                                       name="paymentMethod"
                                       type="radio"
                                       className="form-check-input"
                                       required
									   checked
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="credit"
                                    >
                                       Credit card
                                    </label>
                                 </div>
                                 <div className="form-check custom-radio mb-2">
                                    <input
                                       id="debit"
                                       name="paymentMethod"
                                       type="radio"
                                       className="form-check-input"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="debit"
                                    >
                                       Debit card
                                    </label>
                                 </div>
                                 <div className="form-check custom-radio mb-2">
                                    <input
                                       id="paypal"
                                       name="paymentMethod"
                                       type="radio"
                                       className="form-check-input"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="paypal"
                                    >
                                       Paypal
                                    </label>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-name">
                                       Name on card
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="cc-name"
                                       placeholder=""
                                       required
                                    />
                                    <small className="text-muted">
                                       Full name as displayed on card
                                    </small>
                                    <div className="invalid-feedback">
                                       Name on card is required
                                    </div>
                                 </div>
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-number">
                                       Credit card number
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="cc-number"
                                       placeholder=""
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Credit card number is required
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-expiration">
                                       Expiration
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="cc-expiration"
                                       placeholder=""
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Expiration date required
                                    </div>
                                 </div>
                                 <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-expiration">CVV</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="cc-cvv"
                                       placeholder=""
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Security code required
                                    </div>
                                 </div>
                              </div>
                              <hr className="mb-4" />
                              <button
                                 className="btn btn-primary btn-lg btn-block"
                                 type="submit"
                              >
                                 Continue to checkout
                              </button>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Billpayment;
