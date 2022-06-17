import { useId } from 'react'
import { Formik, Form, Field, useField } from 'formik'

export function App() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        console.log(values)
      }}
      validate={(values) => {
        return { email: 'Email is invalid' }
      }}
    >
      <Form className="spacing">
        <EmailField />

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
  const id = useId()
  return (
    <div>
      <label htmlFor={id}>Email</label>
      <input id={id} {...field} type="email" className="form-field" autoComplete="off" />
      {meta.error && <p>{meta.error}</p>}
    </div>
  )
}
