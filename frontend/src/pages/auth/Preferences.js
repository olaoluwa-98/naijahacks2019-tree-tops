import React, { useState } from "react";
import { Field, Formik, Form } from "formik";
import { Card, Button, Col, Form as BSForm } from "react-bootstrap";
import TextInput from "components/form/TextInput";
import { setPreferencesSchema } from "utils/validationSchemas";
import { updateStudentProfile } from "actions/profile.actions";

export default function Preferences() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async values => {
    setLoading(true);
    await updateStudentProfile(values).then(() => {
      window.location.replace("/home");
    });
    setLoading(false);
  };

  return (
    <div className="preferences-page d-flex align-items-center justify-content-end">
      <Card style={{ width: 500 }}>
        <Card.Body>
          <h1>One more thing ...</h1>
          <p>
            We need some details and also your preferences so we can help you
            find the best way to acheive your goal.
          </p>
          <Formik
            validationSchema={setPreferencesSchema}
            onSubmit={handleSubmit}
            initialValues={{
              current_level: null,
              target_gpa: null,
              current_gpa: null
            }}
          >
            {() => (
              <Form>
                <Field
                  label="current_level"
                  name="current_level"
                  placeholder="Current Level"
                  type="number"
                  component={TextInput}
                />
                <BSForm.Row>
                  <Col>
                    <Field
                      label="target_gpa"
                      name="target_gpa"
                      placeholder="Target gpa"
                      type="number"
                      component={TextInput}
                    />
                  </Col>
                  <Col>
                    <Field
                      label="current_gpa"
                      name="current_gpa"
                      placeholder="Current gpa"
                      type="number"
                      component={TextInput}
                    />
                  </Col>
                </BSForm.Row>
                <Button type="submit">
                  {loading ? "Loading…" : "Finish"}{" "}
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </div>
  );
}
