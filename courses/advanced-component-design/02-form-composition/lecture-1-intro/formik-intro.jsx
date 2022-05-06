import { useId } from 'react'
import { Formik, Form, Field, useField } from 'formik'

export function App() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        console.log('submit', values)
      }}
      validate={(values) => {
        return values.email.search('@') > 0 ? {} : { email: 'invalid' }
      }}
    >
      <Form className="spacing">
        <FieldEmail name="email" label="Email" />

        <button type="submit" className="button">
          Submit
        </button>
      </Form>
    </Formik>
  )
}

function FieldEmail({ name, label }) {
  const [field, meta] = useField(name)
  const id = useId() // :r0:

  return (
    <div>
      <label id={id}>{label}</label>
      <input id={id} {...field} type="email" className="form-field" autoComplete="off" />
      {meta.error && <div>{meta.error}</div>}
    </div>
  )
}
