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
      validate={(values) => {
        return values.email !== 'brad@reacttraining.com' ? { email: 'Invalid' } : {}
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
  const [field, meta, helpers] = useField('email')
  return (
    <div>
      <input {...field} type="email" className="form-field" autoComplete="off" />
      {meta.error && <div>{meta.error}</div>}
    </div>
  )
}
