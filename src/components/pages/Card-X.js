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
Card-X is a card-messaging app I helped make for my Full Stack Coding Bootcamp's Group Project 3. It creates a template for a card, and then allows you to send it to a friend. I was in charge of styling certain pages and components, including the landing page the grid display once you have logged in, the login page, the sign-up page, the Navbar, and the basic template for cards. I also helped with useState hooks and queries, including keeping them from triggering prematurely.
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

  </div>

  );
}
