import React from 'react'
import styled from "styled-components";
import MainButton from '../components/Maths/MainButton';
import MainHeading from '../components/Maths/MainHeading';
import SubTitle from '../components/Maths/SubTitle';
import Navbar from "../components/Navbar";
import "../styles/Math.css";
import { useNavigate } from "react-router-dom";
import { Bg } from '../components/Maths/Background';
import CustomeNav from '../components/Maths/CustomeNav';
Bg
function Maths() {
  const navigate = useNavigate();
  return (
    <Bg>
      <HeaderBar>
        {/* <Navbar /> */}
        <CustomeNav />
      </HeaderBar>
      <MainHeading linebreak={true} />
      <SubTitle title="Level 1" />
      <div className="row">
        <MainButton
          title="Chapters"
          onressevent={() => navigate("/mathsChapters")}
        />
        <MainButton
          title="Playground"
          onressevent={() => navigate("/mathsChapters")}
        />
      </div>
    </Bg>
  );
}

const HeaderBar=styled.div`
display:flex;
flex-direction:row
`


export default Maths