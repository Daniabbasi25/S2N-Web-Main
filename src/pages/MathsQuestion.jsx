import React from "react";
import { Bg } from "../components/Maths/Background";
import Container from "../components/Maths/Container";
import HeaderWithBackground from "../components/Maths/HeaderWithBackGround";
import "../styles/Math.css";

import { useNavigate } from "react-router-dom";
function MathsQuestion() {
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
          <h3 className="boxheading" style={{ textAlign: "left" }}>
            Which of the given figures represent 15 on the abacus?
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <div
              className="checkboxitem"
              style={{ flexDirection: "column", marginBottom: "1rem" }}
            >
              <div className="mathqueston">
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <p>2</p>
              </div>
              <input type="number" name="inputfield" id="inputfield" />
            </div>
            <div
              className="checkboxitem"
              style={{ flexDirection: "column", marginBottom: "1rem" }}
            >
              <div className="mathqueston">
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <p>2</p>
              </div>
              <input type="number" name="inputfield" id="inputfield" />
            </div>
            <div
              className="checkboxitem"
              style={{ flexDirection: "column", marginBottom: "1rem" }}
            >
              <div className="mathqueston">
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <p>2</p>
              </div>
              <input type="number" name="inputfield" id="inputfield" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <div
              className="checkboxitem"
              style={{ flexDirection: "column", marginBottom: "1rem" }}
            >
              <div className="mathqueston">
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <p>2</p>
              </div>
              <input type="number" name="inputfield" id="inputfield" />
            </div>
            <div
              className="checkboxitem"
              style={{ flexDirection: "column", marginBottom: "1rem" }}
            >
              <div className="mathqueston">
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <p>2</p>
              </div>
              <input type="number" name="inputfield" id="inputfield" />
            </div>
            <div
              className="checkboxitem"
              style={{ flexDirection: "column", marginBottom: "1rem" }}
            >
              <div className="mathqueston">
                <p>2</p>
                <p>2</p>
                <p>2</p>
                <p>2</p>
              </div>
              <input type="number" name="inputfield" id="inputfield" />
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
          onClick={() => navigate("/LongQuestion")}
        />
      </div>
    </Bg>
  );
}

export default MathsQuestion;
