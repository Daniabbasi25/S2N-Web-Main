import React from 'react'
import { Bg } from '../components/Maths/Background'
import Container from '../components/Maths/Container';
import HeaderWithBackground from '../components/Maths/HeaderWithBackGround';
import "../styles/Math.css";
import m1 from '../assets/m1.png'
import m2 from '../assets/m2.png'
import m3 from '../assets/m3.png'
import { useNavigate } from 'react-router-dom';
function MCQexersise() {
     const navigate = useNavigate();
  return (
    <Bg>
      <HeaderWithBackground
        lighttitle="CHINESE ABACUS"
        darktitle="EXCERCISES"
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "1rem",
        }}
      >
        <Container>
          <h2 className="boxheading">
            Choose the correct option for the given questions(There is only one
            correct answer)
          </h2>
        </Container>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "1rem",
        }}
      >
        <Container>
          <h3 className="boxheading" style={{ textAlign: "left" }}>
            In chinese abacus, we find tens at which position?
          </h3>

          <div className="checkboxitem">
            <input type="radio" name="1" id="" className="checkboxpoint" />
            <p className="label">At the 2nd column</p>
          </div>
          <div className="checkboxitem">
            <input type="radio" name="1" id="" className="checkboxpoint" />
            <p className="label">At the 3rd column</p>
          </div>
          <div className="checkboxitem">
            <input type="radio" name="1" id="" className="checkboxpoint" />
            <p className="label">At the 4th column</p>
          </div>
        </Container>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "1rem",
        }}
      >
        <Container>
          <h3 className="boxheading" style={{ textAlign: "left" }}>
            Which of the given figures represent 15 on the abacus?
          </h3>
          <div style={{ display: "flex" }}>
            <div className="checkboxitem">
              <input type="radio" name="2" id="" className="checkboxpoint" />
              <img src={m1} style={{ width: "40%" }} />
            </div>
            <div className="checkboxitem">
              <input type="radio" name="2" id="" className="checkboxpoint" />
              <img src={m2} style={{ width: "40%" }} />
            </div>
            <div className="checkboxitem">
              <input type="radio" name="2" id="" className="checkboxpoint" />
              <img src={m3} style={{ width: "40%" }} />
            </div>
          </div>
        </Container>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "1rem",
        }}
      >
        <input
          type="button"
          value="Submit"
          className="Submitbutton"
          onClick={() => navigate("/MathsQuestion")}
        />
      </div>
    </Bg>
  );
}

export default MCQexersise