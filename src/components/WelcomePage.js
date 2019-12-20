import React from "react";
import {Link} from 'react-router-dom';
import styles from 'styled-components';

const Buttons = styles.button`
margin-left: 2%;
margin-top: 5%;
position: relative;
border-radius: 10px;
color: black;
background-color: white;
box-shawdow: 5px, 5px, 5px, Black;
`;

const Page = styles.section`
background-color: opaque;
border-radius: 10px;
display: flex;
justify-content: center;
box-shawdow: 5px, 5px, 5px, red;
`;

const Img = styles.img`
box-shawdow: 15px, 15px, 7px, Black;
border-radius: 10px;
margin-bottom: 25px;
margin-top: 5%;
`;

export default function WelcomePage() {
  return (
    <Page className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>

        <Link to="/Search"><Buttons>Search Characters!</Buttons></Link>

        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </Page>
  );
}
