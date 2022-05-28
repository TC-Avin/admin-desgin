import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import DropDown from "../comman/DropDown"
import Metismenu from "metismenujs";
// import React, { Component, useContext, useEffect } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import useScrollPosition from "use-scroll-position";
import { ThemeContext } from "../../context/ThemeContext";
import "../../css/style.css";

const TopBar = () => {
//  useEffect(() => {
//     closeNav();
//     subCloseNav();
//   }, []);

//   const openNav = () => {
//     document.getElementById("mySidenav").style.width = "230px";
//   };
//   const openSubNav = () => {
//     document.getElementById("subSidenav").style.width = "220px";
//   };

//   const closeNav = () => {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("subSidenav").style.width = "0";
//   };
//   const subCloseNav = () => {
//     document.getElementById("subSidenav").style.width = "0";
//   };

  // var dropdown = document.getElementsByClassName("dropdown-btn");
  // var i;
  // console.log(dropdown,"dropdown")
  // for (i = 0; i < dropdown.length; i++) {
  // dropdown[i].addEventListener("click", function() {
  //     this.classList.toggle("active");
  //     var dropdownContent = this.nextElementSibling;
  //     if (dropdownContent.style.display === "block") {
  //     dropdownContent.style.display = "none";
  //     } else {
  //     dropdownContent.style.display = "block";
  //     }
  // });
  // }

//   function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }

//   // Close the dropdown if the user clicks outside of it
//   window.onclick = function (event) {
//     if (!event.target.matches(".dropbtn")) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains("show")) {
//           openDropdown.classList.remove("show");
//         }
//       }
//     }
//   };

  const btn = {
    background: "#1362fc",
    border: "none",
    width: "200px",
    height: "40px",
    color: "white",
    fontSize: "15px",
    borderRadius: "30px",
  };

  return (
    <div>
      
      <div
        className="d-flex justify-content-between w-100 position-fixed px-3"
        style={{ gap: "15px", top: "15%",zIndex:"999" }}
      >
        <li className="top-header-bar">
          <Link
            to="/home"
            className="ai-icon btn btn-primary font-w600 w-100"
          >
            <button className="btn btn-primary font-w600 me-auto w-100 nohover">
              <i className="bi-wallet2"></i>
              <span className="nav-text" style={{ marginLeft: "15px" }}>
                Home
              </span>
            </button>
          </Link>
        </li>{" "}
        <li className="top-header-bar">
          <Link
            to="/contact-search"
            className="ai-icon btn btn-primary font-w600 w-100 "
          >
            <button
              className="btn btn-primary font-w600 me-auto w-100 nohover"
            >
              <i className="bi-wallet2"></i>
              <span className="nav-text" style={{ marginLeft: "15px" }}>
                Contact-search
              </span>
            </button>
          </Link>
        </li>{" "}
        <li className="top-header-bar">
          <Link
            to="/my-list"
            className="ai-icon btn btn-primary font-w600 w-100"
          >
            {" "}
            <button className="btn btn-primary font-w600 me-auto w-100 nohover">
              <i className="bi-wallet2"></i>
              <span className="nav-text" style={{ marginLeft: "15px" }}>
                My List
              </span>{" "}
            </button>
          </Link>
        </li>{" "}
        <li className="top-header-bar">
          <Link
            to="/lookup-management"
            className="ai-icon btn btn-primary font-w600 w-100"
          >
            {" "}
            <button className="btn btn-primary font-w600 me-auto w-100 nohover">
              <i className="flaticon-381-search-2"></i>
              <span className="nav-text" style={{ marginLeft: "15px" }}>
                Look-up
              </span>{" "}
            </button>
          </Link>
        </li>{" "}
        <li className="top-header-bar">
          <Link
            to="/verify"
            className="ai-icon btn btn-primary font-w600 w-100"
          >
            {" "}
            <button className="btn btn-primary font-w600 me-auto w-100 nohover">
              <i className="bi-wallet2"></i>
              <span className="nav-text" style={{ marginLeft: "15px" }}>
                Verify
              </span>{" "}
            </button>
          </Link>
        </li>{" "}
        
       <li className="top-header-bar">
      <Link
            // to="/profile"
            className="ai-icon btn btn-primary font-w600 w-100 "
          >  
            {" "}
            <button className="btn btn-primary font-w600 me-auto w-100 nohover">
              <i className="flaticon-381-search-2"></i>
              <span className="nav-text" style={{ marginLeft: "15px" }}>
                Profile
              </span>{" "}
            </button>
            
  </Link>
        </li>{" "}
      </div>
    </div>
  );
}

export default TopBar;
