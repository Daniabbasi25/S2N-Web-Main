import React from "react";
import { Bg } from "../components/Maths/Background";
import Container from "../components/Maths/Container";
import HeaderWithBackground from "../components/Maths/HeaderWithBackGround";
// importing custome style sheet
import abacus from "../assets/abacusimage.png";
import "../styles/Math.css";
import MainButton from "../components/Maths/MainButton";
import { Navigate, useNavigate } from "react-router-dom";
import AbacusCalculator from "../components/Maths/AbacusCalculator";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function SimpleAddition() {
  const navigate = useNavigate();
  return (
    <Bg>
      <HeaderWithBackground
        lighttitle="CHINESE ABACUS"
        darktitle="SIMPLE ADDITION"
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <h2 className="boxheading">Principle</h2>
            <p className="boxParagraph">
              Addition is probably the simplest operation to perform on the
              Chinese abacus. You enter the first term and add a second, then
              the following ones as you go along.
            </p>
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <h2 className="boxheading" style={{}}>
              Add Numbers on <br /> the Abacus
            </h2>
            <div
              className="boxParagraph"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <AbacusCalculator />
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <p
                    style={{
                      alignContent: "center",
                      border: "2px solid #000000",
                      borderRadius: "10px",
                    }}
                  >
                    <AiFillCaretLeft /> 0 <AiFillCaretRight />
                  </p>
                  <p>+</p>
                  <p
                    style={{
                      alignContent: "center",
                      border: "2px solid #000000",
                      borderRadius: "10px",
                    }}
                  >
                    <AiFillCaretLeft /> 0 <AiFillCaretRight />
                  </p>
                </div>
              </div>
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
        <Container>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <h2 className="boxheading" style={{}}>
              Excercise
            </h2>
            <div
              className="boxParagraph"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>
                  Do the following calculations in economic registration on the
                  abacus
                </p>
                <p
                  style={{
                    alignContent: "center",
                    border: "2px solid #000000",
                    borderRadius: "10px",
                  }}
                >
                  <AiFillCaretLeft /> 5 + 2 <AiFillCaretRight />
                </p>
                <AbacusCalculator />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <MainButton title={"Next "} onressevent={() => navigate("/MCQS")} />
      </div>
    </Bg>
  );
}
export default SimpleAddition;
