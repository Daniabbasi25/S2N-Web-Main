import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Bg } from "../components/Maths/Background";
import CustomeNav from "../components/Maths/CustomeNav";
import MainButton from "../components/Maths/MainButton";
import MainHeading from "../components/Maths/MainHeading";
import SubTitle from "../components/Maths/SubTitle";
import Navbar from "../components/Navbar";
import "../styles/Math.css";
function AllExercises() {
  const navigate = useNavigate();
  const [data, setData]=useState([]);
  const fetchData=async()=>{
    try {
        
        const response = await fetch("http://localhost:5000/api/exersises");
           const data = await response.json();
           console.log(data)
           setData(data)

    } catch (error) {
        console.log(error.message)
    }
  }
  useEffect(()=>{
fetchData()
  },[])
  return (
    <Bg>
      <HeaderBar>
        {/* <Navbar /> */}
        <CustomeNav />
      </HeaderBar>
      <MainHeading />
      <SubTitle title="Eercises" />
      <div className="row">
        {data.map((item) => (
          <MainButton
            title={item.name}
            onressevent={() => navigate("/Generality")}
          />
        ))}
      </div>
    </Bg>
  );
}
const HeaderBar = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 3rem;
`;

export default AllExercises;
