/// Menu
import Metismenu from "metismenujs";
import React, { Component, useContext, useEffect } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import useScrollPosition from "use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";

/// Image
//import profile from "../../../images/profile/pic1.jpg";
//import plus from "../../../images/plus.png";

class MM extends Component {
	  componentDidMount() {
		this.$el = this.el;
		this.mm = new Metismenu(this.$el);
	  }
	  componentWillUnmount() {
	  }
	render() {
		return (
			<div className="mm-wrapper">
				<ul className="metismenu" ref={(el) => (this.el = el)}>
					{this.props.children}
				</ul>
			</div>
		);
	}
}

const SideBar = () => {
  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
  } = useContext(ThemeContext);
  useEffect(() => {
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    // btn.addEventListener("click", toggleFunc);
	
	//sidebar icon Heart blast
	var handleheartBlast = document.querySelector('.heart');
        // function heartBlast() {
        //     return handleheartBlast.classList.toggle("heart-blast");
        // }
        // handleheartBlast.addEventListener('click', heartBlast);
	
  }, []);
  let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu
  let deshBoard = [
      "dashboard",
      "dashboard-dark",
      "guest-list",
      "guest-detail",
      "concierge",
      "room-list",
      "reviews",
      "task",
    ],
    wallet =  [
      "wallet-management"],
    app = [
      "app-profile",
      "post-details",
      "app-calender",
      "email-compose",
      "email-inbox",
      "email-read",
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "post-details",
      "ecom-product-detail",
    ],
    email = ["email-compose", "email-inbox", "email-read"],
    shop = [
      "ecom-product-grid",
      "ecom-product-list",
      "ecom-product-list",
      "ecom-product-order",
      "ecom-checkout",
      "ecom-invoice",
      "ecom-customers",
      "ecom-product-detail",
    ],
    charts = [
      "chart-rechart",
      "chart-flot",
      "chart-chartjs",
      "chart-chartist",
      "chart-sparkline",
      "chart-apexchart",
    ],
    bootstrap = [
      "ui-accordion",
      "ui-badge",
      "ui-alert",
      "ui-button",
      "ui-modal",
      "ui-button-group",
      "ui-list-group",
      "ui-media-object",
      "ui-card",
      "ui-carousel",
      "ui-dropdown",
      "ui-popover",
      "ui-progressbar",
      "ui-tab",
      "ui-typography",
      "ui-pagination",
      "ui-grid",
    ],
    plugins = [
      "uc-select2",
      "uc-nestable",
      "uc-sweetalert",
      "uc-toastr",
      "uc-noui-slider",
      "map-jqvmap",
      "uc-lightgallery",
    ],
	redux = [
       "redux-form",
	   "redux-wizard",    
       "todo",
    ],
    widget = ["widget-basic"],
    user = ["user-management"],
    ticket = ["ticket-management"],
    company = ["company-management"],
    forms = [
      "form-element",
      "form-wizard",
      "form-editor-summernote",
      "form-pickers",
      "form-validation-jquery",
    ],
    table = ["table-bootstrap-basic", "table-datatable-basic"],
    leads = ["upload-leads"],
    category = ["category-management"],
    pages = [
      "page-register",
      "page-login",
      "page-lock-screen",
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ],
    error = [
      "page-error-400",
      "page-error-403",
      "page-error-404",
      "page-error-500",
      "page-error-503",
    ];
  return (
    <div
      className={`deznav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? scrollPosition > 120
            ? "fixed"
            : ""
          : ""
      }`}
    >
      <PerfectScrollbar className="deznav-scroll">
        <MM className="metismenu" id="menu">
          <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
            <Link to="/dashboard" className="ai-icon" >
              <i className="flaticon-025-dashboard"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li className={`${wallet.includes(path) ? "mm-active" : ""}`}>
            <Link to="/wallet-management" className="ai-icon" >
              <i className="bi-wallet2"></i>
              <span className="nav-text">Wallet</span>
            </Link>
          </li>
          <li className={`${ticket.includes(path) ? "mm-active" : ""}`}>
            <Link to="/ticket-management" className="ai-icon" >
              <i className="bi-patch-question-fill"></i>
              <span className="nav-text">Ticket</span>
            </Link>
          </li>
          {/* <li className={`${user.includes(path) ? "mm-active" : ""}`}>
            <Link to="/user-management" className="ai-icon" >
              <i className="flaticon-381-user-8"></i>
              <span className="nav-text">Users</span>
            </Link>
          </li> */}
          <li className={`${company.includes(path) ? "mm-active" : ""}`}>
            <Link to="/company-management" className="ai-icon" >
              <i className="flaticon-381-user-8"></i>
              <span className="nav-text">Companies</span>
            </Link>
          </li>


          <li className={`${category.includes(path) ? "mm-active" : ""}`}>
            <Link to="/category-management" className="ai-icon" >
              <i className="bi-window-sidebar"></i>
              <span className="nav-text">Category</span>
            </Link>
          </li>

          <li className={`${leads.includes(path) ? "mm-active" : ""}`}>
            <Link to="/upload-leads" className="ai-icon" >
              <i className="bi-file-earmark-excel-fill"></i>
              <span className="nav-text">Leads</span>
            </Link>
          </li>


          
          
          <li className={`${widget.includes(path) ? "mm-active" : ""}`}>
            <Link to="subscription" className="ai-icon" >
              <i className="bi-file-plus-fill"></i>
              <span className="nav-text">Subscription</span>
            </Link>
          </li>
          
        </MM>
		{/* <div className="copyright">
			<p><strong>Health DBI Admin</strong> © 2022 All Rights Reserved</p>
			<p className="fs-12">Made with <span className="heart"></span> by Company Name</p>
		</div> */}
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
