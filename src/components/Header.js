import React from "react";
import styled from 'styled-components';


export default function Header() {

  const Heading = styled.h1`
  text-shadow: 2px 2px gray;
  text-align: center;
  `;

  return (
    <Heading className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </Heading>
  );
}
