import React, { useState, useRef, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import  {Dropdown} from 'react-bootstrap';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Formik } from "formik";
import * as Yup from "yup";
import "../../../css/style.css";
import { Dropdown, Tab, Nav, Modal } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";

///Images

import bg1 from "../../../images/big/img1.jpg";

///Import

//Import

// import Button from '../bootstrap/Button';
const loginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Your username must consist of at least 3 characters ")
    .max(50, "Your username must consist of at least 3 characters ")
    .required("Please enter a username"),
  password: Yup.string()
    .min(5, "Your password must be at least 5 characters long")
    .max(50, "Your password must be at least 5 characters long")
    .required("Please provide a password"),
  email: Yup.string().required("Please enter a email"),
  companyname: Yup.string().required("Please enter a company name"),
});

const DropdownAction = () => {
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
          <Dropdown.Item className="dropdown-item">Block</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const CompanyManagement = () => {
  const [postModal, setPostModal] = useState(false);
  const [addCompanyModal, setaddCompanyModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState(
    document.querySelectorAll("#example2_wrapper tbody tr")
  );
  const sort = 5;
  const activePag = useRef(0);
  const [test, settest] = useState(0);

  // Active data
  const chageData = (frist, sec) => {
    // for (var i = 0; i < data.length; ++i) {
    // 	if (i >= frist && i < sec) {
    // 		data[i].classList.remove("d-none");
    // 	} else {
    // 		data[i].classList.add("d-none");
    // 	}
    // }
  };
  // use effect
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
        <Tab.Container defaultActiveKey="Free">
          <div className="row">
            <div className="col-xl-12">
              <div className="d-flex mb-4 justify-content-between align-items-center flex-wrap">
                <div className="card-tabs mt-3 mt-sm-0 mb-xxl-0 mb-4">
                  <Nav as="ul" className="nav nav-tabs">
                    <Nav.Item as="li" className="nav-item">
                      <Nav.Link className="nav-link" eventKey="Free">
                        Free Users
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                      <Nav.Link className="nav-link" eventKey="Premium">
                        Premium Users
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className="nav-item">
                      <Nav.Link className="nav-link" eventKey="Personalized">
                        Personalized Users
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <Link
                  onClick={() => setaddCompanyModal(true)}
                  className="btn btn-primary mb-xxl-0 mb-4 "
                >
                  <i className="fa fa-plus me-2"></i>
                  Add Company
                </Link>
              </div>
              <Tab.Content>
                <Tab.Pane eventKey="Free">
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
                            <th className="sorting_asc">User</th>
                            <th className="sorting">Date</th>
                            <th className="sorting">Subscription Type</th>
                            <th className="sorting">User ID</th>
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
                                  <i class="fa fa-circle text-success me-1"></i>
                                  Free
                                </h5>
                              </div>
                            </td>
                            <td>
                              <div>
                                <h5>DBI-1</h5>
                              </div>
                            </td>

                            <td>
                              <span class="badge light badge-success">
                                <i class="fa fa-circle text-success me-1"></i>
                                Active
                              </span>
                            </td>
                            {/* <td><DropdownAction /> </td> */}
                            <td>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-warning light"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </Link>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-danger light"
                                title="Block"
                              >
                                <i className="fa fa-ban"></i>
                              </Link>
                              <Link
                                to={"/companyprofile"}
                                className="me-2 btn btn-primary light"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
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
                                  <i class="fa fa-circle text-success me-1"></i>
                                  Free
                                </h5>
                              </div>
                            </td>
                            <td>
                              <div>
                                <h5>DBI-2</h5>
                              </div>
                            </td>

                            <td>
                              <span class="badge light badge-success">
                                <i class="fa fa-circle text-success me-1"></i>
                                Active
                              </span>
                            </td>
                            <td>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-warning light"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </Link>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-danger light"
                                title="Block"
                              >
                                <i className="fa fa-ban"></i>
                              </Link>
                              <Link
                                to={"/companyprofile"}
                                className="me-2 btn btn-primary light"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
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
                                <h5 class="badge light badge-danger">
                                  <i class="fa fa-circle text-danger me-1"></i>
                                  Free
                                </h5>
                              </div>
                            </td>
                            <td>
                              <div>
                                <h5>DBI-3</h5>
                              </div>
                            </td>

                            <td>
                              <span class="badge light badge-success">
                                <i class="fa fa-circle text-success me-1"></i>
                                Active
                              </span>
                            </td>
                            <td>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-warning light"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </Link>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-danger light"
                                title="Block"
                              >
                                <i className="fa fa-ban"></i>
                              </Link>
                              <Link
                                to={"/companyprofile"}
                                className="me-2 btn btn-primary light"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
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
                                  <i class="fa fa-circle text-success me-1"></i>
                                  Free
                                </h5>
                              </div>
                            </td>
                            <td>
                              <div>
                                <h5>DBI-4</h5>
                              </div>
                            </td>

                            <td>
                              <span class="badge light badge-success">
                                <i class="fa fa-circle text-success me-1"></i>
                                Active
                              </span>
                            </td>
                            <td>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-warning light"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </Link>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-danger light"
                                title="Block"
                              >
                                <i className="fa fa-ban"></i>
                              </Link>
                              <Link
                                to={"/companyprofile"}
                                className="me-2 btn btn-primary light"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
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
                            // to="/user-management"
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
                                //   to="/user-management"
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
                            // to="/user-management"
                            // onClick={() =>
                            // activePag.current + 1 < paggination.length &&
                            // onClick(activePag.current + 1)
                            //}
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
                <Tab.Pane eventKey="Premium">
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
                            <th className="sorting_asc">User</th>
                            <th className="sorting">Date</th>
                            <th className="sorting">Subscription Type</th>
                            <th className="sorting">User ID</th>
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
                                  <i class="fa fa-circle text-success me-1"></i>
                                  Premium
                                </h5>
                              </div>
                            </td>
                            <td>
                              <div>
                                <h5>DBI-5</h5>
                              </div>
                            </td>

                            <td>
                              <span class="badge light badge-danger">
                                <i class="fa fa-circle text-danger me-1"></i>
                                Blocked
                              </span>
                            </td>
                            <td>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-warning light"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </Link>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-success light"
                                title="Unblock"
                              >
                                <i className="fa fa-ban"></i>
                              </Link>
                              <Link
                                to={"/companyprofile"}
                                className="me-2 btn btn-primary light"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
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
                                  <i class="fa fa-circle text-success me-1"></i>
                                  Premium
                                </h5>
                              </div>
                            </td>
                            <td>
                              <div>
                                <h5>DBI-6</h5>
                              </div>
                            </td>

                            <td>
                              <span class="badge light badge-danger">
                                <i class="fa fa-circle text-danger me-1"></i>
                                Blocked
                              </span>
                            </td>
                            <td>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-warning light"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </Link>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-success light"
                                title="Unblock"
                              >
                                <i className="fa fa-ban"></i>
                              </Link>
                              <Link
                                to={"/companyprofile"}
                                className="me-2 btn btn-primary light"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
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
                                  <i class="fa fa-circle text-success me-1"></i>
                                  Premium
                                </h5>
                              </div>
                            </td>
                            <td>
                              <div>
                                <h5>DBI-7</h5>
                              </div>
                            </td>

                            <td>
                              <span class="badge light badge-danger">
                                <i class="fa fa-circle text-danger me-1"></i>
                                Blocked
                              </span>
                            </td>
                            <td>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-warning light"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </Link>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-success light"
                                title="Unblock"
                              >
                                <i className="fa fa-ban"></i>
                              </Link>
                              <Link
                                to={"/companyprofile"}
                                className="me-2 btn btn-primary light"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
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
                                  <i class="fa fa-circle text-success me-1"></i>
                                  Premium
                                </h5>
                              </div>
                            </td>
                            <td>
                              <div>
                                <h5>DBI-8</h5>
                              </div>
                            </td>

                            <td>
                              <span class="badge light badge-danger">
                                <i class="fa fa-circle text-danger me-1"></i>
                                Blocked
                              </span>
                            </td>
                            <td>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-warning light"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </Link>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-success light"
                                title="Unblock"
                              >
                                <i className="fa fa-ban"></i>
                              </Link>
                              <Link
                                to={"/companyprofile"}
                                className="me-2 btn btn-primary light"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
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
                            // to="/user-management"
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
                                //   to="/user-management"
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
                            // to="/user-management"
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
                <Tab.Pane eventKey="Personalized">
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
                            <th className="sorting_asc">User</th>
                            <th className="sorting">Date</th>
                            <th className="sorting">Subscription Type</th>
                            <th className="sorting">User ID</th>
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
                                  <i class="fa fa-circle text-success me-1"></i>
                                  Personalized
                                </h5>
                              </div>
                            </td>
                            <td>
                              <div>
                                <h5>DBI-5</h5>
                              </div>
                            </td>

                            <td>
                              <span class="badge light badge-danger">
                                <i class="fa fa-circle text-danger me-1"></i>
                                Blocked
                              </span>
                            </td>
                            <td>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-warning light"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </Link>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-success light"
                                title="Unblock"
                              >
                                <i className="fa fa-ban"></i>
                              </Link>
                              <Link
                                to={"/companyprofile"}
                                className="me-2 btn btn-primary light"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
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
                                  <i class="fa fa-circle text-success me-1"></i>
                                  Personalized
                                </h5>
                              </div>
                            </td>
                            <td>
                              <div>
                                <h5>DBI-6</h5>
                              </div>
                            </td>

                            <td>
                              <span class="badge light badge-danger">
                                <i class="fa fa-circle text-danger me-1"></i>
                                Blocked
                              </span>
                            </td>
                            <td>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-warning light"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </Link>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-success light"
                                title="Unblock"
                              >
                                <i className="fa fa-ban"></i>
                              </Link>
                              <Link
                                to={"/companyprofile"}
                                className="me-2 btn btn-primary light"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
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
                                  <i class="fa fa-circle text-success me-1"></i>
                                  Personalized
                                </h5>
                              </div>
                            </td>
                            <td>
                              <div>
                                <h5>DBI-7</h5>
                              </div>
                            </td>

                            <td>
                              <span class="badge light badge-danger">
                                <i class="fa fa-circle text-danger me-1"></i>
                                Blocked
                              </span>
                            </td>
                            <td>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-warning light"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </Link>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-success light"
                                title="Unblock"
                              >
                                <i className="fa fa-ban"></i>
                              </Link>
                              <Link
                                to={"/companyprofile"}
                                className="me-2 btn btn-primary light"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
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
                                  <i class="fa fa-circle text-success me-1"></i>
                                  Personalized
                                </h5>
                              </div>
                            </td>
                            <td>
                              <div>
                                <h5>DBI-8</h5>
                              </div>
                            </td>

                            <td>
                              <span class="badge light badge-danger">
                                <i class="fa fa-circle text-danger me-1"></i>
                                Blocked
                              </span>
                            </td>
                            <td>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-warning light"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </Link>
                              <Link
                                to={"#"}
                                className="me-2 btn btn-success light"
                                title="Unblock"
                              >
                                <i className="fa fa-ban"></i>
                              </Link>
                              <Link
                                to={"/companyprofile"}
                                className="me-2 btn btn-primary light"
                                title="View"
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
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
                            // to="/user-management"
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
                                //   to="/user-management"
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
                            // to="/user-management"
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
        className="modal-addCompany"
        show={addCompanyModal}
        onHide={setaddCompanyModal}
      >
        <div className="" role="document">
          <div className="">
            <form>
              <div className="modal-header">
                <h4 className="modal-title fs-20">Add Company</h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setaddCompanyModal(false)}
                  data-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body" style={{ padding: 0 }}>
                <i className="flaticon-cancel-12 close"></i>
                <div className="card" style={{ boxShadow: "none" }}>
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
                          <>
                            <form
                              onSubmit={handleSubmit}
                              className="addcompany-form"
                            >
                              <div
                                className={`form-group mb-3 addcompany-formgroup ${
                                  values.subscription
                                    ? errors.subscription
                                      ? "is-invalid"
                                      : "is-valid"
                                    : ""
                                }`}
                              >
                                <label className="text-label">User Type</label>
                                <div className="input-group">
                                  <span className="input-group-text">
                                    <i className="fa fa-users" />{" "}
                                  </span>

                                  {/* <select
                                                        defaultValue={"Select subscription.."}
                                                        className="form-control"
                                                        id="val-subscription1"
                                                        name="subscription"
                                                        placeholder="Enter subscription.."
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.subscription}
                                                        >
                                                        <option>Essentials</option>
                                                        <option>Plus</option>
                                                        <option>Professional</option>
                                                        <option>Elite</option>
                                                        </select> */}
                                  <select
                                    defaultValue={"option"}
                                    className="form-control wide"
                                    id="val-subscription1"
                                    name="subscription"
                                    placeholder="Enter subscription.."
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subscription}
                                  >
                                    <option value="option" disabled>
                                      Select User Type
                                    </option>
                                    <option value="Free">Free</option>
                                    <option value="Premium">Premium</option>
                                    <option value="Personalized">
                                      Personalized
                                    </option>
                                  </select>
                                  <div
                                    id="val-subscription1-error"
                                    className="invalid-feedback animated fadeInUp"
                                    style={{ display: "block" }}
                                  >
                                    {errors.subscription && errors.subscription}
                                  </div>

                                  <div
                                    id="val-subscription1-error"
                                    className="invalid-feedback animated fadeInUp"
                                    style={{ display: "block" }}
                                  />
                                </div>
                                {/* {console.log(values.subscription,"values.subscription")} */}
                              </div>

                              {["Free", "Premium", "Personalized"].includes(
                                values.subscription
                              ) && (
                                <div
                                  className={`form-group mb-3 addcompany-formgroup ${
                                    values.email
                                      ? errors.email
                                        ? "is-invalid"
                                        : "is-valid"
                                      : ""
                                  }`}
                                >
                                  <label className="text-label">Email</label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="fa fa-envelope" />{" "}
                                    </span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="val-email1"
                                      placeholder="Enter a email.."
                                      name="email"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.email}
                                    />
                                    <div
                                      id="val-email1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    >
                                      {errors.email && errors.email}
                                    </div>

                                    <div
                                      id="val-email1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    />
                                  </div>
                                </div>
                              )}

                              {["Free", "Premium", "Personalized"].includes(
                                values.subscription
                              ) && (
                                <div
                                  className={`form-group mb-3 addcompany-formgroup ${
                                    values.companyname
                                      ? errors.companyname
                                        ? "is-invalid"
                                        : "is-valid"
                                      : ""
                                  }`}
                                >
                                  <label className="text-label">
                                    Company Name
                                  </label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="fa fa-user" />{" "}
                                    </span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="val-companyname1"
                                      placeholder="Enter a companyname.."
                                      name="companyname"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.companyname}
                                    />
                                    <div
                                      id="val-companyname1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    >
                                      {errors.companyname && errors.companyname}
                                    </div>

                                    <div
                                      id="val-companyname1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    />
                                  </div>
                                </div>
                              )}

                              {values.subscription === "Personalized" && (
                                <div
                                  className={`form-group mb-3 addcompany-formgroup ${
                                    values.credits
                                      ? errors.credits
                                        ? "is-invalid"
                                        : "is-valid"
                                      : ""
                                  }`}
                                >
                                  <label className="text-label">
                                    No. of Credits
                                  </label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="fa fa-comment-dollar" />{" "}
                                    </span>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="val-credits1"
                                      placeholder="Enter credits.."
                                      name="credits"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.credits}
                                    />
                                    <div
                                      id="val-credits1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    >
                                      {errors.credits && errors.credits}
                                    </div>

                                    <div
                                      id="val-credits1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    />
                                  </div>
                                </div>
                              )}

                              {values.subscription === "Personalized" && (
                                <div
                                  className={`form-group mb-3 addcompany-formgroup ${
                                    values.perCreditCost
                                      ? errors.perCreditCost
                                        ? "is-invalid"
                                        : "is-valid"
                                      : ""
                                  }`}
                                >
                                  <label className="text-label">
                                    Per Credit Cost
                                  </label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="fa fa-comment-dollar" />{" "}
                                    </span>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="val-credits1"
                                      placeholder="Enter Per Credit Cost.."
                                      name="Per Credit Cost"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.perCreditCost}
                                    />
                                    <div
                                      id="val-credits1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    >
                                      {errors.perCreditCost &&
                                        errors.perCreditCost}
                                    </div>

                                    <div
                                      id="val-perCreditCost1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    />
                                  </div>
                                </div>
                              )}

                              {values.subscription === "Personalized" && (
                                <div
                                  className={`form-group mb-3 addcompany-formgroup ${
                                    values.cost
                                      ? errors.cost
                                        ? "is-invalid"
                                        : "is-valid"
                                      : ""
                                  }`}
                                >
                                  <label className="text-label">Cost</label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="fa fa-comment-dollar" />{" "}
                                    </span>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="val-cost1"
                                      placeholder="Enter cost.."
                                      name="cost"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.cost}
                                    />
                                    <div
                                      id="val-cost1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    >
                                      {errors.cost && errors.cost}
                                    </div>

                                    <div
                                      id="val-cost1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    />
                                  </div>
                                </div>
                              )}

                              {values.subscription === "Personalized" && (
                                <div
                                  className={`form-group mb-3 addcompany-formgroup ${
                                    values.teamMember
                                      ? errors.teamMember
                                        ? "is-invalid"
                                        : "is-valid"
                                      : ""
                                  }`}
                                >
                                  <label className="text-label">
                                    No. of Team Members
                                  </label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="fa fa-comment-dollar" />{" "}
                                    </span>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="val-teamMember1"
                                      placeholder="Enter teamMember.."
                                      name="teamMember"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.teamMember}
                                    />
                                    <div
                                      id="val-teamMember1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    >
                                      {errors.teamMember && errors.teamMember}
                                    </div>

                                    <div
                                      id="val-teamMember1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    />
                                  </div>
                                </div>
                              )}

                              {values.subscription === "Personalized" && (
                                <div
                                  className={`form-group mb-3 addcompany-formgroup ${
                                    values.teamMemberCost
                                      ? errors.teamMemberCost
                                        ? "is-invalid"
                                        : "is-valid"
                                      : ""
                                  }`}
                                >
                                  <label className="text-label">
                                    Cost of each Team Member
                                  </label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="fa fa-comment-dollar" />{" "}
                                    </span>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="val-teamMember1"
                                      placeholder="Enter Team Member Cost.."
                                      name="teamMemberCost"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.teamMemberCost}
                                    />
                                    <div
                                      id="val-teamMember1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    >
                                      {errors.teamMemberCost &&
                                        errors.teamMemberCost}
                                    </div>

                                    <div
                                      id="val-teamMemberCost1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    />
                                  </div>
                                </div>
                              )}

                              {["Premium", "Personalized"].includes(
                                values.subscription
                              ) && (
                                <div
                                  className={`form-group mb-3 addcompany-formgroup ${
                                    values.billing
                                      ? errors.billing
                                        ? "is-invalid"
                                        : "is-valid"
                                      : ""
                                  }`}
                                >
                                  <label className="text-label">
                                    Billing Cycle
                                  </label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="fa fa-users" />{" "}
                                    </span>

                                    {/* <select
                                                        defaultValue={"Select billing.."}
                                                        className="form-control"
                                                        id="val-billing1"
                                                        name="billing"
                                                        placeholder="Enter billing.."
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.billing}
                                                        >
                                                        <option>Essentials</option>
                                                        <option>Plus</option>
                                                        <option>Professional</option>
                                                        <option>Elite</option>
                                                        </select> */}
                                    <select
                                      defaultValue={"Select billing-cycle.."}
                                      className="form-control wide"
                                      id="val-billing1"
                                      name="billing"
                                      placeholder="Enter billing..."
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.billing}
                                    >
                                      <option value="1">Monthly</option>
                                      <option value="2">Annual</option>
                                    </select>
                                    <div
                                      id="val-billing1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    >
                                      {errors.billing && errors.billing}
                                    </div>

                                    <div
                                      id="val-billing1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    />
                                  </div>
                                </div>
                              )}

                              {values.subscription === "Premium" && (
                                <div
                                  className={`form-group mb-3 addcompany-formgroup ${
                                    values.subscription
                                      ? errors.subscription
                                        ? "is-invalid"
                                        : "is-valid"
                                      : ""
                                  }`}
                                >
                                  <label className="text-label">
                                    Choose Subscription
                                  </label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="fa fa-coins" />{" "}
                                    </span>
                                    {/* <input
                                                        type="text"
                                                        className="form-control"
                                                        id="val-subscription1"
                                                        placeholder="Enter subscription.."
                                                        name="subscription"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.subscription}
                                                    /> */}
                                    <select
                                      defaultValue={"Select subscription.."}
                                      className="form-control"
                                      id="val-subscription1"
                                      name="subscription"
                                      placeholder="Enter subscription.."
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.subscription}
                                    >
                                      <option>Essentials</option>
                                      <option>Plus</option>
                                      <option>Professional</option>
                                      <option>Elite</option>
                                    </select>
                                    <div
                                      id="val-subscription1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    >
                                      {errors.subscription &&
                                        errors.subscription}
                                    </div>

                                    <div
                                      id="val-subscription1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    />
                                  </div>
                                </div>
                              )}

                              {values.subscription === "Personalized" && (
                                <div
                                  className={`form-group mb-3 addcompany-formgroup ${
                                    values.subscriptionPackageCost
                                      ? errors.subscriptionPackageCost
                                        ? "is-invalid"
                                        : "is-valid"
                                      : ""
                                  }`}
                                >
                                  <label className="text-label">
                                    Subscription Package Cost
                                  </label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="fa fa-comment-dollar" />{" "}
                                    </span>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="val-teamMember1"
                                      placeholder="Enter Subscription Cost.."
                                      name="subscriptionPackageCost"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.subscriptionPackageCost}
                                    />
                                    <div
                                      id="val-teamMember1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    >
                                      {errors.subscriptionPackageCost &&
                                        errors.subscriptionPackageCost}
                                    </div>

                                    <div
                                      id="val-subscriptionPackageCost1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    />
                                  </div>
                                </div>
                              )}

                              {values.subscription === "Personalized" && (
                                <div
                                  className={`form-group mb-3 addcompany-formgroup ${
                                    values.totalPaybleAmount
                                      ? errors.totalPaybleAmount
                                        ? "is-invalid"
                                        : "is-valid"
                                      : ""
                                  }`}
                                >
                                  <label className="text-label">
                                    Total Payble Amount
                                  </label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="fa fa-comment-dollar" />{" "}
                                    </span>
                                    <input
                                      type="number"
                                      className="form-control"
                                      id="val-totalPaybleAmount1"
                                      placeholder="Enter Total Payble Amount.."
                                      name="totalPaybleAmount"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.totalPaybleAmount}
                                    />
                                    <div
                                      id="val-totalPaybleAmount1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    >
                                      {errors.totalPaybleAmount &&
                                        errors.totalPaybleAmount}
                                    </div>

                                    <div
                                      id="val-totalPaybleAmount1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    />
                                  </div>
                                </div>
                              )}

                              {values.subscription === "Personalized" && (
                                <div
                                  className={`form-group mb-3 addcompany-formgroup ${
                                    values.Discount
                                      ? errors.Discount
                                        ? "is-invalid"
                                        : "is-valid"
                                      : ""
                                  }`}
                                >
                                  <label className="text-label">Discount</label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="fa fa-users" />{" "}
                                    </span>

                                    {/* <select
															defaultValue={"Select Discount-cycle.."}
															className="form-control wide"
															id="val-Discount1"
															name="Discount"
															placeholder="Enter Discount..."
															onChange={handleChange}
															onBlur={handleBlur}
															value={values.Discount}
															>
															<option value="1">Price</option>
															<option value="2">Percentage</option>
														</select> */}
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="val-discount1"
                                      placeholder="Enter Total Payble Amount.."
                                      name="discount"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.discount}
                                    />
                                    <Dropdown className="">
                                      <Dropdown.Toggle
                                        variant=""
                                        // className="btn btn-primary "
                                        type="button"
                                        data-toggle="dropdown"
                                      ></Dropdown.Toggle>
                                      <Dropdown.Menu className="dropdown-menu">
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          to="#"
                                        >
                                          Price
                                        </Dropdown.Item>
                                        <Dropdown.Item
                                          className="dropdown-item"
                                          to="#"
                                        >
                                          Percentage
                                        </Dropdown.Item>
                                      </Dropdown.Menu>
                                    </Dropdown>

                                    <div
                                      id="val-discount1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    >
                                      {errors.discount && errors.discount}
                                    </div>

                                    <div
                                      id="val-discount1-error"
                                      className="invalid-feedback animated fadeInUp"
                                      style={{ display: "block" }}
                                    />
                                  </div>
                                </div>
                              )}

                              {["Free", "Premium", "Personalized"].includes(
                                values.subscription
                              ) && (
                                <>
                                  <div className="addcompany-formgroup w-100  m-2">
                                    <form onSubmit={(e) => e.preventDefault()}>
                                      <div className="form-group mb-0  d-flex justify-content-around">
                                        <label className="radio-inline me-3 d-flex align-items-center">
                                          <input
                                            type="radio"
                                            name="optradio"
                                            style={{
                                              width: "20px",
                                              height: "20px",
                                            }}
                                          />
                                          <span style={{ fontSize: "15px" }}>
                                            &nbsp; &nbsp; Download Invoice
                                          </span>
                                        </label>
                                        <label className="radio-inline me-3 d-flex align-items-center">
                                          <input
                                            type="radio"
                                            name="optradio"
                                            style={{
                                              width: "20px",
                                              height: "20px",
                                            }}
                                          />
                                          <span style={{ fontSize: "15px" }}>
                                            &nbsp; &nbsp; Send Invoice
                                          </span>
                                        </label>
                                      </div>
                                    </form>
                                  </div>
                                  {/* <div className='addcompany-formgroup d-flex justify-content-center m-2'>
														<form onSubmit={(e) => e.preventDefault()}>
														<div className="form-group mb-0">
															<label className="radio-inline me-3">
															<input type="radio" name="optradio" style={{width:"30px", height:"20px"}}/> 
																<span style={{fontSize:"18px"}}>Send Invoice</span>
															</label>
														</div>
														</form>
													</div> */}
                                </>
                              )}
                            </form>
                            {["Free", "Premium", "Personalized"].includes(
                              values.subscription
                            ) && (
                              <div className=" d-flex justify-content-around">
                                <button
                                  type="submit"
                                  className="btn me-3 btn-primary"
                                  disabled={isSubmitting}
                                >
                                  Submit
                                </button>

                                <button
                                  type="button"
                                  onClick={() => setaddCompanyModal(false)}
                                  className="btn btn-light"
                                >
                                  cancel
                                </button>
                              </div>
                            )}
                          </>
                        )}
                      </Formik>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="modal-footer"> 
                    <button type="button" className="btn btn-primary"> Save</button> 
                    <button type="button" onClick={()=> setaddCompanyModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Close</button>      
								</div> */}
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default CompanyManagement;
