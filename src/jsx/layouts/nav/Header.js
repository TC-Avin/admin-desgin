import React from "react";

import { Link, useHistory } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
import profile from "../../../images/avatar/avtar.jpg";
import avatar from "../../../images/avatar/1.jpg";
import { Dropdown } from "react-bootstrap";
import LogoutPage from "./Logout";
import Button from "@mui/material/Button";

const Header = ({ onNote }) => {
  const history = useHistory();
  var path = window.location.pathname.split("/");
  var name = path[path.length - 1].split("-");
  var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
  var finalName = filterName.includes("app")
    ? filterName.filter((f) => f !== "app")
    : filterName.includes("ui")
    ? filterName.filter((f) => f !== "ui")
    : filterName.includes("uc")
    ? filterName.filter((f) => f !== "uc")
    : filterName.includes("basic")
    ? filterName.filter((f) => f !== "basic")
    : filterName.includes("jquery")
    ? filterName.filter((f) => f !== "jquery")
    : filterName.includes("table")
    ? filterName.filter((f) => f !== "table")
    : filterName.includes("page")
    ? filterName.filter((f) => f !== "page")
    : filterName.includes("email")
    ? filterName.filter((f) => f !== "email")
    : filterName.includes("ecom")
    ? filterName.filter((f) => f !== "ecom")
    : filterName.includes("chart")
    ? filterName.filter((f) => f !== "chart")
    : filterName.includes("editor")
    ? filterName.filter((f) => f !== "editor")
    : filterName;
  return (
    <div className="header bg-primary">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left" style={{ width: "50%" }}>
              <div
                className="dashboard_bar"
                style={{ textTransform: "capitalize" }}
              >
                <ul className="navbar-nav header-right main-notification">
                  <li className="nav-item">
                    <div
                      className="input-group search-area"
                      style={{ width: "500px" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search Here"
                      />
                      <span className="input-group-text">
                        <Link to={"#"}>
                          <i className="flaticon-381-search-2"></i>
                        </Link>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button variant="contained" className="bg-green rounded-0">
                5 free credit
              </Button>
              <Button
                variant="contained"
                className="bg-orange rounded-0"
                onClick={() => {
                  console.log("first", path);
                  history.push(`subscription`);
                }}
              >
                <Link to="subscription" className="ai-icon" />
                upgrade pro
              </Button>
            </div>
            <ul className="navbar-nav header-right main-notification">
              <Dropdown as="li" className="nav-item dropdown header-profile">
                <Dropdown.Toggle
                  variant=""
                  as="a"
                  className="nav-link i-false c-pointer"
                >
                  <img src={profile} width={20} alt="" />
                  <div className="header-info ms-3">
                    <span>John Doe</span>
                    <small>Superadmin</small>
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu
                  align="right"
                  className="mt-3 dropdown-menu dropdown-menu-end border border-primary"
                >
                  <Link to="/app-profile" className="dropdown-item ai-icon">
                    <svg
                      id="icon-user1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    <span className="ms-2">Profile </span>
                  </Link>
                  <LogoutPage />
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
