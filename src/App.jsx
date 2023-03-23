import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Quran from "./pages/Quran";
import ReadSurah from "./pages/ReadSurah";
// import ReadPara from "./pages/ReadPara";
import Login from "./pages/Login";
import Register from "./pages/Register"
import { useState } from "react";
import { useEffect } from "react";
import Maths from "./pages/Maths";
import MathChapters from "./pages/MathChapters";
import MatchChapterGenerality from "./pages/MatchChapterGenerality";
import MCQexersise from "./pages/MCQexersise";
import MathsQuestion from "./pages/MathsQuestion";
import LongQuestion from "./pages/LongQuestion";

function App() {
	const [login, setLogin] = useState(localStorage.getItem('login'))

	useEffect(() => {
		console.log(login)
	}, [login])

	return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/surah" element={<ReadSurah name="Surah" />} />
        <Route path="/juz" element={<ReadSurah name="Juz" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/mathsChapters" element={<MathChapters />} />
        <Route path="/Generality" element={<MatchChapterGenerality />} />
        <Route path="/MCQS" element={<MCQexersise />} />
        <Route path="/MathsQuestion" element={<MathsQuestion />} />
        <Route path="/LongQuestion" element={<LongQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;
