import React from 'react'
import { Bg } from '../components/Maths/Background'
import Container from '../components/Maths/Container';
import HeaderWithBackground from '../components/Maths/HeaderWithBackGround';
// importing custome style sheet 
import abacus from  '../assets/abacusimage.png'
import '../styles/Math.css'
function MatchChapterGenerality() {
  return (
    <Bg>
      <HeaderWithBackground
        lighttitle="CHINESE ABACUS"
        darktitle="GENERALITY"
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
            <h2 className="boxheading">Definition</h2>
            <p className="boxParagraph">
              The abacus is an ancient calculator still used in China and other
              Asian countries. In Chinese, this is called a "Suan pan". It is a
              frame divided into an upper part and a lower part by a bar called
              "the playback bar". The abacus can be used for addition,
              subtraction, multiplication and division
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
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <h2 className="boxheading">
              Description <br /> & <br /> Vocabulary
            </h2>
            {/* <div></div> */}
            <p className="boxParagraph" style={{ flexDirection: "column", }}>
              <img src={abacus} style={{ width:'80%', height:'50%'}}/>
              An abacus consists of a wooden frame, 13 vertical bamboo rods that
              indicate ones, tens, hundreds, etc. a central bar also called the
              playback bar. On each vertical rod there are 7 balls, 5 under the
              crossbar and 2 above it. Each ball above the crossbar is called a
              quinary and is worth 5.
            </p>
          </div>
        </Container>
      </div>
    </Bg>
  );
}
// const HeaderBar = styled.div`
//   display: flex;
//   flex-direction: row;
// `;
//   background-image: url(${images});

export default MatchChapterGenerality