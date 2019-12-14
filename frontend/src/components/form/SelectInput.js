import { getIn } from "formik";
import React from "react";
import { Form } from "react-bootstrap";

const SelectInput = ({ field, form, options = [], ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <Form.Group>
      <Form.Label>{field.label}</Form.Label>
      <Form.Control {...field} {...props} as="select">
        {options.map(item => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Form.Control>
      <p className="text-danger">{errorText}</p>
    </Form.Group>
  );
};

export default SelectInput;
