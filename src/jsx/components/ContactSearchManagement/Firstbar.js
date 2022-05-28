import React from 'react'

const FirstBar = () => {

    console.log('window', window)
   
  useEffect(() => {
    openNav ();   subCloseNav();
  }, []);

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "230px";
  };
  const openSubNav = () => {
    document.getElementById("subSidenav").style.width = "220px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("subSidenav").style.width = "0";
  };
  const subCloseNav = () => {
    document.getElementById("subSidenav").style.width = "0";
  };

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

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

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
<div id="mySidenav" className="sidenav">
        <div>
          <a className="closebtn" onClick={closeNav}>
            {"<"}
          </a>
        </div>
        <div>
          <button style={btn} onClick={openSubNav}>
            <i className="bi-wallet2"></i>
            <span className="nav-text" style={{ marginLeft: "15px" }}>
              Contact-search
            </span>
          </button>
        </div>
        <div>
          <button style={btn} onClick={openSubNav}>
            <i className="bi-wallet2"></i>
            <span className="nav-text" style={{ marginLeft: "15px" }}>
              Contact-search
            </span>
          </button>
        </div>
        <div>
          <button style={btn} onClick={openSubNav}>
            <i className="bi-wallet2"></i>
            <span className="nav-text" style={{ marginLeft: "15px" }}>
              Contact-search
            </span>
          </button>
        </div>
      </div>  )
}

export default FirstBar