import React, { useState} from 'react';
import { Link} from 'react-router-dom';
import {Dropdown, Modal} from 'react-bootstrap';
import swal from "sweetalert";
import {nanoid} from 'nanoid';

import { Editor } from "@tinymce/tinymce-react";

import card1 from './sub-1.jpg';
import card2 from './sub-2.jpg';
import user from '../../../images/task/user.jpg';
import AccessblitySelect from './AccessblitySelect';
import Billpayment from "../../comman/BillPayment"

const PackageList = [
	{ 
		id: 'paackage-'+1, 
        image: card2, 
        title: 'Silver Package',
        decp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        credits:"120",
        cost:"100",
        validity: "20",
        access: "filter,exclude",
	},
	{ 

        id: 'paackage-'+2, 
        image: card2, 
        title: 'Gold Package',
        decp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        validity: "50",
        credits:"220",
        cost:"200",
        access: "filter,team",

	},
	{ 
        id: 'paackage-'+3, 
        image: card2, 
        title: 'Platinum Package',
        decp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        validity: "100",
        credits:"500",
        cost:"300",
        access: "filter,team,exclude", 
	},
	
];

const AllSubscriptions = () => {


	
    const [postModal, setPostModal] = useState(false);
    const [BillPaymentModal, setBillPaymentModal] = useState(false);
    const [contacts, setContacts] = useState(PackageList);
    // delete data  
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];    
        const index = contacts.findIndex((contact)=> contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    }
    
    //Add data 
    const [addFormData, setAddFormData ] = useState({
        Cust_Id:'',
        Date_Join:'',
        Cust_Name:'',
        Location:'',
		image:'',
    }); 
    
    // Add contact function
    const handleAddFormChange = (event) => {
        event.preventDefault();    
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
    
     //Add Submit data
    const handleAddFormSubmit = (event)=> {
        event.preventDefault();
        var error = false;
		var errorMsg = '';
        if(addFormData.Date_Join === ""){
            error = true;
			errorMsg = 'Please fill date';
        }else if(addFormData.Cust_Name === ""){
            error = true;
			errorMsg = 'Please fill name.';
        }
        else if(addFormData.Location === ""){
            error = true;
			errorMsg = 'Please fill location';
        }
        if(!error){
            const newContact = {
                id: nanoid(),
                Cust_Id: addFormData.Cust_Id,
                Date_Join:  addFormData.Date_Join,
                Cust_Name:  addFormData.Cust_Name ,
                Location:  addFormData.Location,
				image: addFormData.image,
            };
            const newContacts = [...contacts, newContact];
            setContacts(newContacts);
            setPostModal(false);
            swal('Good job!', 'Successfully Added', "success");
            addFormData.Cust_Name = addFormData.Location = addFormData.Date_Join = '';         
            
        }else{
			swal('Oops', errorMsg, "error");
		}
    }; 
    
    
    const [editModal, setEditModal] = useState(false);
    
    // Edit function editable page loop
    const [editContactId, setEditContactId] = useState(null);
   
    // Edit function button click to edit
    const handleEditClick = ( event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
        const formValues = {
            Cust_Id: contact.Cust_Id,
            Date_Join: contact.Date_Join,
            Cust_Name: contact.Cust_Name,
            Location: contact.Location,
			image: contact.image,
        }
        setEditFormData(formValues);
        setEditModal(true);
    };
    
    
    // edit  data  
    const [editFormData, setEditFormData] = useState({
        Cust_Id:'',
        Date_Join:'',
        Cust_Name:'',
        Location:'',
		image:'',
    })
    
    //update data function
    const handleEditFormChange = (event) => {
        event.preventDefault();   
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };
    
    // edit form data submit
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
            id: editContactId,
            Cust_Id: editFormData.Cust_Id,
            Date_Join: editFormData.Date_Join,
            Cust_Name: editFormData.Cust_Name,
            Location: editFormData.Location,
			image: editFormData.image,
        }
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact)=> contact.id === editContactId);
        newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContactId(null);
        setEditModal(false);    
    }
    
	//For Image upload in ListBlog
	const [file, setFile] = React.useState(null)
    const fileHandler = (e) => {
        setFile(e.target.files[0]);
		setTimeout(function(){
			var src = document.getElementById("saveImageFile").getAttribute("src");
			addFormData.image = src; 
		}, 200);
    }
    
    return(
        <>
			
			<div className="mb-sm-5 mb-3 d-flex flex-wrap align-items-center text-head">
				<Link className="btn btn-primary font-w600 mb-2 me-auto" onClick={()=> setPostModal(true)}>+ New Packages</Link>
				 {/* <!-- Modal --> */}
				<Modal className="modal fade"  show={postModal} onHide={setPostModal} size="lg" >
					<div className="" role="document">
						<div className="">
							<form >
								<div className="modal-header">
									<h4 className="modal-title fs-20">Add Package</h4>
									<button type="button" className="btn-close" onClick={()=> setPostModal(false)} data-dismiss="modal"></button>
								</div>
								<div className="modal-body">
									<i className="flaticon-cancel-12 close"></i>
									<div className="add-contact-box">
										<div className="add-contact-content">
											<div className="image-placeholder">	
												<div className="avatar-edit">
													<input type="file" onChange={fileHandler} id="imageUpload" 
														onClick={(event) => setFile(event.target.value)}
													/> 					
													<label htmlFor="imageUpload" name=''  ></label>
												</div>
												<div className="avatar-preview">
													<div id="imagePreview">
														<img id="saveImageFile" src={file? URL.createObjectURL(file) : user} 
															alt={file? file.name : null}
														/>
													</div>
												</div>
											</div> 

											 <div className="form-group mb-3">
												<label className="text-black font-w500">Title</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="Cust_Id" required="required"
                                                        onChange={handleAddFormChange}
														placeholder="write Subscription Package Title"
													/>
													<span className="validation-text"></span>
												</div>
											</div>

                                            <div className="form-group mb-3"  >
												<label className="text-black font-w500">Package Features</label>
												<div className="contact-name" style={{ zIndex:1000 }}>
													<AccessblitySelect />
												</div>
											</div>



                                            <div className="form-group mb-3">
                                                <div className="row" >
                                                    

                                                    <div className="col-md-6" >
                                                        <label className="text-black font-w500">Number Of Credit</label>
                                                        <div className="contact-name">
                                                            <input type="number"  className="form-control"  autocomplete="off"
                                                                name="credit" required="required"
                                                                onChange={handleAddFormChange}
                                                                placeholder="Number of  Credit"
                                                            />
                                                            <span className="validation-text"></span>
                                                        </div>
                                                    </div> 


                                                    <div className="col-md-6" >
                                                        <label className="text-black font-w500">Price</label>
                                                        <div className="contact-name">
                                                            <input type="text"  className="form-control"  autocomplete="off"
                                                                name="cost" required="required"
                                                                onChange={handleAddFormChange}
                                                                placeholder="Pakcage Price"
                                                            />
                                                            <span className="validation-text"></span>
                                                        </div>
                                                    </div> 


                                                </div>

												
											</div>


                                            






                                            <div className="form-group mb-3">
												<label className="text-black font-w500">Validity Day's</label>
												<div className="contact-name">
													<input type="number"  className="form-control"  autocomplete="off"
														name="validatidy_days" required="required"
                                                        onChange={handleAddFormChange}
														placeholder="Enter Validity In Day's"
													/>
													<span className="validation-text"></span>
												</div>
											</div>




                                            <div className="form-group mb-3">
												<label className="text-black font-w500">Description</label>
												<div className="contact-occupation">


                                                <Editor
                                                    initialValue=""
                                                    init={{
                                                    height: 200,
                                                    menubar: false,
                                                    plugins: [
                                                        "advlist autolink lists link image code charmap print preview anchor",
                                                        "searchreplace visualblocks code fullscreen",
                                                        "insertdatetime media table paste code help wordcount",
                                                    ],
                                                    toolbar:
                                                        "undo redo | formatselect | code |link | image | bold italic backcolor |  alignleft aligncenter alignright alignjustify | \n" +
                                                        "bullist numlist outdent indent | removeformat | help ",
                                                        content_style: 'body { color: #828282 }'
                                                    }}
                                                    onEditorChange={handleAddFormChange}
                                                />
                                                
													
												</div>
											</div>

										</div>
									</div>
								</div>
								<div className="modal-footer">
                                    <button type="submit" className="btn btn-primary" onClick={handleAddFormSubmit}>Add</button>  
                                    <button type="button" onClick={()=> setPostModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Discard</button>      
								</div>
							</form>
                            
						</div>
					</div>
				</Modal>




                <Modal className="modal-addCompany"  show={BillPaymentModal} onHide={setBillPaymentModal} size="lg" >
                    <Billpayment/>
				</Modal>




                <Modal className="modal fade"  show={editModal} onHide={setEditModal} size={'lg'} >
					<div className="" role="document">
						<div className="">
							<form >
								<div className="modal-header">
									<h4 className="modal-title fs-20">Edit Packages</h4>
									<button type="button" className="btn-close" onClick={()=> setEditModal(false)} data-dismiss="modal"></button>
								</div>
								<div className="modal-body">
									<i className="flaticon-cancel-12 close"></i>
									<div className="add-contact-box">
										<div className="add-contact-content">
											<div className="image-placeholder">	
												<div className="avatar-edit">
													<input type="file" onChange={fileHandler} id="imageUpload" 
														onClick={(event) => setFile(event.target.value)}
													/> 					
													<label htmlFor="imageUpload" name=''  ></label>
												</div>
												<div className="avatar-preview">
													<div id="imagePreview">
														<img id="saveImageFile" src={file? URL.createObjectURL(file) : user} 
															alt={file? file.name : null}
														/>
													</div>
												</div>
											</div> 

											 <div className="form-group mb-3">
												<label className="text-black font-w500">Title</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="Cust_Id" required="required"
                                                        onChange={handleAddFormChange}
														placeholder="write Subscription Package Title"
													/>
													<span className="validation-text"></span>
												</div>
											</div>

                                            <div className="form-group mb-3"  >
												<label className="text-black font-w500">Package Features</label>
												<div className="contact-name" style={{ zIndex:1000 }}>
													<AccessblitySelect />
												</div>
											</div>



                                            <div className="form-group mb-3">
                                                <div className="row" >
                                                    

                                                    <div className="col-md-6" >
                                                        <label className="text-black font-w500">Number Of Credit</label>
                                                        <div className="contact-name">
                                                            <input type="number"  className="form-control"  autocomplete="off"
                                                                name="credit" required="required"
                                                                onChange={handleAddFormChange}
                                                                placeholder="Number of  Credit"
                                                            />
                                                            <span className="validation-text"></span>
                                                        </div>
                                                    </div> 


                                                    <div className="col-md-6" >
                                                        <label className="text-black font-w500">Price</label>
                                                        <div className="contact-name">
                                                            <input type="text"  className="form-control"  autocomplete="off"
                                                                name="cost" required="required"
                                                                onChange={handleAddFormChange}
                                                                placeholder="Pakcage Price"
                                                            />
                                                            <span className="validation-text"></span>
                                                        </div>
                                                    </div> 


                                                </div>

												
											</div>


                                            






                                            <div className="form-group mb-3">
												<label className="text-black font-w500">Validity Day's</label>
												<div className="contact-name">
													<input type="number"  className="form-control"  autocomplete="off"
														name="validatidy_days" required="required"
                                                        onChange={handleAddFormChange}
														placeholder="Enter Validity In Day's"
													/>
													<span className="validation-text"></span>
												</div>
											</div>




                                            <div className="form-group mb-3">
												<label className="text-black font-w500">Description</label>
												<div className="contact-occupation">


                                                <Editor
                                                    initialValue=""
                                                    init={{
                                                    height: 200,
                                                    menubar: false,
                                                    plugins: [
                                                        "advlist autolink lists link image code charmap print preview anchor",
                                                        "searchreplace visualblocks code fullscreen",
                                                        "insertdatetime media table paste code help wordcount",
                                                    ],
                                                    toolbar:
                                                        "undo redo | formatselect | code |link | image | bold italic backcolor |  alignleft aligncenter alignright alignjustify | \n" +
                                                        "bullist numlist outdent indent | removeformat | help ",
                                                        content_style: 'body { color: #828282 }'
                                                    }}
                                                    onEditorChange={handleAddFormChange}
                                                />
                                                
													
												</div>
											</div>

										</div>
									</div>
								</div>
								<div className="modal-footer">
                                    <button type="submit" className="btn btn-primary" onClick={handleEditFormSubmit}>Save</button>  
                                    <button type="button" onClick={()=> setEditModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Discard</button>      
								</div>
							</form>
                            
						</div>
					</div>
				</Modal>
				
				<Link to={"#"} className="btn btn-secondary btn-rounded mb-2"><i className="fas fa-sync"></i></Link>
			</div>          
            <div className="row">
                {contacts.map((contact, index)=>(
                    <div  className="col-xl-3 col-xxl-4 col-lg-6 col-md-6 col-sm-6" key={index}>
                        <div  className="card project-boxed">
							<div className="img-bx">
								<img src={contact.image} alt="" className=" me-3 card-list-img w-100" width="130" />
                            </div>	

                            <div className="card-header align-items-start">
                                <div>
                                    <p className="fs-14 mb-2 text-primary">#{contact.id}</p>
                                    <h6 className="fs-18 font-w500 mb-3">
                                        <Link to={"#"}className="text-black user-name">
                                            {contact.title}
                                        </Link>

                                        
                                    </h6> 
                                    <div className="text-dark fs-14 text-nowrap"><i className="fa fa-calendar me-3" aria-hidden="true"></i>
                                        Created on May 8th, 2022
                                    </div>
                                    <div>
                                        <Link className="btn btn-primary font-w600 me-auto" style={{width:"100%",padding:"10px",marginLeft:"15px",marginTop:"15px"}} onClick={()=> setBillPaymentModal(true)}>Payment</Link>
                                    </div>
                                </div>
                                
                                <Dropdown className="">
                                    <Dropdown.Toggle variant="" as="div" className="btn-link i-false" >	
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
											<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
											<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#342E59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>                                    </Dropdown.Toggle>	
                                    <Dropdown.Menu alignRight={true} className="dropdown-menu-right">
                                        <Dropdown.Item 
                                            onClick={(event) => handleEditClick(event, contact)}
                                        >Edit
                                        </Dropdown.Item>
                                        <Dropdown.Item className="text-danger"
                                            onClick={()=>handleDeleteClick(contact.id)}
                                        >Delete
                                        </Dropdown.Item>		
                                    </Dropdown.Menu>	
                                </Dropdown>
                            </div>
                            <div className="card-body p-0 pb-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <span className="mb-0 title">Price</span> :
                                        <span className="text-black ms-2"> $ {contact.cost}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="mb-0 title">Credits</span> :
                                        <span className="text-black ms-2">{contact.credits}</span>
                                    </li>

                                    <li className="list-group-item">
                                        <span className="mb-0 title">Validity</span> :
                                        <span className="text-black ms-2">{contact.validity}</span>
                                    </li>
                                    <li className="list-group-item">
                                        <span className="mb-0 title">Accessibility</span> :
                                        <span className="text-black desc-text ms-2">{contact.access}</span>
                                    </li>
                                </ul>
                            </div>
                           
                        </div>
                    </div>            
                ))}  
            </div>
        </>
    );     
}

export default AllSubscriptions;