import React,{useState,useEffect,useRef} from 'react';
import {Table} from 'react-bootstrap';
import { Link } from "react-router-dom";

import avatar1 from "../../../images/avatar/1.jpg";


const LeadsTable = ({setBasicModal})=>{

    const [data, setData] = useState(
        document.querySelectorAll("#job_data tbody tr")
      );

  const [test, settest] = useState(0);


      
  const sort = 5;
  const activePag = useRef(0);

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
        <Table responsive className="leads-table"  >
            <thead>
            <tr>
                
                <th>
                ID
                </th>
                <th>
                Email
                </th>
                <th>
                Hospital / Clinic / Dr. Name
                </th>
                <th>
                Website
                </th>
                <th>
                Gender
                </th>

                <th>
                    Status
                </th>

                <th>Hospital Identifier </th>
                <th>Contact Name </th>
                <th>First Name </th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Title / Specialty</th>
                <th>City </th>
                <th>County</th>
                <th>State</th>
                <th>Phone Number</th>
                <th>FAX Number</th>
                <th>NPI Number</th>


            </tr>
            </thead>
            <tbody>
            <tr>
            
            <td>
                542
            </td>

            <td>
                Lynn@gmail.com
            </td>
            

            <td>
                <div className="d-flex align-items-center">
                <img
                    src={avatar1}
                    className="rounded-lg me-2"
                    width="24"
                    alt=""
                />{" "}
                <span className="w-space-no">Dr. Jackson</span>
                </div>
            </td>
            <td>hospital.com </td>
            <td>M</td>

            <td>
                <div className="d-flex">
                <span class="badge light badge-success">
                    <i class="fa fa-circle text-success me-1"></i>
                    Verified
                </span>
                </div>
            </td>

            <td>43001</td>
            <td>Jeana Lynn Petree</td>
            <td>Jeana</td>
            <td>Lynn</td>
            <td>Petree</td>
            <td>Doctor Of Medicine (MD)</td>
            <td>Mason City </td>
            <td>Cerro Gordo </td>
            <td>IA </td>
            <td>50401-4818 </td>
            <td>50401-4818 </td>
            <td>641-424-0102 </td>

            </tr>

            <tr>
            
            <td>
                542
            </td>

            <td>
                Lynn@gmail.com
            </td>
            

            <td>
                <div className="d-flex align-items-center">
                <img
                    src={avatar1}
                    className="rounded-lg me-2"
                    width="24"
                    alt=""
                />{" "}
                <span className="w-space-no">Dr. Jackson</span>
                </div>
            </td>
            <td>hospital.com </td>
            <td>M</td>

            <td>
                <div className="d-flex">
                <span class="badge light badge-success">
                    <i class="fa fa-circle text-success me-1"></i>
                    Verified
                </span>
                </div>
            </td>

            <td>43001</td>
            <td>Jeana Lynn Petree</td>
            <td>Jeana</td>
            <td>Lynn</td>
            <td>Petree</td>
            <td>Doctor Of Medicine (MD)</td>
            <td>Mason City </td>
            <td>Cerro Gordo </td>
            <td>IA </td>
            <td>50401-4818 </td>
            <td>50401-4818 </td>
            <td>641-424-0102 </td>

            </tr>


            <tr>
            
            <td>
                542
            </td>

            <td>
                Lynn@gmail.com
            </td>
            

            <td>
                <div className="d-flex align-items-center">
                <img
                    src={avatar1}
                    className="rounded-lg me-2"
                    width="24"
                    alt=""
                />{" "}
                <span className="w-space-no">Dr. Jackson</span>
                </div>
            </td>
            <td>hospital.com </td>
            <td>M</td>

            <td>
                <div className="d-flex">
                <span class="badge light badge-danger">
                    <i class="fa fa-circle text-danger me-1"></i>
                    not-Verified
                </span>
                </div>
            </td>

            <td>43001</td>
            <td>Jeana Lynn Petree</td>
            <td>Jeana</td>
            <td>Lynn</td>
            <td>Petree</td>
            <td>Doctor Of Medicine (MD)</td>
            <td>Mason City </td>
            <td>Cerro Gordo </td>
            <td>IA </td>
            <td>50401-4818 </td>
            <td>50401-4818 </td>
            <td>641-424-0102 </td>

            </tr>
            
            </tbody>
        </Table>


        <div class="d-sm-flex text-center justify-content-between align-items-center mt-3"><div class="dataTables_info">Showing 3 to 3 of 3 entries</div><div class="dataTables_paginate paging_simple_numbers" id="example5_paginate"><a class="paginate_button previous disabled btn-default p-2" href="/react/demo/upload-leads"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a><span><a class="paginate_button  current p-2 " href="/react/demo/upload-leads">1</a></span><a class="paginate_button next p-2 " href="/react/demo/upload-leads"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a></div></div>

        </>
    )
}

export default LeadsTable;