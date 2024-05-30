import React, { useState } from "react";
import styled from "styled-components";

export const SearchBarLink = (props) => {
  const [inputText, setInputText] = useState("");

  function handleChange({ target }) {
    setInputText(target.value);
  }

  function handleSubmit({ keyCode }) {
    const locationStr = `https://www.promoplace.com/hostworkspromo/:quicksearch.htm?quicksearchbox=${inputText}&LoP=&HiP=`;
    if (keyCode === 13) window.location.href = locationStr;
  }

  return (
    <Input
      onChange={handleChange}
      placeholder={"Search by product..."}
      onKeyUp={handleSubmit}
    />
  );
};

const Input = styled.input`
  grid-column: 2 / 3;
  align-self: center;
  background-color: white;
  border-radius: 10px;
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.text.xs};
  height: 31px;
  padding-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  width: 400px;

  @media (max-width: 1700px) {
    width: 100%;
  }
`;
