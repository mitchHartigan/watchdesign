import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { POST_CONTACT_FORM } from "./API";

import { FormInput } from "./FormInput";
import { SubmitButton } from "./SubmitButton";
import { Success } from "./Success";
import { TextArea } from "./TextArea";

const initialState = {
  name: "",
  email: "",
  message: "",
  phone: "",
  invalidName: false,
  invalidEmail: false,
  invalidMessage: false,
  invalidPhone: false,
  submitted: false,
  success: false,
};

export default function Form(props) {
  const { interest } = props;
  const [state, setState] = useState(initialState);

  const {
    name,
    email,
    message,
    phone,
    invalidName,
    invalidEmail,
    invalidMessage,
    invalidPhone,
    submitted,
    valid,
    success,
  } = state;

  async function formEffect() {
    if (!submitted) return;

    const validForm = checkValidForm(state);
    setState({ ...state, valid: validForm });

    if (!validForm) {
      setState({ ...state, submitted: false });
      return;
    }

    const success = await POST_CONTACT_FORM(name, email, phone, message);
    if (success) setState({ ...state, submitted: false, success });
  }

  useEffect(() => {
    formEffect();
  }, [submitted]);

  function handleUpdate(evt) {
    const { name, value } = evt.target;
    setState({ ...state, [name]: value });
  }

  function checkValidForm(state) {
    const { invalidName, invalidEmail, invalidMessage, invalidPhone } = state;
    return !(invalidName || invalidEmail || invalidPhone || invalidMessage);
  }

  function handleSubmit() {
    setState({
      ...state,
      invalidName: name === "",
      invalidEmail: email === "",
      invalidPhone: phone === "",
      invalidMessage: message === "" || message === undefined,
      submitted: true,
    });
  }

  if (success) {
    return (
      <Container>
        <Success text="Thanks for getting in touch!" />
      </Container>
    );
  }

  return (
    <Container>
      <FormInput
        label="Name"
        name="name"
        onChange={handleUpdate}
        invalid={invalidName}
      />
      <FormInput
        label="Email"
        name="email"
        onChange={handleUpdate}
        invalid={invalidEmail}
      />
      <FormInput
        label="Phone Number"
        name="phone"
        onChange={handleUpdate}
        invalid={invalidPhone}
      />
      <TextArea
        label="Message"
        name="message"
        onChange={handleUpdate}
        invalid={invalidMessage}
        interest={interest}
      />

      <ButtonContainer>
        <SubmitButton onClick={handleSubmit} submitted={submitted && valid}>
          Send
        </SubmitButton>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 43vw;
  min-width: 600px;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 3.5vh 3vw 3.5vh 3vw;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px lightgray;

  @media (max-width: 700px) {
    width: 85vw;
    min-width: 10vw;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
