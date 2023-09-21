import { Component } from "react";
import { styled } from "styled-components";

const Title = styled.h1`
  color: red;
  font-size: 80px;
`;

const Button = styled.button`
  background: #BF4F74;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

export class Form extends Component {
  render() {
    return (
      <div>
        <Title>Commentaire</Title>
        <Button>Valider</Button>
      </div>
    );
  }
}
