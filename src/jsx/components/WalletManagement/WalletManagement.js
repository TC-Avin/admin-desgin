import React, { useState, useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import  {Dropdown} from 'react-bootstrap';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Dropdown, Tab, Nav, Modal } from "react-bootstrap";
import qrcode from "../../../images/qr.png";
//import logo from "../../../../../images/logo.png";
import logoText from "../../../images/logo-text.png";
import "react-calendar/dist/Calendar.css";

///Images
import bg1 from "../../../images/big/img1.jpg";

const WalletManagement = () => {
  const [postModal, setPostModal] = useState(false);
  const [invoiceModal, setInvoicePostModal] = useState(false);

  const [data, setData] = useState(
    document.querySelectorAll("#example2_wrapper tbody tr")
  );
  const sort = 5;
  const activePag = useRef(0);
  const [test, settest] = useState(0);

  // Active data
  const chageData = (frist, sec) => {
    for (var i = 0; i < data.length; ++i) {
      if (i >= frist && i < sec) {
        data[i].classList.remove("d-none");
      } else {
        data[i].classList.add("d-none");
      }
    }
  };
  useEffect(() => {
    setData(document.querySelectorAll("#example2_wrapper tbody tr"));
    //chackboxFun();
  }, [test]);
  // const { changeBackground } = useContext(ThemeContext);
  // useEffect(() => {
  // 	changeBackground({ value: "light", label: "Light" });
  // }, []);
  // const [value, onChange] = useState(new Date());
  // Active pagginarion
  activePag.current === 0 && chageData(0, sort);
  // paggination
  let paggination = Array(Math.ceil(data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  // Active paggination & chage data
  const onClick = (i) => {
    activePag.current = i;
    chageData(activePag.current * sort, (activePag.current + 1) * sort);
    settest(i);
  };

  return (
    <>
      <div className="row">
        <div className="table-responsive">
          <div id="example2_wrapper" className="dataTables_wrapper no-footer">
            <table
              id="example2"
              className="table card-table default-table display mb-4 dataTablesCard dataTable no-footer"
            >
              <thead>
                <tr role="row">
                  <th className="sorting_asc">User</th>
                  <th className="sorting">Date</th>
                  <th className="sorting">Plan Type</th>
                  <th className="sorting">Txn ID</th>
                  <th className="sorting">Payment Mode</th>
                  <th className="sorting">Order ID</th>
                  <th className="sorting">Status</th>
                  <th className="sorting">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" className="odd">
                  <td>
                    <div className="media-bx">
                      {/* <img className="me-3 rounded" src={pic1} alt="" /> */}
                      <div>
                        {/* <span className="text-primary">#GS-2234</span> */}
                        <h4 className="mb-0 mt-1">
                          <Link
                            onClick={() => setPostModal(true)}
                            className="text-blue"
                          >
                            Yonna
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>Oct 24th, 2020</h5>
                      <span className="fs-14">08:29 AM</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5 class="badge light badge-success">
                        <i class="fa fa-circle text-success me-1"></i>Premium
                      </h5>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>rghf6574hfgy</h5>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>PayPal</h5>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>5465</h5>
                    </div>
                  </td>
                  <td>
                    <span class="badge light badge-success">
                      <i class="fa fa-circle text-success me-1"></i>
                      successfull
                    </span>
                  </td>
                  <td>
                    <Link
                      onClick={() => setInvoicePostModal(true)}
                      className="btn-link"
                    >
                      View Invoice
                    </Link>
                  </td>
                </tr>
                <tr role="row" className="even">
                  <td>
                    <div className="media-bx">
                      {/* <img className="me-3 rounded" src={pic1} alt="" /> */}
                      <div>
                        {/* <span className="text-primary">#GS-2234</span> */}
                        <h4 className="mb-0 mt-1">
                          <Link
                            onClick={() => setPostModal(true)}
                            className="text-blue"
                          >
                            Yonna
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>Oct 24th, 2020</h5>
                      <span className="fs-14">08:29 AM</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5 class="badge light badge-danger">
                        <i class="fa fa-circle text-danger me-1"></i>Free
                      </h5>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>rghf6574hfgy</h5>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>PayPal</h5>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>5465</h5>
                    </div>
                  </td>
                  <td>
                    <span class="badge light badge-success">
                      <i class="fa fa-circle text-success me-1"></i>
                      successfull
                    </span>
                  </td>
                  <td>
                    <Link
                      onClick={() => setInvoicePostModal(true)}
                      className="btn-link"
                    >
                      View Invoice
                    </Link>
                  </td>
                </tr>
                <tr role="row" className="odd">
                  <td>
                    <div className="media-bx">
                      {/* <img className="me-3 rounded" src={pic1} alt="" /> */}
                      <div>
                        {/* <span className="text-primary">#GS-2234</span> */}
                        <h4 className="mb-0 mt-1">
                          <Link
                            onClick={() => setPostModal(true)}
                            className="text-blue"
                          >
                            Yonna
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>Oct 24th, 2020</h5>
                      <span className="fs-14">08:29 AM</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5 class="badge light badge-success">
                        <i class="fa fa-circle text-success me-1"></i>Premium
                      </h5>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>rghf6574hfgy</h5>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>PayPal</h5>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>5465</h5>
                    </div>
                  </td>
                  <td>
                    <span class="badge light badge-success">
                      <i class="fa fa-circle text-success me-1"></i>
                      successfull
                    </span>
                  </td>
                  <td>
                    <Link
                      onClick={() => setInvoicePostModal(true)}
                      className="btn-link"
                    >
                      View Invoice
                    </Link>
                  </td>
                </tr>
                <tr role="row" className="even">
                  <td>
                    <div className="media-bx">
                      {/* <img className="me-3 rounded" src={pic1} alt="" /> */}
                      <div>
                        {/* <span className="text-primary">#GS-2234</span> */}
                        <h4 className="mb-0 mt-1">
                          <Link
                            onClick={() => setPostModal(true)}
                            className="text-blue"
                          >
                            Yonna
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>Oct 24th, 2020</h5>
                      <span className="fs-14">08:29 AM</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5 class="badge light badge-success">
                        <i class="fa fa-circle text-success me-1"></i>Premium
                      </h5>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>rghf6574hfgy</h5>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>PayPal</h5>
                    </div>
                  </td>
                  <td>
                    <div>
                      <h5>5465</h5>
                    </div>
                  </td>
                  <td>
                    <span class="badge light badge-success">
                      <i class="fa fa-circle text-success me-1"></i>
                      successfull
                    </span>
                  </td>
                  <td>
                    <Link
                      onClick={() => setInvoicePostModal(true)}
                      className="btn-link"
                    >
                      View Invoice
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
              <div className="dataTables_info">
                Showing {activePag.current * sort + 1} to{" "}
                {data.length > (activePag.current + 1) * sort
                  ? (activePag.current + 1) * sort
                  : data.length}{" "}
                of {data.length} entries
              </div>
              <div
                className="dataTables_paginate paging_simple_numbers"
                id="example2_paginate"
              >
                <Link
                  className="paginate_button previous disabled"
                  to="/wallet-management"
                  onClick={() =>
                    activePag.current > 0 && onClick(activePag.current - 1)
                  }
                >
                  <i className="fa fa-angle-double-left" aria-hidden="true"></i>
                </Link>
                <span>
                  {paggination.map((number, i) => (
                    <Link
                      key={i}
                      to="/wallet-management"
                      className={`paginate_button  ${
                        activePag.current === i ? "current" : ""
                      } `}
                      onClick={() => onClick(i)}
                    >
                      {number}
                    </Link>
                  ))}
                </span>

                <Link
                  className="paginate_button next"
                  to="/wallet-management"
                  onClick={() =>
                    activePag.current + 1 < paggination.length &&
                    onClick(activePag.current + 1)
                  }
                >
                  <i
                    className="fa fa-angle-double-right"
                    aria-hidden="true"
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal className="modal fade" show={postModal} onHide={setPostModal}>
        <div className="" role="document">
          <div className="">
            <form>
              <div className="modal-header">
                <h4 className="modal-title fs-20">User Detail</h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setPostModal(false)}
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body" style={{ padding: 0 }}>
                <i className="flaticon-cancel-12 close"></i>
                <div className="add-contact-box">
                  <div className="add-contact-content">
                    <div className="col-12">
                      <div
                        className="card overflow-hidden"
                        style={{ borderRadius: 0, boxShadow: "none" }}
                      >
                        <div
                          className="text-center p-3 overlay-box "
                          style={{ backgroundImage: `url(${bg1})` }}
                        >
                          {/* <div className="profile-photo">
												<img
												src={profile}
												width="100"
												className="m-auto img-fluid rounded-circle d-block"
												alt=""
												/>
											</div> */}
                          <h3 className="mt-3 mb-1 text-white">User Name</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="mb-0">Email</span>{" "}
                            <strong className="text-muted">
                              user@gmail.com{" "}
                            </strong>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="mb-0">Login IP</span>{" "}
                            <strong className="text-muted">
                              150.152.15.2{" "}
                            </strong>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="mb-0">Available Credits</span>{" "}
                            <strong className="text-muted">650 </strong>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="mb-0">Subscription Expire</span>{" "}
                            <strong className="text-muted">
                              24th oct 2022{" "}
                            </strong>
                          </li>
                          <li className="list-group-item d-flex justify-content-between">
                            <span className="mb-0">Team Members</span>{" "}
                            <strong className="text-muted">5 </strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="modal-footer"> 
                                    <button type="button" onClick={()=> setPostModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Close</button>      
								</div> */}
            </form>
          </div>
        </div>
      </Modal>

      <Modal
        className="modal fade bd-example-modal-lg"
        size="lg"
        show={invoiceModal}
        onHide={setInvoicePostModal}
      >
        <div className="" role="document">
          <div className="">
            <form>
              <div className="modal-header">
                <h4 className="modal-title fs-20">Invoice Detail</h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setInvoicePostModal(false)}
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body" style={{ padding: 0 }}>
                <i className="flaticon-cancel-12 close"></i>
                <div className="add-contact-box">
                  <div className="add-contact-content">
                    <div className="col-12">
                      <div
                        className="card overflow-hidden"
                        style={{ borderRadius: 0, boxShadow: "none" }}
                      >
                        <div className="card-header">
                          {" "}
                          Invoice: 105 <strong>24/03/2022</strong>{" "}
                          <span className="float-right">
                            <strong>Status:</strong> Generate
                          </span>{" "}
                        </div>
                        <div className="card-body">
                          <div className="row mb-5">
                            <div className="mt-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <h6>To:</h6>
                              <div>
                                {" "}
                                <strong>User Name</strong>{" "}
                              </div>
                              <div>User ID: DBI-11</div>
                              <div>Email: marek@daniel.com</div>
                            </div>
                            <div className="mt-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-lg-end justify-content-md-center justify-content-xs-start">
                              <div className="row align-items-center">
                                <div className="col-sm-12">
                                  <div className="brand-logo mb-3">
                                    {/* <img className="logo-abbr me-2" src={logo} alt="" style={{width:'50px'}}  /> */}
                                    {/* <img className="logo-compact" src={logoText} alt="" style={{width:'110px'}} /> */}
                                    <h2>DocDBI</h2>
                                  </div>
                                  <span>
                                    Address: Lorem Ipsum generated text
                                  </span>
                                </div>
                                {/* <div className="col-sm-3 mt-3">
													{" "}
													<img
														src={qrcode}
														className="img-fluid width110"
														alt=""
													/>{" "}
													</div> */}
                              </div>
                            </div>
                          </div>
                          <div className="table-responsive">
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  <th className="center">#</th>
                                  <th>Item</th>
                                  <th>Description</th>
                                  <th className="right">Cost</th>
                                  <th className="right">Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="center">1</td>
                                  <td className="left strong">Plan Name</td>
                                  <td className="left">
                                    Subscription Plan Purchase
                                  </td>
                                  <td className="right">$999,00</td>
                                  <td className="right">$999,00</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-sm-5"> </div>
                            <div className="col-lg-4 col-sm-5 ms-auto">
                              <table className="table table-clear">
                                <tbody>
                                  <tr>
                                    <td className="left">
                                      <strong>Subtotal</strong>
                                    </td>
                                    <td className="right">$999,00</td>
                                  </tr>
                                  <tr>
                                    <td className="left">
                                      <strong>Discount (20%)</strong>
                                    </td>
                                    <td className="right">$1,699,40</td>
                                  </tr>
                                  <tr>
                                    <td className="left">
                                      <strong>VAT (10%)</strong>
                                    </td>
                                    <td className="right">$679,76</td>
                                  </tr>
                                  <tr>
                                    <td className="left">
                                      <strong>Total</strong>
                                    </td>
                                    <td className="right">
                                      <strong>$7.477,36</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="modal-footer"> 
                                    <button type="button" onClick={()=> setPostModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Close</button>      
								</div> */}
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default WalletManagement;
