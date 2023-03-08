import React from 'react'
import { Bg } from '../components/Maths/Background'
import MainButton from '../components/Maths/MainButton';
import MainHeading from '../components/Maths/MainHeading';
import SubTitle from '../components/Maths/SubTitle';
import Navbar from "../components/Navbar";
import "../styles/Math.css";
function MathChapters() {
  return (
    <Bg>
      <Navbar />
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

export default MathChapters