import React from 'react'

function AbacusCalculator() {
  return (
    <svg
      width={"40%"}
      height={"15rem"}
      style={{
        border: "3px solid black",
        alignSelf: "center",
        borderRadius: "3%",
      }}
    >
      <line
        x1="400"
        y1="10"
        x2="5"
        y2="10"
        stroke="black"
        stroke-width="2"
        key={"TopHead"}
      />
      <line
        x1="400"
        y1="70"
        x2="5"
        y2="70"
        stroke="black"
        stroke-width="2"
        key={"midleline"}
      />
      <line
        x1="400"
        y1="200"
        x2="5"
        y2="200"
        stroke="black"
        stroke-width="2"
        key={"endline"}
      />
      <line
        x1="20"
        y1="10"
        x2="20"
        y2="200"
        stroke="black"
        stroke-width="4"
        key={"bline1"}
      />
      <line
        x1="80"
        y1="10"
        x2="80"
        y2="200"
        stroke="black"
        stroke-width="4"
        key={"bline2"}
      />
      <line
        x1="130"
        y1="10"
        x2="130"
        y2="200"
        stroke="black"
        stroke-width="4"
        key={"bline3"}
      />
      <line
        x1="180"
        y1="10"
        x2="180"
        y2="200"
        stroke="black"
        stroke-width="4"
        key={"bline4"}
      />
      <line
        x1="230"
        y1="10"
        x2="230"
        y2="200"
        stroke="black"
        stroke-width="4"
        key={"bline5"}
      />
      <line
        x1="280"
        y1="10"
        x2="280"
        y2="200"
        stroke="black"
        stroke-width="4"
        key={"bline6"}
      />
      <line
        x1="330"
        y1="10"
        x2="330"
        y2="200"
        stroke="black"
        stroke-width="4"
        key={"bline7"}
      />
      <line
        x1="380"
        y1="10"
        x2="380"
        y2="200"
        stroke="black"
        stroke-width="4"
        key={"bline8"}
      />
      {/* //////////////////////////////////Starting uper deck beats/////////////////// */}
      <rect
        x={10}
        y={10}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck8beat1"
      />
      <rect
        x={10}
        y={31}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck8beat2"
      />
      <rect
        x={70}
        y={10}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck7beat1"
      />
      <rect
        x={70}
        y={31}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck7beat2"
      />
      <rect
        x={120}
        y={10}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck6beat1"
      />
      <rect
        x={120}
        y={31}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck6beat2"
      />
      <rect
        x={170}
        y={10}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck5beat1"
      />
      <rect
        x={170}
        y={31}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck5beat2"
      />
      <rect
        x={170}
        y={10}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck5beat1"
      />
      <rect
        x={170}
        y={31}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck5beat2"
      />
      <rect
        x={220}
        y={10}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck4beat1"
      />
      <rect
        x={220}
        y={31}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck4beat2"
      />
      <rect
        x={270}
        y={10}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck3beat1"
      />
      <rect
        x={270}
        y={31}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck3beat2"
      />
      <rect
        x={320}
        y={10}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck2beat1"
      />
      <rect
        x={320}
        y={31}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck2beat2"
      />
      <rect
        x={370}
        y={10}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck1beat1"
      />
      <rect
        x={370}
        y={31}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="uperdeck1beat2"
      />

      {/* ///////////////////////////////////////////Lowe Deck started here */}

      <rect
        x={370}
        y={180}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck1beat1"
      />
      <rect
        x={370}
        y={159}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck1beat2"
      />
      <rect
        x={370}
        y={135}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck1beat3"
      />
      <rect
        x={370}
        y={112}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck1beat4"
      />
      <rect
        x={370}
        y={90}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck1beat5"
      />
      {/* ////////line 2 started///////////////////// */}
      <rect
        x={320}
        y={180}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck2beat1"
      />
      <rect
        x={320}
        y={159}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck2beat2"
      />
      <rect
        x={320}
        y={135}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck2beat3"
      />
      <rect
        x={320}
        y={112}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck2beat4"
      />
      <rect
        x={320}
        y={90}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck2beat5"
      />
      {/* ////////line 3 started///////////////////// */}
      <rect
        x={270}
        y={180}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck3beat1"
      />
      <rect
        x={270}
        y={159}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck3beat2"
      />
      <rect
        x={270}
        y={135}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck3beat3"
      />
      <rect
        x={270}
        y={112}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck3beat4"
      />
      <rect
        x={270}
        y={90}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck3beat5"
      />
      {/* ////////line 4started///////////////////// */}
      <rect
        x={220}
        y={180}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck4beat1"
      />
      <rect
        x={220}
        y={159}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck4beat2"
      />
      <rect
        x={220}
        y={135}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck4beat3"
      />
      <rect
        x={220}
        y={112}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck4beat4"
      />
      <rect
        x={220}
        y={90}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck4beat5"
      />
      {/* ////////line 5started///////////////////// */}
      <rect
        x={170}
        y={180}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck5beat1"
      />
      <rect
        x={170}
        y={159}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck5beat2"
      />
      <rect
        x={170}
        y={135}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck5beat3"
      />
      <rect
        x={170}
        y={112}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck5beat4"
      />
      <rect
        x={170}
        y={90}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck5beat5"
      />
      {/* ////////line 6   started///////////////////// */}
      <rect
        x={120}
        y={180}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdec6beat1"
      />
      <rect
        x={120}
        y={159}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck6beat2"
      />
      <rect
        x={120}
        y={135}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck6beat3"
      />
      <rect
        x={120}
        y={112}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck6beat4"
      />
      <rect
        x={120}
        y={90}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck6beat5"
      />
      {/* ////////line 7   started///////////////////// */}
      <rect
        x={70}
        y={180}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdec7beat1"
      />
      <rect
        x={70}
        y={159}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck6beat2"
      />
      <rect
        x={70}
        y={135}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck7beat3"
      />
      <rect
        x={70}
        y={112}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck7beat4"
      />
      <rect
        x={70}
        y={90}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck7beat5"
      />
      {/* ////////line 7   started///////////////////// */}
      <rect
        x={10}
        y={180}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdec8beat1"
      />
      <rect
        x={10}
        y={159}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck8beat2"
      />
      <rect
        x={10}
        y={135}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck8beat3"
      />
      <rect
        x={10}
        y={112}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck8beat4"
      />
      <rect
        x={10}
        y={90}
        width="20"
        fill="#85B2FF"
        height="20"
        style={{ borderRadius: "3%" }}
        key="lowerdeck8beat5"
      />

      {/* values text */}
      <text x="15" y="210" font-size="12" key={"t8"}>
        0
      </text>
      <text x="75" y="210" font-size="12" key={"t7"}>
        0
      </text>
      <text x="125" y="210" font-size="12" key={"t6"}>
        0
      </text>
      <text x="175" y="210" font-size="12" key={"t5"}>
        0
      </text>
      <text x="225" y="210" font-size="12" key={"t4"}>
        0
      </text>
      <text x="275" y="210" font-size="12" key={"t3"}>
        0
      </text>
      <text x="325" y="210" font-size="12" key={"t2"}>
        0
      </text>
      <text x="375" y="210" font-size="12" key={"t1"}>
        0
      </text>
    </svg>
  );
}

export default AbacusCalculator