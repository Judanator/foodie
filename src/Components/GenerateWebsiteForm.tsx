/* eslint-disable react/jsx-no-bind */
import * as React from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";

import Input from "./Input/Input";

const GenerateWebsiteForm = () => {
  function submitForm() {
    console.log("clikced")
  }

  const initialVal = {
    name: "",
    address: "",
    phone: "",
    type: "",
    logo: "",
    menu: "",
  }

  const FormSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `

  return (
    <Formik
      onSubmit={submitForm}
      initialValues={initialVal}
    >
      {({isSubmitting}) => (
        <Form>
          <FormSection>
            <Input onChange={() => {}} label="restaurant name" />
            <Input onChange={() => {}} label="restaurant address" />
          </FormSection>

          <FormSection>
            <Input onChange={() => {}} label="restaurant phone #" />
            <Input onChange={() => {}} label="type of restaurant" />
          </FormSection>

          <FormSection>
            <Input onChange={() => {}} label="restaurant logo *" />
            <Input onChange={() => {}} label="restaurant menu" />
          </FormSection>

        </Form>
      )}

    </Formik>
  )
}

export default GenerateWebsiteForm;