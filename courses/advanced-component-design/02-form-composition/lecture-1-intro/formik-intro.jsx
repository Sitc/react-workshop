import * as React from 'react'
import { Formik, Form, Field, useField } from 'formik'

export function App() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        console.log(values)
      }}
      validate={(values) => {
        return values.email.search('@') === -1 ? { email: 'Invalid Email' } : {}
      }}
    >
      <Form className="spacing">
        <div>
          <EmailField></EmailField>
        </div>
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

function EmailField() {
  const [field, meta] = useField('email')
  const id = React.useId()

  return (
    <div>
      <label htmlFor={id}>Email</label>
      <div>
        <input id={id} {...field} type="email" className="form-field" autoComplete="off" />
      </div>
      {meta.error && <p>{meta.error}</p>}
    </div>
  )
}
