import { getIn } from "formik";
import React from "react";
import { Form } from "react-bootstrap";

const TextInput = ({ field, form, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <Form.Group>
      <Form.Label>{field.label}</Form.Label>
      <Form.Control {...field} {...props} />
      <Form.Text className="text-muted text-danger">{errorText}</Form.Text>
    </Form.Group>
  );
};

export default TextInput;
