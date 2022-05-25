import React,{useState, useRef, useContext, useEffect} from 'react';
import { Link } from "react-router-dom";
// import  {Dropdown} from 'react-bootstrap';
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import { Dropdown, Tab, Nav, Modal } from "react-bootstrap";
import "react-calendar/dist/Calendar.css";

///Images

import bg1 from '../../../images/big/img1.jpg';

///Import



//Import

// import Button from '../bootstrap/Button';

const DropdownAction = () =>{
	return(
		<>
			<Dropdown className="dropdown">
				<Dropdown.Toggle as="div" className="btn-link i-false" data-bs-toggle="dropdown" aria-expanded="false">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</Dropdown.Toggle>
				<Dropdown.Menu className="dropdown-menu">
					<Dropdown.Item className="dropdown-item">Block</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	)
}



const UserManagement = () => {
	const [postModal, setPostModal] = useState(false);
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
	return(
		<>
		
			<div className="row">				
				<Tab.Container defaultActiveKey="All">
				<div className="row">
					<div className="col-xl-12">
						<div className="d-flex mb-4 justify-content-between align-items-center flex-wrap">
							<div className="card-tabs mt-3 mt-sm-0 mb-xxl-0 mb-4">
								<Nav as="ul" className="nav nav-tabs">
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="All">Active Users</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="Pending">Blocked Users</Nav.Link>
									</Nav.Item>
								</Nav>
							</div>
							
						</div>
						<Tab.Content>
				
							<Tab.Pane eventKey="All">
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
																	<Link onClick={()=> setPostModal(true)} className="text-blue">Yonna</Link>
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
															<h5>User-1</h5>
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
														<Link to={"#"} className="me-2 btn btn-danger light" title="Block">
														<i className="fa fa-ban"></i>
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
																	<Link onClick={()=> setPostModal(true)} className="text-blue">Yonna</Link>
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
															<h5>User-1</h5>
														</div>
													</td>
													
													<td>
														<span class="badge light badge-success">
															<i class="fa fa-circle text-success me-1"></i>
															Active
														</span>
													</td>
                                                    <td><Link to={"#"} className="me-2 btn btn-danger light" title="Block">
														<i className="fa fa-ban"></i>
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
																	<Link onClick={()=> setPostModal(true)} className="text-blue">Yonna</Link>
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
															<h5>User-1</h5>
														</div>
													</td>
													
													<td>
														<span class="badge light badge-success">
															<i class="fa fa-circle text-success me-1"></i>
															Active
														</span>
													</td>
                                                    <td><Link to={"#"} className="me-2 btn btn-danger light" title="Block">
														<i className="fa fa-ban"></i>
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
																	<Link onClick={()=> setPostModal(true)} className="text-blue">Yonna</Link>
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
															<h5>User-1</h5>
														</div>
													</td>
													
													<td>
														<span class="badge light badge-success">
															<i class="fa fa-circle text-success me-1"></i>
															Active
														</span>
													</td>
                                                    <td><Link to={"#"} className="me-2 btn btn-danger light" title="Block">
														<i className="fa fa-ban"></i>
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
													to="/user-management"
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
														  to="/user-management"
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
													to="/user-management"
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
							</Tab.Pane>
							<Tab.Pane eventKey="Pending">
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
																	<Link onClick={()=> setPostModal(true)} className="text-blue">Yonna</Link>
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
															<h5>User-1</h5>
														</div>
													</td>
													
													
													<td>
														<span class="badge light badge-danger">
															<i class="fa fa-circle text-danger me-1"></i>
															Blocked
														</span>
													</td>
													<td>
														<Link to={"#"} className="me-2 btn btn-success light" title="Unblock">
														<i className="fa fa-ban"></i>
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
																	<Link onClick={()=> setPostModal(true)} className="text-blue">Yonna</Link>
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
															<h5>Premium</h5>
														</div>
													</td>
													<td>
														<div>
															<h5>User-1</h5>
														</div>
													</td>
													
													<td>
														<span class="badge light badge-danger">
															<i class="fa fa-circle text-danger me-1"></i>
															Blocked
														</span>
													</td>
													<td><Link to={"#"} className="me-2 btn btn-success light" title="Unblock">
														<i className="fa fa-ban"></i>
														</Link></td>
													
												</tr>
												<tr role="row" className="odd">
													
													<td>
														<div className="media-bx">
															{/* <img className="me-3 rounded" src={pic1} alt="" /> */}
															<div>
																{/* <span className="text-primary">#GS-2234</span> */}
																<h4 className="mb-0 mt-1">
																	<Link onClick={()=> setPostModal(true)} className="text-blue">Yonna</Link>
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
															<h5>Premium</h5>
														</div>
													</td>
													<td>
														<div>
															<h5>User-1</h5>
														</div>
													</td>
													
													<td>
														<span class="badge light badge-danger">
															<i class="fa fa-circle text-danger me-1"></i>
															Blocked
														</span>
													</td>
													<td><Link to={"#"} className="me-2 btn btn-success light" title="Unblock">
														<i className="fa fa-ban"></i>
														</Link></td>
													
												</tr>
												<tr role="row" className="even">
													
													<td>
														<div className="media-bx">
															{/* <img className="me-3 rounded" src={pic1} alt="" /> */}
															<div>
																{/* <span className="text-primary">#GS-2234</span> */}
																<h4 className="mb-0 mt-1">
																	<Link onClick={()=> setPostModal(true)} className="text-blue">Yonna</Link>
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
															<h5>Premium</h5>
														</div>
													</td>
													<td>
														<div>
															<h5>User-1</h5>
														</div>
													</td>
													
													<td>
														<span class="badge light badge-danger">
															<i class="fa fa-circle text-danger me-1"></i>
															Blocked
														</span>
													</td>
													<td><Link to={"#"} className="me-2 btn btn-success light" title="Unblock">
														<i className="fa fa-ban"></i>
														</Link></td>
												
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
													to="/user-management"
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
														  to="/user-management"
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
													to="/user-management"
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
							</Tab.Pane>
                            
							
						</Tab.Content>
					</div>
				</div>	
			</Tab.Container>	
				
				
			</div>	
			<Modal className="modal fade"  show={postModal} onHide={setPostModal} >
					<div className="" role="document">
						<div className="">
							<form >
								<div className="modal-header">
									<h4 className="modal-title fs-20">User Detail</h4>
									<button type="button" className="btn-close" onClick={()=> setPostModal(false)} data-dismiss="modal"></button>
								</div>
								<div className="modal-body" style={{padding: 0}}>
									<i className="flaticon-cancel-12 close"></i>
									<div className="add-contact-box">
										<div className="add-contact-content">
										<div className="col-12">
										<div className="card overflow-hidden" style={{borderRadius: 0}}>
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
	)
}
export default UserManagement;