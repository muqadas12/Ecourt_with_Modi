import React, { useState } from "react";
import police from "../../assets/Images/police.jpg";
 import "./Police.css"
import axios from "axios"
import {Link} from "react-router-dom"
import { Modal, Button } from "react-bootstrap";

function PoliceCon(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [to,setTo] = useState();
  const [from,setFrom] = useState();
  const [msg,setMsg] = useState();


  const [uploadsummon, setuploadsummon] = useState();

  const send = event => {
    const filesArray = [];
    filesArray.push(uploadsummon);
    
    // alert("Your summon has been sent!")

    const formdata = new FormData();
    filesArray.map((file) => formdata.append("files", file));
    formdata.append("to", to);
    formdata.append("from", from);
    formdata.append("msg", msg);


   


    axios.post("http://localhost:2000/api/summon/police", formdata
    ).then(res => {
      console.log(res.data.place);
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
     <img className="police-top" src={police} alt="police"/>
     <br/>
     <br/>

     <h5 className="police-head-one" >Fill the following fields to send summon to police station</h5>
     <hr className="new"/>
      <form action="#" method="post" enctype="multipart/form-data" >
        <label className="police-email" htmlFor="to">Police Station email:</label>
        <select  type="textsselect-police"
          id="to"
          onChange={event => {
            const { value } = event.target;
            setTo(value)}}>
        <option>sho.aabpara@islamabadpolice.gov.pk</option>
        <option>muqaddasshaaban@gmail.com</option>

        <option>sho.kohsar@islamabadpolice.gov.pk</option> 
        <option>sho.margalla@islamabadpolice.gov.pk</option>
        <option>sho.banigala@islamabadpolice.gov.pk</option> 
        <option>sho.kcompany@islamabadpolice.gov.pk</option>


      </select>
        
      <br/>
      <br/>
        <label className="police-from" htmlFor="to">From:</label>
        <input
          type="texts-police-two"
          id="from"
          onChange={event => {
            const { value } = event.target;
            setFrom(value)
          }}
        />
        <br />

        
     <br/>
     
        <label className="police-from" htmlFor="msg">Message:</label>
        <input
           type="textareaa"
         
          onChange={event => {
            const { value } = event.target;
            setMsg(value)
          }}
        />
        <br />
        
        <label className="upload-police-summon" htmlFor="file">Upload summon:</label>
        <input type="file" id="file" name="files" accept=".pdf,.jpg" onChange={event => {

          const uploadsummon = event.target.files[0]
          setuploadsummon(uploadsummon)
          console.log(uploadsummon)
        }} />
       
      </form>
      <button onClick={()=>{
        send()
        handleShow()
      }}
      className="submit-summon-police"
      
      
      >Send</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Summon document is Sent!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

<Link to="/CMS/SummonStatus"><p className="paraconnect">Click here to update about served Summon</p></Link>


    </div>

  )
}
export default PoliceCon;











