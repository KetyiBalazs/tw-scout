import { useState } from "react";
import { Button } from "./Button";
import { InputField } from "./InputField";

const emptyForm = {
  name: "",
  organisation: "",
  show: "",
  visitors: "",
  email: "",
};

export function DemoForm() {
  const [values, setValues] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  function update(key: keyof typeof emptyForm, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setSubmitted(false);
  }

  return (
    <form
      className="demo-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="demo-form-row">
        <InputField
          label="Name"
          name="name"
          placeholder="Your name"
          value={values.name}
          onChange={(value) => update("name", value)}
        />
        <InputField
          label="Organisation"
          name="organisation"
          placeholder="Organisation name"
          value={values.organisation}
          onChange={(value) => update("organisation", value)}
        />
      </div>
      <div className="demo-form-row">
        <InputField
          label="Show name"
          name="show"
          placeholder="Your event"
          value={values.show}
          onChange={(value) => update("show", value)}
        />
        <InputField
          label="Expected visitors"
          name="visitors"
          placeholder="Select range"
          value={values.visitors}
          onChange={(value) => update("visitors", value)}
        />
      </div>
      <InputField
        label="Work email"
        name="email"
        type="email"
        placeholder="name@organisation.com"
        value={values.email}
        onChange={(value) => update("email", value)}
      />
      <Button appearance="primary" size="sm" type="submit">
        Book a demo
      </Button>
      {submitted ? <p className="demo-form-note">Thanks. We will be in touch about your show.</p> : null}
    </form>
  );
}
