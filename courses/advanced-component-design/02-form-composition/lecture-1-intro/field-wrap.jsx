import { useId } from 'react'
import { BsCalendar3 } from 'react-icons/bs'
import { Formik, Form, Field, useField } from 'formik'

const initialValues = { email: '', password: '' }

export function App() {
  function handleSubmit(values) {
    console.log(values)
  }

  function handleValidation(values) {
    // Not a very good way to verify emails
    return values.email.search('@') < 0 ? { email: 'Invalid Email' } : null
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={handleValidation}>
      <Form className="spacing">
        <FieldInput name="email" label="Email" autoComplete="off" />
        <FieldInput name="password" label="Password" autoComplete="off" />

        <button type="submit" className="button">
          Submit
        </button>
      </Form>
    </Formik>
  )
}

/**
 * Fields
 */

function FieldWrap({ render, name, label, type = 'text', ...props }) {
  const [field, meta] = useField(name)
  const id = useId()
  return (
    <div className="field-wrap spacing-small">
      <label htmlFor={id}>Email</label>
      {render(field, id)}
      {meta.error && <p>{meta.error}</p>}
    </div>
  )
}

function FieldInput({ name, label, type = 'text', ...props }) {
  return (
    <FieldWrap
      name={name}
      label={label}
      render={(field, id) => {
        return <input {...field} {...props} id={id} type={type} className="form-field" />
      }}
    />
  )
}

// function FieldPassword() {
//   const [field, meta] = useField('password')
//   const id = 'password'
//   return (
//     <div className="field-wrap spacing-small">
//       <label htmlFor={id}>Password</label>
//       <input {...field} name="password" type="password" className="form-field" />
//       {meta.error && <p>{meta.error}</p>}
//     </div>
//   )
// }
