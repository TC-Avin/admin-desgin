import React from 'react';
import "../../../css/style.css";
import { Link } from "react-router-dom";

const LookupManagement = () => {
  return (
      <>
        <div className='lookup-header'>
          <p className="d-flex justify-content-center" style={{fontSize:"20px"}}>
            Lookup
          </p>
          <p className="d-flex justify-content-center">
            Quickly find individual emails and contacts
          </p>
        </div>

        <div className="lookup-box">
          <div className='my-3 d-flex justify-content-center lookup-box-1'>
            <div>
                {/* <div>
                    FullName
                </div>
                <div>
                    <input type="text"/>
                </div> */}
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                  />
                </div>
            </div>

            <div className="lookup-box-2">
                <span className="lookup-icon"><i className="fa fa-envelope lookup-box-2-icon"/></span>
            </div>

            <div  className='lookup-box-3'>
               {/* <div>
                    Company Name or URL
                </div>
                <div>
                    <input type="search"/>
                </div> */}
              <div className="input-group search-area">
						    <span className="input-group-text"><Link to={"#"}><i className="flaticon-381-search-2" ></i></Link></span>
						    <input type="text" className="form-control" placeholder="Search Here" />
				      </div>
            </div>

            <div className='lookup-footer'>
                <button
                    type="submit"
                    className="btn btn-secondary disabled"
                    disabled={true}
                >
                    Search
                </button>
            </div>
          </div>

          <div style={{marginLeft:"45px"}}>
                Details of company
          </div>
        </div>
      </>
  )
}

export default LookupManagement;