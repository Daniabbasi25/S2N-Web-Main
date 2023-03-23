import React from "react";
import { Bg } from "../components/Maths/Background";
import Container from "../components/Maths/Container";
import HeaderWithBackground from "../components/Maths/HeaderWithBackGround";
import "../styles/Math.css";

import { useNavigate } from "react-router-dom";
function LongQuestion() {
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
          <h2 className="boxheading">Answer the Questions as instructed</h2>
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
          <h4
            className="logquestoncontainerheading"
            style={{ textAlign: "left" }}
          >
            What is the number written on the abacus if the following balls are
            activated:
          </h4>

          <div className="questioncontainer">
            <p className="quesion">
              3 unaries in the hundreds, 2 unaries in the tens and 1 quinary in
              units
            </p>
            <input type="text" name="" id="textanswer" />
          </div>
          <div className="questioncontainer">
            <p className="quesion">
              1 quinary in thousand units, 4 unaries and 1 quinary in tens and 3
              unaries in units
            </p>
            <input type="text" name="" id="textanswer" />
          </div>
          <div className="questioncontainer">
            <p className="quesion">
              1 quinary and 3 unaries in the units of thousands, 1 unary and 1
              quinary in the hundreds and 2 unaries in the tens
            </p>
            <input type="text" name="" id="textanswer" />
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
          onClick={() => navigate("/LongQuestion")}
        />
      </div>
    </Bg>
  );
}

export default LongQuestion;
