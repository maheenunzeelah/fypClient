import React from "react";
import { MDBBtn, MDBBtnGroup, MDBIcon, MDBContainer } from "mdbreact";

const Preview = () => {
  return (
      <MDBContainer>
  <MDBBtnGroup>
        <MDBBtn color="danger">
          <MDBIcon fab icon=" fas fa-comment" class="btn btn-outline-default btn-rounded waves-effect" className="pr-1" /> Test Introduction
        </MDBBtn>
        <MDBBtn color="danger">
          <MDBIcon fab icon=" fas fa-copy" class="btn btn-elegant" className="pr-1" /> Duplicate
        </MDBBtn>
        <MDBBtn color="danger">
          <MDBIcon fab icon=" fas fa-print" className="pr-1" /> Print
        </MDBBtn>
        <MDBBtn color="danger">
          <MDBIcon fab icon=" fas fa-cog" className="pr-1" /> Settings
        </MDBBtn>
        <MDBBtn color="danger">
          <MDBIcon fab icon=" fas fa-trash" className="pr-1" /> Delete
        </MDBBtn>
    </MDBBtnGroup>
    <MDBBtnGroup>
        <MDBBtn color="black" className="white-text">
          <MDBIcon fab className="pr-1" /> Preview
        </MDBBtn>
        <MDBBtn color="black" className="white-text">
          <MDBIcon fab className="pr-1" /> Assign and Select Settings
        </MDBBtn>
    </MDBBtnGroup>
  
  </MDBContainer>

  )
}

export default Preview;