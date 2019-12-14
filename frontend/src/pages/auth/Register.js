import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Field, Formik, Form } from "formik";
import { Button } from "react-bootstrap";
import TextInput from "components/form/TextInput";
import SelectInput from "components/form/SelectInput";
import AuthContainer from "../../components/AuthContainer";
import { registerStudentSchema } from "utils/validationSchemas";
import { registerStudent } from "actions/auth.actions";
import { getUniversities } from "actions/university.actions";

function Register() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async values => {
    setLoading(true);
    await registerStudent(values).then(() => {
      return <Redirect to="/preferences" />;
    });
    setLoading(false);
  };

  useEffect(() => {
    const fetchUniversites = async () => {
      const data = await getUniversities();
      setUniversities(data);
    };
    fetchUniversites();
  }, []);

  return (
    <AuthContainer>
      <div className="d-flex align-items-baseline" style={{ marginTop: 30 }}>
        <Link to="/login">
          <a className="text-muted" style={{ marginRight: 10 }}>
            Login
          </a>
        </Link>
        <h4>Sign Up</h4>
      </div>
      <Formik
        validationSchema={registerStudentSchema}
        onSubmit={handleSubmit}
        initialValues={{
          password: "",
          email: "",
          firstname: "",
          lastname: "",
          university_id: null
        }}
      >
        {() => (
          <Form>
            <Field
              label="firstname"
              name="firstname"
              placeholder="Firstname"
              component={TextInput}
            />
            <Field
              label="lastname"
              name="lastname"
              placeholder="Lastname"
              component={TextInput}
            />
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
            <Field
              label="university_id"
              name="university_id"
              type="number"
              component={SelectInput}
              options={[
                { label: "Select University" },
                ...universities.map(university => ({
                  label: university.name,
                  value: university.id
                }))
              ]}
            />

            <Button type="submit">{loading ? "Loading…" : "Sign up"} </Button>
          </Form>
        )}
      </Formik>
    </AuthContainer>
  );
}

export default Register;
