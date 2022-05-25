import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PageTitle from '../../../layouts/PageTitle';

import { Button, Modal } from "react-bootstrap";




const Category = ()=>{

    
  const [data, setData] = useState(
    document.querySelectorAll("#job_data tbody tr")
  );
  const sort = 5;
  const activePag = useRef(0);
  const [test, settest] = useState(0);

  const [basicModal, setBasicModal] = useState(false);
  const [editModal, setEditModal]   = useState(false);


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
  // use effect
  useEffect(() => {
    setData(document.querySelectorAll("#job_data tbody tr"));
   // chackboxFun();
  }, [test]);

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
        <div className=""  style={{height: '50px'}} >
            <div className="row" >
            
                <div className="col-md-12 d-flex justify-content-end align-content-center" >
                    <a href="#"  className="btn btn-primary"
                     onClick={() => setBasicModal(true)}

                     
                     >
                        <i className="fa fa-plus" ></i> Add Category
                    </a>
                </div>
            </div>
        </div>



<div className="col-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">All Categories</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div id="job_data" className="dataTables_wrapper">
              <table
                className="display w-100 dataTable "
                id="example5"
                role="grid"
                aria-describedby="example5_info"
              >
                <thead>
                  <tr role="row">
                    <th className="sorting_asc" style={{ width: "177px" }}>
                      ID
                    </th>
                    <th className="sorting" style={{ width: "278px" }}>
                      Name
                    </th>
                    <th className="sorting" style={{ width: "128px" }}>
                      Date-Time
                    </th>
                    <th className="sorting" style={{ width: "46px" }}>
                      Status
                    </th>
                    <th className="sorting" style={{ width: "114px" }}>
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="odd" role="row">
                    <td className="sorting_1">cat-111</td>
                    <td>Accountant</td>
                    <td>2008/11/28</td>
                    <td>
                        <span className="alert btn-sm alert-danger">
                            Disabled
                        </span>
                    </td>
                    <td> 
                        <a href="#!"
                        onClick={()=>setEditModal(true)}
                        className="btn  mr-1 text-warning" >
                            <i className="fa fa-edit"></i>
                        </a>


                        <a href="#!" className="btn  ml-1 text-danger" >
                            <i className="fa fa-trash"></i>
                        </a>
                    </td>
                  </tr>

                  <tr className="odd" role="row">
                    <td className="sorting_1">cat-112</td>
                    <td>Accountant</td>
                    <td>2008/11/28</td>
                    <td>
                        <span className="alert btn-sm alert-success">
                            Enabled
                        </span>
                    </td>
                    <td>
                        <a href="#!" onClick={()=>setEditModal(true)} className="btn  mr-1 text-warning" >
                            <i className="fa fa-edit"></i>
                        </a>


                        <a href="#!" className="btn  ml-1 text-danger" >
                            <i className="fa fa-trash"></i>
                        </a>
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
                  id="example5_paginate"
                >
                  <Link
                    className="paginate_button previous disabled"
                    to="/leads/category"
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
                        to="/leads/category"
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
                    to="/leads/category"
                    onClick={() =>
                      activePag.current + 1 < paggination.length &&
                      onClick(activePag.current + 1)
                    }
                  >
                    <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>





                {/* <!-- Button trigger modal --> */}
                
                {/* <!-- Modal --> */}
                <Modal className="fade" show={basicModal}>
                  <Modal.Header>
                    <Modal.Title>Add Category</Modal.Title>
                    <Button
                      variant=""
                      className="btn-close"
                      onClick={() => setBasicModal(false)}
                    >
                      
                    </Button>
                  </Modal.Header>
                  <Modal.Body>

                      <form action={'#!'} className="category-form" id="add-cat-form" >
                          <div className="form-group">
                              <label htmlFor="" className="form-label">Category Title</label>
                              <input type="text" placeholder="Category Title Here..." className="form-control" required/>
                          </div>


                      
                      </form>



                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      onClick={() => setBasicModal(false)}
                      variant="danger light"
                    >
                      Close
                    </Button>
                    <Button form={'add-cat-form'} variant="primary">Save Category</Button>
                  </Modal.Footer>
                </Modal>


                <Modal className="fade" show={editModal}>
                  <Modal.Header>
                    <Modal.Title>Add Category</Modal.Title>
                    <Button
                      variant=""
                      className="btn-close"
                      onClick={() => setEditModal(false)}
                    >
                      
                    </Button>
                  </Modal.Header>
                  <Modal.Body>

                      <form action={'#!'} className="category-form" id="add-cat-form" >
                          <div className="form-group">
                              <label htmlFor="" className="form-label">Category Title</label>
                              <input type="text" placeholder="Category Title Here..." className="form-control" required defaultValue="Category Name"/>
                          </div>

                          <div className="form-group" >
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" checked />
                                <label className="form-check-label">
                                Active
                                </label>
                            </div>
                          </div>
                      </form>



                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      onClick={() => setEditModal(false)}
                      variant="danger light"
                    >
                      Close
                    </Button>
                    <Button form={'add-cat-form'} variant="primary">Update Category</Button>
                  </Modal.Footer>
                </Modal>


        </>
    )
}
export default Category;