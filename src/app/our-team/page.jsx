"use client";
import React, { useEffect, useState } from "react";
import OurTeamPage from "../features/ourTeam";

function OurTeam() {
  const [data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  return (
    <>
      <head>
        <title>Our Team | Ideabox</title>
      </head>
      <OurTeamPage />
    </>
  );
}

export default OurTeam;
