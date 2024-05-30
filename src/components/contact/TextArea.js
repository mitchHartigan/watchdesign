import React from "react";
import styled from "styled-components";

export const TextArea = (props) => {
  const { label, onChange, invalid, name, interest } = props;

  let message = "";

  if (interest) {
    message = `Hey! I'm interested in ${interest}.`;
  }

  return (
    <Container>
      <Area
        name={name}
        onChange={onChange}
        invalid={invalid}
        defaultValue={message}
        placeholder={label}
      />
      <ErrorMessage invalid={invalid}>Please complete this field.</ErrorMessage>
    </Container>
  );
};

const Area = styled.textarea`
  height: 215px;
  padding: 10px 5px 5px 15px;
  background-color: white;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  border: 2px solid ${(props) => (props.invalid ? "red" : "gray")};
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border-radius: 2px;
  resize: none;
  &:focus {
    border: 3px solid ${(props) => props.theme.color};
  }
  ::placeholder {
    color: #202020;
    font-size: ${(props) => props.theme.text.xs};
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.text.xs};
  margin-top: 10px;
  visibility: ${(props) => (props.invalid ? "visible" : "hidden")};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0px 0px 0px;

  @media (max-width: 700px) {
    padding: 1vh 0px 1vh 0px;
    margin-bottom: 0px;
  }
`;
