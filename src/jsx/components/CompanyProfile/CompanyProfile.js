import React, { useState, useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import  {Dropdown} from 'react-bootstrap';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Dropdown, Tab, Nav, Modal } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";

///Images

import bg1 from "../../../images/big/img1.jpg";
import Invoice from "../AppsMenu/Shop/Invoice/Invoice";
import "../../../css/style.css";

///Import

//Import

// import Button from '../bootstrap/Button';

const DropdownAction = (props) => {
  console.log(
    "🚀 ~ file: CompanyProfile.js ~ line 22 ~ DropdownAction ~ props",
    props
  );
  return (
    <>
      <Dropdown className="dropdown">
        <Dropdown.Toggle
          as="div"
          className="btn-link i-false"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
              stroke="#262626"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z"
              stroke="#262626"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z"
              stroke="#262626"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu">
          {props.Action.map((data) => {
            return (
              <Dropdown.Item className="dropdown-item">{data}</Dropdown.Item>
            );
          })}
          {/* <Dropdown.Item className="dropdown-item">Close</Dropdown.Item>
					<Dropdown.Item className="dropdown-item">Resolve</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const CompanyProfile = () => {
  const [postModal, setPostModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  const [resolvedModal, setResolvedModal] = useState(false);
  const [data, setData] = useState(
    document.querySelectorAll("#example2_wrapper tbody tr")
  );
  const sort = 10;
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
  const chackbox = document.querySelectorAll(".sorting_1 input");
  const motherChackBox = document.querySelector(".sorting_asc input");
  const chackboxFun = (type) => {
    for (let i = 0; i < chackbox.length; i++) {
      const element = chackbox[i];
      if (type === "all") {
        if (motherChackBox.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!element.checked) {
          motherChackBox.checked = false;
          break;
        } else {
          motherChackBox.checked = true;
        }
      }
    }
  };
  return (
    <>
      <div className="row">
        {/* <div className='col-md-4 col-sm-12'>
                    <div className="card overflow-hidden">
                        <div
                        className="text-center p-3 overlay-box "
                        style={{ backgroundImage: `url(${bg1})` }}
                        >
                       
                        <h3 className="mt-3 mb-1 text-white">User Name</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="mb-0">Email</span>{" "}
                            <strong className="text-muted">user@gmail.com </strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="mb-0">Login IP</span>{" "}
                            <strong className="text-muted">150.152.15.2 </strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="mb-0">Available Credits</span>{" "}
                            <strong className="text-muted">650 </strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="mb-0">Subscription Expire</span>{" "}
                            <strong className="text-muted">24th oct 2022 </strong>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span className="mb-0">Team Members</span>{" "}
                            <strong className="text-muted">5 </strong>
                        </li>
                        </ul>
                    </div>    
                </div>				 */}
        <div className="col-md-12 col-sm-12">
          <Tab.Container defaultActiveKey="All">
            <div className="row">
              <div className="col-xl-12">
                <div className="d-flex mb-4 justify-content-between align-items-center flex-wrap">
                  <div className="card-tabs mt-3 mt-sm-0 mb-xxl-0 mb-4">
                    <Nav as="ul" className="nav nav-tabs">
                      <Nav.Item as="li" className="nav-item">
                        <Nav.Link className="nav-link" eventKey="All">
                          Info
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="nav-item">
                        <Nav.Link className="nav-link" eventKey="Pending">
                          Invoices
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="nav-item">
                        <Nav.Link className="nav-link" eventKey="Booked">
                          Transactions
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="nav-item">
                        <Nav.Link className="nav-link" eventKey="Plan">
                          Subscription
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="nav-item">
                        <Nav.Link className="nav-link" eventKey="Team">
                          Team Member
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li" className="nav-item">
                        <Nav.Link className="nav-link" eventKey="Activity">
                          Activity Log
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
                <Tab.Content>
                  <Tab.Pane eventKey="All">
                    {/* <div className="table-responsive"> */}
                    {/* <div id="example2_wrapper" className="dataTables_wrapper no-footer">			 */}
                    <div className="row">
                      <div className="col-md-4 col-sm-12">
                        <div className="card overflow-hidden">
                          <div
                            className="text-center p-3 overlay-box "
                            style={{ backgroundImage: `url(${bg1})` }}
                          >
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
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="mb-0">Billing Cycle</span>{" "}
                              <strong className="text-muted">Monthly</strong>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                              <span className="mb-0">Subscription name</span>{" "}
                              <strong className="text-muted">Gold</strong>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-xl-8 col-sm-12">
                        <div className="card">
                          <div className="card-header">
                            <div>
                              <h4 className="card-title">Edit Details</h4>
                            </div>
                            <div className="">
                              <Dropdown className="">
                                <Dropdown.Toggle
                                  variant=""
                                  className="btn btn-primary "
                                  type="button"
                                  data-toggle="dropdown"
                                >
                                  Dropdown
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                  >
                                    Active
                                  </Dropdown.Item>
                                  <Dropdown.Item
                                    className="dropdown-item"
                                    to="#"
                                  >
                                    Deactive
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="basic-form">
                              <form onSubmit={(e) => e.preventDefault()}>
                                <div className="row">
                                  <div className="form-group mb-3 col-md-6">
                                    <label>Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Name"
                                    />
                                  </div>
                                  <div className="form-group mb-3 col-md-6">
                                    <label>Email</label>
                                    <input
                                      type="email"
                                      className="form-control"
                                      placeholder="Email"
                                    />
                                  </div>
                                  <div className="form-group mb-3 col-md-6">
                                    <label>Change Password</label>
                                    <input
                                      type="password"
                                      className="form-control"
                                      placeholder="Password"
                                    />
                                  </div>
                                  <div className="form-group mb-3 col-md-6">
                                    <label>Company Name</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      placeholder="Company Name"
                                    />
                                  </div>
                                </div>
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Save
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
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
													to="/ticket-management"
													onClick={() =>
													   activePag.current > 0 &&
													   onClick(activePag.current - 1)
													}
												 >
													<i className="fa fa-angle-double-left" aria-hidden="true"></i>
												</Link>
												<span>
													{paggination.map((number, i) => (
													   <Link
														  key={i}
														  to="/ticket-management"
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
													to="/ticket-management"
													onClick={() =>
													   activePag.current + 1 < paggination.length &&
													   onClick(activePag.current + 1)
													}
												>
													<i className="fa fa-angle-double-right" aria-hidden="true"></i>
												</Link>
											</div>
										</div> */}

                    {/* </div> */}
                    {/* </div> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="Pending">
                    <div className="table-responsive">
                      <div
                        id="example2_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <table
                          id="example2"
                          className="table card-table default-table display mb-4 dataTablesCard dataTable no-footer"
                        >
                          <thead>
                            <tr role="row">
                              <th className="sorting_asc">Username</th>
                              <th className="sorting">Billing type</th>
                              <th className="sorting">Date/Time</th>
                              <th className="sorting">Amt</th>
                              <th className="sorting">Status</th>
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
                                  <h5>Subscription</h5>
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
                                  <h5>52638</h5>
                                </div>
                              </td>

                              <td>
                                <span class="badge light badge-success">
                                  <i class="fa fa-circle text-success me-1"></i>
                                  Paid
                                </span>
                              </td>
                              <td>
                                <Link
                                  onClick={() => setResolvedModal(true)}
                                  className="btn-link"
                                >
                                  View invoice
                                </Link>
                              </td>
                              <td>
                                <DropdownAction
                                  Action={["Mark as paid", "Download"]}
                                />{" "}
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
                                  <h5>Credit</h5>
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
                                  <h5>52638</h5>
                                </div>
                              </td>

                              <td>
                                <span class="badge light badge-success">
                                  <i class="fa fa-circle text-success me-1"></i>
                                  {/* Resolved */}
                                  Unpaid
                                </span>
                              </td>
                              <td>
                                <Link
                                  onClick={() => setResolvedModal(true)}
                                  className="btn-link"
                                >
                                  View invoice
                                </Link>
                              </td>
                              {/* <td><DropdownAction /> </td> */}
                              <td>
                                <DropdownAction
                                  Action={["Mark as paid", "Download"]}
                                />{" "}
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
                                  <h5>Team Member</h5>
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
                                  <h5>52638</h5>
                                </div>
                              </td>

                              <td>
                                <span class="badge light badge-success">
                                  <i class="fa fa-circle text-success me-1"></i>
                                  {/* Resolved */}
                                  Paid
                                </span>
                              </td>
                              <td>
                                <Link
                                  onClick={() => setResolvedModal(true)}
                                  className="btn-link"
                                >
                                  View invoice
                                </Link>
                              </td>
                              {/* <td><DropdownAction /> </td> */}
                              <td>
                                <DropdownAction
                                  Action={["Mark as paid", "Download"]}
                                />{" "}
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
                                  <h5>Team Member</h5>
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
                                  <h5>52638</h5>
                                </div>
                              </td>

                              <td>
                                <span class="badge light badge-success">
                                  <i class="fa fa-circle text-success me-1"></i>
                                  {/* Resolved */}
                                  Unpaid
                                </span>
                              </td>
                              <td>
                                <Link
                                  onClick={() => setResolvedModal(true)}
                                  className="btn-link"
                                >
                                  View invoice
                                </Link>
                              </td>
                              {/* <td><DropdownAction /> </td> */}
                              <td>
                                <DropdownAction
                                  Action={["Mark as paid", "Download"]}
                                />{" "}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                          <div className="dataTables_info">
                            {/* Showing {activePag.current * sort + 1} to{" "}
												{data.length > (activePag.current + 1) * sort
													? (activePag.current + 1) * sort
													: data.length}{" "}
												of {data.length} entries */}
                            Showing 1 to 5
                          </div>
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="example2_paginate"
                          >
                            <Link
                              className="paginate_button previous disabled"
                              // to="/ticket-management"
                              // onClick={() =>
                              //    activePag.current > 0 &&
                              //    onClick(activePag.current - 1)
                              // }
                            >
                              <i
                                className="fa fa-angle-double-left"
                                aria-hidden="true"
                              ></i>
                            </Link>
                            <span>
                              {paggination.map((number, i) => (
                                <Link
                                  key={i}
                                  //   to="/ticket-management"
                                  className={`paginate_button  ${
                                    activePag.current === i ? "current" : ""
                                  } `}
                                  //   onClick={() => onClick(i)}
                                >
                                  {number}
                                </Link>
                              ))}
                            </span>

                            <Link
                              className="paginate_button next"
                              // to="/ticket-management"
                              // onClick={() =>
                              //    activePag.current + 1 < paggination.length &&
                              //    onClick(activePag.current + 1)
                              // }
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
                  </Tab.Pane>
                  <Tab.Pane eventKey="Booked">
                    <div className="table-responsive">
                      <div
                        id="example2_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <table
                          id="example2"
                          className="table card-table default-table display mb-4 dataTablesCard dataTable no-footer"
                        >
                          <thead>
                            <tr role="row">
                              <th className="sorting_asc">Name</th>
                              <th className="sorting">Plan</th>
                              <th className="sorting">Date</th>
                              <th className="sorting">Txn ID</th>
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
                                  <h5>Monthly</h5>
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
                                  <h5>52638</h5>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5>145236</h5>
                                </div>
                              </td>

                              <td>
                                <span class="badge light badge-warning">
                                  <i class="fa fa-circle text-warning me-1"></i>
                                  Closed
                                </span>
                              </td>
                              <td>
                                <Link
                                  onClick={() => setResolvedModal(true)}
                                  className="btn-link"
                                >
                                  View invoice
                                </Link>
                              </td>
                              {/* <td><DropdownAction /> </td> */}
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
                                  <h5>Weekly</h5>
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
                                  <h5>52638</h5>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5>145236</h5>
                                </div>
                              </td>

                              <td>
                                <span class="badge light badge-warning">
                                  <i class="fa fa-circle text-warning me-1"></i>
                                  Closed
                                </span>
                              </td>
                              <td>
                                <Link
                                  onClick={() => setResolvedModal(true)}
                                  className="btn-link"
                                >
                                  View invoice
                                </Link>
                              </td>
                              {/* <td><DropdownAction /> </td> */}
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
                                  <h5>Monthly</h5>
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
                                  <h5>52638</h5>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5>145236</h5>
                                </div>
                              </td>

                              <td>
                                <span class="badge light badge-warning">
                                  <i class="fa fa-circle text-warning me-1"></i>
                                  Closed
                                </span>
                              </td>
                              <td>
                                <Link
                                  onClick={() => setResolvedModal(true)}
                                  className="btn-link"
                                >
                                  View invoice
                                </Link>
                              </td>
                              {/* <td><DropdownAction /> </td> */}
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
                                  <h5>Weekly</h5>
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
                                  <h5>52638</h5>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5>145236</h5>
                                </div>
                              </td>

                              <td>
                                <span class="badge light badge-warning">
                                  <i class="fa fa-circle text-warning me-1"></i>
                                  Closed
                                </span>
                              </td>
                              <td>
                                <Link
                                  onClick={() => setResolvedModal(true)}
                                  className="btn-link"
                                >
                                  View invoice
                                </Link>
                              </td>
                              {/* <td><DropdownAction /> </td> */}
                            </tr>
                          </tbody>
                        </table>
                        <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                          <div className="dataTables_info">
                            {/* Showing {activePag.current * sort + 1} to{" "}
												{data.length > (activePag.current + 1) * sort
													? (activePag.current + 1) * sort
													: data.length}{" "}
												of {data.length} entries */}
                            Showing 1 to 5
                          </div>
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="example2_paginate"
                          >
                            <Link
                              className="paginate_button previous disabled"
                              to="/ticket-management"
                              onClick={() =>
                                activePag.current > 0 &&
                                onClick(activePag.current - 1)
                              }
                            >
                              <i
                                className="fa fa-angle-double-left"
                                aria-hidden="true"
                              ></i>
                            </Link>
                            <span>
                              {paggination.map((number, i) => (
                                <Link
                                  key={i}
                                  to="/ticket-management"
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
                              to="/ticket-management"
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
                  </Tab.Pane>
                  <Tab.Pane eventKey="Plan">
                    <div className="table-responsive">
                      <div
                        id="example2_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <table
                          id="example2"
                          className="table card-table default-table display mb-4 dataTablesCard dataTable no-footer"
                        >
                          <thead>
                            <tr role="row">
                              <th className="sorting_asc">Team Member</th>
                              <th className="sorting">Credits</th>
                              <th className="sorting">Overall Package</th>
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
                                  <h5>142536</h5>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5>52638</h5>
                                </div>
                              </td>
                              <td>
                                <DropdownAction Action={["Edit"]} />{" "}
                              </td>
                              {/* <td>
														<span class="badge light badge-danger">
															<i class="fa fa-circle text-danger me-1"></i>
															pending
														</span>
													</td> */}
                              {/* <td><Link onClick={()=> setDetailModal(true)}  className="btn-link">View Details</Link></td> */}
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
                                  <h5>142536</h5>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5>52638</h5>
                                </div>
                              </td>

                              <td>
                                <DropdownAction Action={["Edit"]} />{" "}
                              </td>
                              {/* <td>
														<span class="badge light badge-danger">
															<i class="fa fa-circle text-danger me-1"></i>
															pending
														</span>
													</td> */}
                              {/* <td><Link onClick={()=> setDetailModal(true)} className="btn-link">View Details</Link></td> */}
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
                                  <h5>142536</h5>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5>52638</h5>
                                </div>
                              </td>

                              <td>
                                <DropdownAction Action={["Edit"]} />{" "}
                              </td>
                              {/* <td>
														<span class="badge light badge-danger">
															<i class="fa fa-circle text-danger me-1"></i>
															pending
														</span>
													</td> */}
                              {/* <td><Link onClick={()=> setDetailModal(true)} className="btn-link">View Details</Link></td> */}
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
                                  <h5>142536</h5>
                                </div>
                              </td>
                              <td>
                                <div>
                                  <h5>52638</h5>
                                </div>
                              </td>

                              <td>
                                <DropdownAction Action={["Edit"]} />{" "}
                              </td>
                              {/* <td>
														<span class="badge light badge-danger">
															<i class="fa fa-circle text-danger me-1"></i>
															pending
														</span>
													</td> */}
                              {/* <td><Link onClick={()=> setDetailModal(true)} className="btn-link">View Details</Link></td> */}
                            </tr>
                          </tbody>
                        </table>
                        <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                          <div className="dataTables_info">
                            {/* Showing {activePag.current * sort + 1} to{" "}
												{data.length > (activePag.current + 1) * sort
													? (activePag.current + 1) * sort
													: data.length}{" "}
												of {data.length} entries */}
                            Showing 1 to 5
                          </div>
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="example2_paginate"
                          >
                            <Link
                              className="paginate_button previous disabled"
                              to="/ticket-management"
                              onClick={() =>
                                activePag.current > 0 &&
                                onClick(activePag.current - 1)
                              }
                            >
                              <i
                                className="fa fa-angle-double-left"
                                aria-hidden="true"
                              ></i>
                            </Link>
                            <span>
                              {paggination.map((number, i) => (
                                <Link
                                  key={i}
                                  to="/ticket-management"
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
                              to="/ticket-management"
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
                  </Tab.Pane>
                  <Tab.Pane eventKey="Team">
                    <div className="table-responsive">
                      <div
                        id="example2_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <table
                          id="example2"
                          className="table card-table default-table display mb-4 dataTablesCard dataTable no-footer"
                        >
                          <thead>
                            <tr role="row">
                              <th className="sorting_asc">Member Name</th>
                              <th className="sorting">Available Credits</th>
                              <th className="sorting">Date of Creation</th>
                              <th className="sorting">Credit Expiration</th>
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
                                  <h5>142536</h5>
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
                                  <h5>52638</h5>
                                </div>
                              </td>
                              <td>
                                <DropdownAction
                                  Action={[
                                    "Edit",
                                    "Suspend",
                                    "Block",
                                    "Delete",
                                    "Active/Deactive",
                                  ]}
                                />{" "}
                              </td>
                              {/* <td>
														<span class="badge light badge-danger">
															<i class="fa fa-circle text-danger me-1"></i>
															pending
														</span>
													</td> */}
                              {/* <td><Link onClick={()=> setDetailModal(true)}  className="btn-link">View Details</Link></td> */}
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
                                  <h5>142536</h5>
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
                                  <h5>52638</h5>
                                </div>
                              </td>

                              <td>
                                <DropdownAction
                                  Action={[
                                    "Edit",
                                    "Suspend",
                                    "Block",
                                    "Delete",
                                    "Active/Deactive",
                                  ]}
                                />{" "}
                              </td>
                              {/* <td>
														<span class="badge light badge-danger">
															<i class="fa fa-circle text-danger me-1"></i>
															pending
														</span>
													</td> */}
                              {/* <td><Link onClick={()=> setDetailModal(true)} className="btn-link">View Details</Link></td> */}
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
                                  <h5>142536</h5>
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
                                  <h5>52638</h5>
                                </div>
                              </td>

                              <td>
                                <DropdownAction
                                  Action={[
                                    "Edit",
                                    "Suspend",
                                    "Block",
                                    "Delete",
                                    "Active/Deactive",
                                  ]}
                                />{" "}
                              </td>
                              {/* <td>
														<span class="badge light badge-danger">
															<i class="fa fa-circle text-danger me-1"></i>
															pending
														</span>
													</td> */}
                              {/* <td><Link onClick={()=> setDetailModal(true)} className="btn-link">View Details</Link></td> */}
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
                                  <h5>142536</h5>
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
                                  <h5>52638</h5>
                                </div>
                              </td>

                              <td>
                                <DropdownAction
                                  Action={[
                                    "Edit",
                                    "Suspend",
                                    "Block",
                                    "Delete",
                                    "Active/Deactive",
                                  ]}
                                />{" "}
                              </td>
                              {/* <td>
														<span class="badge light badge-danger">
															<i class="fa fa-circle text-danger me-1"></i>
															pending
														</span>
													</td> */}
                              {/* <td><Link onClick={()=> setDetailModal(true)} className="btn-link">View Details</Link></td> */}
                            </tr>
                          </tbody>
                        </table>
                        <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                          <div className="dataTables_info">
                            {/* Showing {activePag.current * sort + 1} to{" "}
												{data.length > (activePag.current + 1) * sort
													? (activePag.current + 1) * sort
													: data.length}{" "}
												of {data.length} entries */}
                            Showing 1 to 5
                          </div>
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="example2_paginate"
                          >
                            <Link
                              className="paginate_button previous disabled"
                              to="/ticket-management"
                              onClick={() =>
                                activePag.current > 0 &&
                                onClick(activePag.current - 1)
                              }
                            >
                              <i
                                className="fa fa-angle-double-left"
                                aria-hidden="true"
                              ></i>
                            </Link>
                            <span>
                              {paggination.map((number, i) => (
                                <Link
                                  key={i}
                                  to="/ticket-management"
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
                              to="/ticket-management"
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
                  </Tab.Pane>

                  <Tab.Pane eventKey="Activity">
                    <div className="table-responsive">
                      <div
                        id="example2_wrapper"
                        className="dataTables_wrapper no-footer"
                      >
                        <table
                          id="example2"
                          className="table card-table default-table display mb-4 dataTablesCard dataTable no-footer"
                        >
                          <thead>
                            <tr role="row">
                              <th className="sorting_asc">Activity</th>
                              {/* <th className="sorting">Available Credits</th>
													<th className="sorting">Date of Creation</th>
													<th className="sorting">Credit Expiration</th>
													<th className="sorting">Action</th> */}
                            </tr>
                          </thead>
                          <tbody>
                            <tr role="row" className="odd">
                              <td>
                                <ul>
                                  <li>
                                    <div className="timeline-badge primary" />
                                    <Link
                                      className="timeline-panel c-pointer text-muted"
                                      to="#"
                                    >
                                      <span>10 minutes ago</span>
                                      <h6 className="mb-0">
                                        Youtube, a video-sharing website, goes
                                        live{" "}
                                        <strong className="text-primary">
                                          $500
                                        </strong>
                                        .
                                      </h6>
                                    </Link>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr role="row" className="odd">
                              <td>
                                <ul>
                                  <li>
                                    <div className="timeline-badge info"></div>
                                    <Link
                                      className="timeline-panel c-pointer text-muted"
                                      to="#"
                                    >
                                      <span>20 minutes ago</span>
                                      <h6 className="mb-0">
                                        New order placed{" "}
                                        <strong className="text-info">
                                          #XF-2356.
                                        </strong>
                                      </h6>
                                      <p className="mb-0">
                                        Quisque a consequat ante Sit amet magna
                                        at volutapt...
                                      </p>
                                    </Link>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr role="row" className="odd">
                              <td>
                                <ul className="timeline">
                                  <li>
                                    <div className="timeline-badge danger"></div>
                                    <Link
                                      className="timeline-panel c-pointer text-muted"
                                      to="#"
                                    >
                                      <span>30 minutes ago</span>
                                      <h6 className="mb-0">
                                        john just buy your product{" "}
                                        <strong className="text-warning">
                                          Sell $250
                                        </strong>
                                      </h6>
                                    </Link>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr role="row" className="odd">
                              <td>
                                <ul className="timeline">
                                  <li>
                                    <div className="timeline-badge success"></div>
                                    <Link
                                      className="timeline-panel c-pointer text-muted"
                                      to="#"
                                    >
                                      <span>15 minutes ago</span>
                                      <h6 className="mb-0">
                                        StumbleUpon is acquired by eBay.{" "}
                                      </h6>
                                    </Link>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr role="row" className="odd">
                              <td>
                                <ul className="timeline">
                                  <li>
                                    <div className="timeline-badge warning"></div>
                                    <Link
                                      className="timeline-panel c-pointer text-muted"
                                      to="#"
                                    >
                                      <span>20 minutes ago</span>
                                      <h6 className="mb-0">
                                        Mashable, a news website and blog, goes
                                        live.
                                      </h6>
                                    </Link>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr role="row" className="odd">
                              <td>
                                <ul className="timeline">
                                  <li>
                                    <div className="timeline-badge dark"></div>
                                    <Link
                                      className="timeline-panel c-pointer text-muted"
                                      to="#"
                                    >
                                      <span>20 minutes ago</span>
                                      <h6 className="mb-0">
                                        Mashable, a news website and blog, goes
                                        live.
                                      </h6>
                                    </Link>
                                  </li>
                                </ul>
                              </td>
                            </tr>

                            {/* <ul className="timeline">
													<li>
														<div className="timeline-badge primary" />
														<Link
														className="timeline-panel c-pointer text-muted"
														to="#"
														>
														<span>10 minutes ago</span>
														<h6 className="mb-0">
															Youtube, a video-sharing website, goes live{" "}
															<strong className="text-primary">$500</strong>.
														</h6>
														</Link>
													</li>
													<li>
														<div className="timeline-badge info"></div>
														<Link
														className="timeline-panel c-pointer text-muted"
														to="#"
														>
														<span>20 minutes ago</span>
														<h6 className="mb-0">
															New order placed{" "}
															<strong className="text-info">#XF-2356.</strong>
														</h6>
														<p className="mb-0">
															Quisque a consequat ante Sit amet magna at
															volutapt...
														</p>
														</Link>
													</li>
													<li>
														<div className="timeline-badge danger"></div>
														<Link className="timeline-panel c-pointer text-muted" to="#">
															<span>30 minutes ago</span>
															<h6 className="mb-0">
																john just buy your product{" "}
																<strong className="text-warning">Sell $250</strong>
															</h6>
														</Link>
													</li>
													<li>
														<div className="timeline-badge success"></div>
														<Link  className="timeline-panel c-pointer text-muted" to="#">
															<span>15 minutes ago</span>
															<h6 className="mb-0">
																StumbleUpon is acquired by eBay.{" "}
															</h6>
														</Link>
													</li>
														<li>
															<div className="timeline-badge warning"></div>
															<Link className="timeline-panel c-pointer text-muted" to="#">
																<span>20 minutes ago</span>
																<h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
															</Link>
														</li>
														<li>
															<div className="timeline-badge dark"></div>
															<Link className="timeline-panel c-pointer text-muted" to="#">
																<span>20 minutes ago</span>
																<h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
															</Link>
														</li>
													</ul>
												 */}
                          </tbody>
                        </table>
                        <div className="d-sm-flex text-center justify-content-between align-items-center mt-3">
                          <div className="dataTables_info">
                            {/* Showing {activePag.current * sort + 1} to{" "}
												{data.length > (activePag.current + 1) * sort
													? (activePag.current + 1) * sort
													: data.length}{" "}
												of {data.length} entries */}
                            Showing 1 to 5
                          </div>
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="example2_paginate"
                          >
                            <Link
                              className="paginate_button previous disabled"
                              // to="/ticket-management"
                              // onClick={() =>
                              //    activePag.current > 0 &&
                              //    onClick(activePag.current - 1)
                              // }
                            >
                              <i
                                className="fa fa-angle-double-left"
                                aria-hidden="true"
                              ></i>
                            </Link>
                            <span>
                              {paggination.map((number, i) => (
                                <Link
                                  key={i}
                                  //   to="/ticket-management"
                                  className={`paginate_button  ${
                                    activePag.current === i ? "current" : ""
                                  } `}
                                  //   onClick={() => onClick(i)}
                                >
                                  {number}
                                </Link>
                              ))}
                            </span>

                            <Link
                              className="paginate_button next"
                              // to="/ticket-management"
                              // onClick={() =>
                              //    activePag.current + 1 < paggination.length &&
                              //    onClick(activePag.current + 1)
                              // }
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
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </div>
          </Tab.Container>
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
                        style={{ borderRadius: 0 }}
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

      <Modal className="modal fade" show={detailModal} onHide={setDetailModal}>
        <div className="" role="document">
          <div className="">
            <form>
              <div className="modal-header">
                <h4 className="modal-title fs-20">Ticket Detail</h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setDetailModal(false)}
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
                            <span className="mb-0">Ticket ID</span>{" "}
                            <strong className="text-muted">52638 </strong>
                          </li>
                        </ul>
                        <div className="text-center p-3 bg-dark text-white">
                          <span>Ticket Detail</span>
                        </div>
                        <div className="p-3">
                          <div>
                            <strong className="text-muted">UserName </strong>
                            <p className="mb-0">(Oct 24th, 2022 08:29 AM) </p>
                            <p>
                              "Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s."
                            </p>
                            {/* <strong className="text-muted">Oct 24th, 2020 08:29 AM</strong>	 */}
                          </div>
                          <hr></hr>
                          <div>
                            <strong className="text-muted">Admin</strong>
                            <p className="mb-0">(Oct 28th, 2022 05:00 AM) </p>
                            <p>
                              "Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s."
                            </p>
                            {/* <strong className="text-muted">Oct 24th, 2020 08:29 AM</strong>	 */}
                          </div>
                        </div>

                        <div className="p-3">
                          <textarea
                            className="form-control"
                            style={{
                              height: "80px",
                              borderRadius: "5px",
                              borderColor: "#ccc",
                            }}
                          ></textarea>
                          <br></br>
                          <button
                            type="button"
                            className="btn btn-outline-success"
                            style={{ borderRadius: "5px" }}
                          >
                            {" "}
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  style={{ borderRadius: "5px" }}
                >
                  {" "}
                  Resolve
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  style={{ borderRadius: "5px" }}
                >
                  {" "}
                  Close
                </button>
                {/* <button type="button" onClick={()=> setPostModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Close</button>       */}
              </div>
            </form>
          </div>
        </div>
      </Modal>

      <Modal
        className="modal-invoice"
        show={resolvedModal}
        onHide={setResolvedModal}
      >
        <Invoice className="as123s" />
      </Modal>
    </>
  );
};
export default CompanyProfile;
