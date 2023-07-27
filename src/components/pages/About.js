import React from 'react';

export default function About() {
  return (
    <div
    className="AboutMeMain"
    
    >
      <h1>About Me</h1>
      <p>
                        Hi, my name is Dan McKay. I am a native of Washington DC who has lived in
                        the Bay Area for over 10 years now, and have extensive experience in the non-profit
                        sector helping run the Meals on Wheels program at <u><a href="https://vivalon.org"
                        target="_blank">Vivalon</a></u> in Marin County. Currently I am in the middle
                        of a giant course change in my life in the form of a full-stack web development.
                    </p>
                    <img src={require("../../images/Dan-Selfie1b.png")} alt="Dan McKay Profile Picture" width="240px" height="315px" 
      style={{
        position: 'relative',
        left: "2rem",
        borderRadius: "0.75rem",
        border: "1px solid #48504e88",
        boxShadow: "3px 3px 3px #5f6564aa",
        marginBottom: "1rem",
      }} 
      />
      <h2><a href="https://github.com/DanielFMcKay" target="_blank"
      style={{
        textDecoration: "none",
        color: "#35619c",
        textShadow: "2px 2px 2px #949c9acc",
      }}
      >Dan McKay's GitHub Repo</a></h2>
            
    </div>
  );
}
