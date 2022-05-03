import { useId } from 'react'
import { Formik, Form, Field, useField } from 'formik'

const initialValues = {
  email: '',
  password: '',
}

export function App() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <Form className="spacing">
        <EmailField></EmailField>
        <div>
          <Field name="password" type="password" className="form-field" />
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </Form>
    </Formik>
  )
}

function EmailField({ name, label }) {
  const id = useId()
  return (
    <div>
      <label for={id}>{label}</label>
      <Field id={id} name={name} type="email" className="form-field" autoComplete="off" />
    </div>
  )
}
