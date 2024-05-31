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
  phone: "",
  quantity: "",
  movementType: "",
  deliveryDate: "",
  caseMaterial: "",
  orderDetails: "",
  invalidName: false,
  invalidEmail: false,
  invalidPhone: false,
  invalidQuantity: false,
  invalidMovementType: false,
  invalidDeliveryDate: false,
  invalidCaseMaterial: false,
  invalidOrderDetails: false,
  submitted: false,
  success: false,
};

export default function Form() {
  const [state, setState] = useState(initialState);

  const {
    name,
    email,
    phone,
    quantity,
    movementType,
    deliveryDate,
    caseMaterial,
    orderDetails,
    invalidName,
    invalidEmail,
    invalidPhone,
    invalidQuantity,
    invalidCaseMaterial,
    invalidDeliveryDate,
    invalidMovementType,
    invalidOrderDetails,
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

    const fields = {
      name,
      email,
      phone,
      quantity,
      movementType,
      deliveryDate,
      caseMaterial,
      orderDetails,
    };

    const success = await POST_CONTACT_FORM(fields);
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
    const {
      invalidName,
      invalidEmail,
      invalidPhone,
      invalidQuantity,
      invalidMovementType,
      invalidDeliveryDate,
      invalidCaseMaterial,
      invalidOrderDetails,
    } = state;

    return !(
      invalidName ||
      invalidEmail ||
      invalidPhone ||
      invalidQuantity ||
      invalidMovementType ||
      invalidDeliveryDate ||
      invalidCaseMaterial ||
      invalidOrderDetails
    );
  }

  function handleSubmit() {
    setState({
      ...state,
      invalidName: name === "",
      invalidEmail: email === "",
      invalidPhone: phone === "",
      invalidQuantity: quantity === "",
      invalidMovementType: movementType === "",
      invalidDeliveryDate: deliveryDate === "",
      invalidCaseMaterial: caseMaterial === "",
      invalidOrderDetails: orderDetails === "",
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
      <SeperatorText>Tell us about your order:</SeperatorText>
      <FormInput
        label="Movement Type"
        name="movementType"
        onChange={handleUpdate}
        invalid={invalidMovementType}
      ></FormInput>
      <FormInput
        label="Quantity"
        name="quantity"
        onChange={handleUpdate}
        invalid={invalidQuantity}
      ></FormInput>
      <FormInput
        label="Case Material"
        name="caseMaterial"
        onChange={handleUpdate}
        invalid={invalidCaseMaterial}
      ></FormInput>
      <FormInput
        label="Delivery Date"
        name="deliveryDate"
        onChange={handleUpdate}
        invalid={invalidDeliveryDate}
      ></FormInput>
      <TextArea
        label="Order Details"
        name="orderDetails"
        onChange={handleUpdate}
        invalid={invalidOrderDetails}
      ></TextArea>

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

const SeperatorText = styled.p`
  margin-top: 0px;
  font-family: ${(props) => props.theme.font};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
