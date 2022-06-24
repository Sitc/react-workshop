import { Formik, Form, Field, useField } from 'formik'

export function App() {
  return (
    <Formik onSubmit={(values) => {}} initialValues={{ name: '', password: '' }}>
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

function EmailField() {
  const [field, meta, helpers] = useField('email')
  console.log(field)

  return (
    <div>
      <label></label>
      <input name="email" type="email" className="form-field" autoComplete="off" />
      <div></div>
    </div>
  )
}
