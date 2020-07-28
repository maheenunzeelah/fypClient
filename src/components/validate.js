const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.role) {
    errors.role = 'Required'
  }
  if (!values.department) {
    errors.department = 'Required'
  }
  if (!values.batch) {
    errors.batch = 'Required'
  }
  if (!values.rollNo) {
    errors.rollNo = 'Required'
  }
  return errors
}

export default validate

