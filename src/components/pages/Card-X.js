import React from 'react';

export default function CardX() {
  return (
    <div className='Card-X-container'>
      <h1
      style={{
        fontFamily: "Lucida Handwriting, Arial, Roboto, sans-serif",
        paddingTop: '1.25rem',
        marginLeft: '0.5rem',
        textShadow: '2px 2px 2px #5f6564',
      }}
      >Card-X</h1>
      <p>
Card-X is a card-messaging app I helped make for my Full Stack Coding Bootcamp's Group Project 3. It creates a template for a card, and then allows you to send it to a friend. I was in charge of styling certain pages and components, including the landing page the grid display once you have logged in, the login page, the sign-up page, the Navbar, the icon logo, and the basic template for cards. Not all pages are mine. I also helped with useState hooks and queries, including keeping them from triggering prematurely.
      </p>
      <a href='https://tranquil-reef-31022-45823b0e137b.herokuapp.com/' target='_blank'>
      <img src={require("../../images/Card-X-snapshot-1.png")} alt="Card-X landing page" width="450px" height="235px" 
      style={{
        position: 'absolute',
        right: '5%',
        top: '13%',
        borderRadius: "0.5rem",
        border: "2px solid #48504eb8",
      }} 
      /></a>
      <div className='Card-X-links'>
        <a href='https://tranquil-reef-31022-45823b0e137b.herokuapp.com/' target='_blank' rel='noreferrer'
        style={{
          color: '#485a93',
          textDecoration: 'none',
          fontWeight: '600',
        }}
        
        >Card-X Live Site</a><br></br>
        <a href='https://github.com/escotoj/Card-X' target='_blank' rel='noreferrer'
                style={{
                  color: '#485a93',
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
        >Card-X GitHub Repo</a>
        </div>
        <div>
        <h3
        style={{
          marginLeft: '1rem',
          marginTop: '1rem',
          marginBottom: '-0.25rem',
          fontFamily: "Century, Arial, Helvetica, sans-serif",
          textShadow: '1px 1px 1px #5f6564',
        }}
        >Weather Dashboard</h3>

      <p
        style={{
          width: '40%',
        }}
      
      >As long as you're here though, please checkout my rad Weather Dashboard. I went extremely over the top on this one-page assignment, with extensive additional functionality added across nearly 200 commits. If you're wondering why, I really just wanted to make something I could show my parents.</p>
      
      <p>The repo can be found&nbsp;<u><a href="https://github.com/DanielFMcKay/Weather-Dashboard"
                        target="_blank">here</a></u>. The live site can be found&nbsp;<u><a href="https://danielfmckay.github.io/Weather-Dashboard/"
                        target="_blank">here</a></u>.</p>
      <a href='https://danielfmckay.github.io/Weather-Dashboard/' target='_blank' rel='noreferrer'>
      <img src={require("../../images/Weather-Dashboard-snapshot-1.png")} alt="Weather Dashboard landing page" width="510" height="252px"
        style={{
          position: 'relative',
          left: '121vh',
          bottom: '30vh',
          marginBottom: '1rem',
          marginLeft: '1rem',
          borderRadius: '0.5rem',
          border: '1px solid #48504eb8',
        }}
      
      /></a>
      
      </div>
  </div>

  );
}
