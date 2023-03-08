import React from 'react'
import './style.css'
function MainHeading({ linebreak }) {
  return <h1 className="heading">CHINESE {linebreak && <br />} ABACUS</h1>;
}

export default MainHeading