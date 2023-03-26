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

function PlayGround() {
  const navigate = useNavigate();
  return (
    <Bg>
      <HeaderWithBackground
        lighttitle="CHINESE ABACUS"
        darktitle="PLAYGROUND"
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
            <p className="boxParagraph">
              This is the Playground, feel free to practice your abacus skills
              here
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
                <p
                  style={{
                    alignContent: "center",
                    border: "2px solid #000000",
                    borderRadius: "10px",
                  }}
                >
                  <AiFillCaretLeft /> 5 - 2 <AiFillCaretRight />
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
        <MainButton title={"Exit "} onressevent={() => navigate("/maths")} />
      </div>
    </Bg>
  );
}

export default PlayGround;
