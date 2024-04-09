import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: lemonchiffon;
  border: 1px solid black;
  border-radius: 12px;
  padding: 2rem;
  h2 {
    color: darkcyan;
    margin-bottom: 1em;
  }
  h2 + p {
    text-align: right;
    margin-bottom: 1em;
  }
  h3 {
    margin-top: 1em;
  }
  h3:hover {
    background-color: aliceblue;
  }
  p {
    display: block;
    margin-top: 1em;
  }
  h3 + p {
    background-color: aliceblue;
  }
`;

export default function PhotoCard({ title, description, imageHdurl, date }) {
    return (
      <StyledDiv>
        <h2>{title}</h2>
        <p>This photo was taken on {date}</p>
        <div>
          <img src={imageHdurl} />
            <h3>{title} Photo Explanation</h3>
            <p>{description}</p>
        </div>
      </StyledDiv>
    );
  }