import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import { Bg } from '../components/Maths/Background'
import CustomeNav from '../components/Maths/CustomeNav';
import MainButton from '../components/Maths/MainButton';
import MainHeading from '../components/Maths/MainHeading';
import SubTitle from '../components/Maths/SubTitle';
import Navbar from "../components/Navbar";
import "../styles/Math.css";
function MathChapters() {
  const navigate = useNavigate();
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
          onressevent={() => navigate("/Generality")}
        />
        <MainButton
          title="Write Numbers"
          onressevent={() => navigate("/NumbersAbacus")}
        />
        {/* <MainButton
          title="Decimals"
          onressevent={() => navigate("/mathsChapters")}
        /> */}
        <MainButton
          title="Simple Addition"
          onressevent={() => navigate("/SimpleAddition")}
        />
        <MainButton
          title="Simple Subtraction"
          onressevent={() => navigate("/SubTraction")}
        />
      </div>
    </Bg>
  );
}
const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  padding-top:3rem
`;


export default MathChapters