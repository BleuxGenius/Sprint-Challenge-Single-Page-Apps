import React from "react";
import styled from 'styled-components';

export default function CharacterCard(props) {

  const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 5px gray;
  `;

  const Header = styled.h1`
  text-shadaow: 3px 3px gray;
  `;


  return (
  <Card>
    <Header>{props.name}</Header>
    <p>Species: {props.species}</p>
<p>Status: {props.status}</p>
  </Card>
  )
}
