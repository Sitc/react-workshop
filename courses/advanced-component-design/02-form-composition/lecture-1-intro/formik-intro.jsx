import { Formik, Form, Field, useField } from 'formik'

const initialValues = {
  email: '',
  password: '',
}

export function App() {
  return (
    <Formik
      onSubmit={(values) => {
        console.log('submit', values)
      }}
      initialValues={initialValues}
      validate={(values) => {
        return values.email !== 'brad@brad.com' ? { email: 'bad' } : {}
      }}
    >
      <Form className="spacing">
        <div>
          <EmailField name="email" />
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

function EmailField({ name }) {
  const [field, meta] = useField(name)
  const id = useId()

  return (
    <div>
      <label for={id}>Email</label>
      <input id={id} {...field} type="email" className="form-field" autoComplete="off" />
      {meta.error && <div>{meta.error}</div>}
    </div>
  )
}
