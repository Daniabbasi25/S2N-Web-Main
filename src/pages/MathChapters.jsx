import React from 'react'
import styled from "styled-components";

import { Bg } from '../components/Maths/Background'
import CustomeNav from '../components/Maths/CustomeNav';
import MainButton from '../components/Maths/MainButton';
import MainHeading from '../components/Maths/MainHeading';
import SubTitle from '../components/Maths/SubTitle';
import Navbar from "../components/Navbar";
import "../styles/Math.css";
function MathChapters() {
  return (
    <Bg>
      <HeaderBar>
        {/* <Navbar /> */}
        <CustomeNav />
      </HeaderBar>
      <MainHeading />
      <SubTitle title="Chapters" />
      <div className="row">
        <MainButton
          title="Generality"
          onressevent={() => navigate("/mathsChapters")}
        />
        <MainButton
          title="Write Numbers"
          onressevent={() => navigate("/mathsChapters")}
        />
        <MainButton
          title="Decimals"
          onressevent={() => navigate("/mathsChapters")}
        />
        <MainButton
          title="Simple Addition"
          onressevent={() => navigate("/mathsChapters")}
        />
        <MainButton
          title="Simple Subtraction"
          onressevent={() => navigate("/mathsChapters")}
        />
      </div>
    </Bg>
  );
}
const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
`;


export default MathChapters