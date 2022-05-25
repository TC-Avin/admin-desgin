import React,{ useMemo,useState } from 'react';
import PageTitle from "../../layouts/PageTitle";
import Select from "react-select";
import LeadsTable from './LeadsTable';



import { Button, Modal } from "react-bootstrap";





import {
    Row,  
    Col,
    Card,
    Table,
    Tab, 
    Nav
  } from "react-bootstrap";


  


import './table.css';


const options = [
  { value: "1", label: "Cat-1" },
  { value: "2", label: "Cat-2" },
  { value: "3", label: "Cat-3" },
];


const Leads = ()=>{


  const tabData = [
    {
      name: "Cat-1 (3)",
      icon: "list",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      name: "Cat-2 (3)",
      icon: "list",
      content:
        "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
    },
    {
      name: "Cat-3 (3)",
      icon: "list",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },

    {
      name: "Cat-4 (3)",
      icon: "list",
      content:
        "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
    },
  ];



  const chackbox = document.querySelectorAll(".bs_exam_topper input");
  const motherChackBox = document.querySelector(".bs_exam_topper_all input");
  const [basicModal, setBasicModal]         = useState(false);
  const [addLeadsModal, setAddLeadsModal]   = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);



  
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
  const svg1 = (
    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <circle fill="#000000" cx="5" cy="12" r="2"></circle>
        <circle fill="#000000" cx="12" cy="12" r="2"></circle>
        <circle fill="#000000" cx="19" cy="12" r="2"></circle>
      </g>
    </svg>
  );
	

    return (
        <>





      <div className="card">
      

        <Col lg={12}>
          <Card>
            <Card.Header className="d-block">
                <div className="row" >
                <div className="col-md-9"  >
                  <Card.Title>
                    All Leads  (12)
                  </Card.Title>
                </div>
                <div className="col-md-3 text-right"   >
                  <a href="#"  className="btn btn-primary"
                     style={{justifyContent:'space-around',float:'right'}}
                     onClick={()=>setAddLeadsModal(true)}
                     >
                        Upload Leads <i className="fa fa-upload" ></i>
                    </a>
                </div>
                </div>
            </Card.Header>
            <Card.Body>

            <div className="default-tab">
                <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                  <Nav as="ul" className="nav-tabs">
                    {tabData.map((data, i) => (
                      <Nav.Item as="li" key={i}>
                        <Nav.Link eventKey={data.name.toLowerCase()}>
                          <i className={`la la-${data.icon}-alt me-2`} />
                          {data.name}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Tab.Content className="pt-4">
                    {tabData.map((data, i) => (
                      <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                          <LeadsTable setBasicModal={setBasicModal} />
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>


              
              

            </Card.Body>
          </Card>
        </Col>




        <Modal className="fade" show={basicModal} size="lg" >
          <Modal.Header>
            <Modal.Title>Lead Details</Modal.Title>
            <Button
              variant=""
              className="btn-close"
              onClick={() => setBasicModal(false)}
            >
              
            </Button>
          </Modal.Header>
          <Modal.Body>

            <Card>

              <div className='row' >

                <div className='col-md-6' >
                <table className="table table-responsive table-stripped">
            <tr>
                  <td>Email </td>
                  <th>Lynn</th>
                </tr>

                <tr>
                  <td>Hospital / Clinic / Doctor Name </td>
                  <th>RADIOLOGISTS OF NORTH IOWA</th>
                </tr>

                
                <tr>
                  <td>Web Address</td>
                  <th>http://www.marshfieldclinic.org</th>
                </tr>

                
                <tr>
                  <td>Gender </td>
                  <th>N/A</th>
                </tr>


                
                <tr>
                  <td>Hospital Identifier </td>
                  <th>43001</th>
                </tr>

                
                <tr>
                  <td>Contact Name </td>
                  <th>Jeana Lynn Petree</th>
                </tr>


                <tr>
                  <td>First Name </td>
                  <th>Jeana</th>
                </tr>


                
                <tr>
                  <td>Middle Name</td>
                  <th>Lynn</th>
                </tr>


                
                <tr>
                  <td>Last Name</td>
                  <th>Petree</th>
                </tr>


                
                <tr>
                  <td>Title / Specialty</td>
                  <th>Doctor Of Medicine (MD)</th>
                </tr>
            </table>
            
                </div>

                <div className="col-md-6" >

                  
            <table className="table table-responsive table-stripped">
                

                
            


                
                <tr>
                  <td>Address </td>
                  <th>1416 6th St Sw
                </th>
                </tr>

                <tr>
                  <td>City </td>
                  <th>Mason City

                </th>
                </tr>

                <tr>
                  <td>County	 </td>
                  <th>Cerro Gordo

                </th>
                </tr>

                <tr>
                  <td>State	 </td>
                  <th>IA

                </th>
                </tr>

                <tr>
                  <td>ZIP Code </td>
                  <th>50401-4818

                </th>
                </tr>

                <tr>
                  <td>Country </td>
                  <th>USA

                </th>
                </tr>

                <tr>
                  <td>Phone Number	 </td>
                  <th>641-424-0102
                </th>
                </tr>

                <tr>
                  <td>FAX Number		 </td>
                  <th>641-424-0102

                </th>
                </tr>

                <tr>
                  <td>NPI Number</td>
                  <th>1416 6th St Sw
                </th>
                </tr>



                


                    



                
              </table>


                </div>

              </div>

              
            



            </Card>

            


          </Modal.Body>
          
        </Modal>



        <Modal className="fade" show={addLeadsModal} size="lg" >
          <Modal.Header>
            <Modal.Title>Add Leads </Modal.Title>
            <Button
              variant=""
              className="btn-close"
              onClick={() => setAddLeadsModal(false)}
            >
              
            </Button>
          </Modal.Header>
          <Modal.Body>



            <form className="" >
              <div className="form-group" >
                <label htmlFor="">Select Category</label>
                <div className=''>

                <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                style={{
                  lineHeight: "40px",
                  color: "#7e7e7e",
                  paddingLeft: " 15px",
                }}
              />
                </div>
              </div>

              <div className="form-group mt-5">
                  <label htmlFor="drop-box" className="border shadow-sm p-5 text-center w-100" >Upload CSV or Drag CSV
                    <input type="file"  id="drop-box" style={{ display:'none' }} />
                  </label>
              </div>

              <div className="form-group text-center d-flex justified-content-center">
                <button className="btn btn-primary" >Save</button>
              </div> 
            </form>


          </Modal.Body>
          
        </Modal>


		  </div>
        </>
    )
}
export default Leads;