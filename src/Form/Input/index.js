import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import PropTypes from "prop-types";

import {
  Container,
  Label,
  ContainerInput,
  InputText,
  MessageError
} from "./styles";

export default function Input({ name, label, fonts, colors, border, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue = "", error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "_lastNativeText",
      getValue(ref) {
        return ref._lastNativeText || "";
      },
      setValue(ref, value) {
        ref.setNativeProps({ text: value });
        ref._lastNativeText = value;
      },
      clearValue(ref) {
        ref.setNativeProps({ text: "" });
        ref._lastNativeText = "";
      }
    });
  }, [fieldName, registerField]);

  return (
    <Container isError={error}>
      {label && <Label fontFamily={fonts}>{label}</Label>}
      <ContainerInput border={border}>
        <InputText
          ref={inputRef}
          fontFamily={fonts}
          defaultValue={defaultValue}
          {...rest}
        />
      </ContainerInput>
      {error && <MessageError fontFamily={fonts}>{error}</MessageError>}
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  fonts: PropTypes.shape({
    label: PropTypes.string,
    text: PropTypes.string,
    error: PropTypes.string
  }),
  colors: PropTypes.shape({
    label: PropTypes.string,
    text: PropTypes.string,
    error: PropTypes.string
  }),
  border: PropTypes.shape({
    color: PropTypes.string,
    radius: PropTypes.number,
    weight: PropTypes.number
  })
};

Input.defaultProps = {
  border: {
    color: "#000",
    radius: 5,
    weight: 1
  }
};
