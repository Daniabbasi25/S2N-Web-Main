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

function NumbersAbacus() {
  const navigate = useNavigate();
  return (
    <Bg>
      <HeaderWithBackground
        lighttitle="CHINESE ABACUS"
        darktitle="NUMBERS ON AN ABACUS"
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
              To write a number on the abacus by moving the balls towards the
              reading bar(cross-bar)
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
              Display <br /> Several <br /> Numbers on <br /> the Abacus
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
                  Display the following numbers in economic registration on the
                  abacus
                </p>
                <p
                  style={{
                    alignContent: "center",
                    border: "2px solid #000000",
                    borderRadius: "10px",
                  }}
                >
                  <AiFillCaretLeft /> 0 <AiFillCaretRight />
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

export default NumbersAbacus;
