import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Field, Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import AuthContainer from "components/AuthContainer";
import TextInput from "components/form/TextInput";
import { loginStudentSchema } from "utils/validationSchemas";
import { loginStudent } from "actions/auth.actions";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async values => {
    setLoading(true);
    await loginStudent(values).then(() => {
      return <Redirect to="/home" />;
    });
    setLoading(false);
  };

  return (
    <AuthContainer>
      <div className="d-flex align-items-baseline" style={{ marginTop: 30 }}>
        <h4 style={{ marginRight: 10 }}>Login</h4>
        <Link to="/register">
          <a className="text-muted">Sign Up</a>
        </Link>
      </div>
      <Formik
        validationSchema={loginStudentSchema}
        onSubmit={handleSubmit}
        initialValues={{ password: "", email: "" }}
      >
        {() => (
          <Form>
            <Field
              label="email"
              name="email"
              type="email"
              placeholder="Email"
              component={TextInput}
            />
            <Field
              label="password"
              name="password"
              type="password"
              placeholder="Password"
              component={TextInput}
            />
            <Button type="submit">{loading ? "Loading…" : "Login"}</Button>
          </Form>
        )}
      </Formik>
    </AuthContainer>
  );
}
