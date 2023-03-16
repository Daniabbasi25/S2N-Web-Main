import React from "react";
import "./BackgroundHeader.css";
import CustomeNav from "./CustomeNav";
function HeaderWithBackground({ lighttitle, darktitle }) {
  return (
    <div className="NavBarHeader">
      {/* <HeaderBar> */}

      <CustomeNav />
      <h3 className="lightheading">{lighttitle}</h3>
      <h2 className="icon"> > </h2>
      <h1 className="mainheading">{darktitle} </h1>
      {/* </HeaderBar> */}
    </div>
  );
}
// const HeaderBar = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
//   background-image: url(${images});

export default HeaderWithBackground;
