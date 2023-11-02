/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ErrorMessage, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import CloseIcon from '../../../asset/svgs/CloseIcon';

const formSchema = Yup.object({
  email: Yup.string()
    .max(50, 'Must be 50 characters or less')
    .email('Invalid email address')
    .required('Please enter your email'),
  user: Yup.string().max(20, 'Must be 20 characters or less').required('Please enter a username.'),
  password: Yup.string().min(8, 'Must be atleast 8 characters long.').required('Please enter a password'),
  confirmpass: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match.')
    .required('Please re-type your password.'),
});

const initialValues = {
  email: '',
  user: '',
  password: '',
  confirmpass: '',
};

const RegisterModal = () => {
  const [wrong, setWrong] = useState(false);

  const toggleModal = () => {
    const registerModal = document.getElementById('registerModal');
    registerModal.click();
  };

  const openLoginModal = () => {
    toggleModal();

    const loginModalBtn = document.getElementById('loginModalBtn');
    loginModalBtn.click();
  };

  const handleFormSubmit = async (values, setSubmitting, resetForm) => {
    setSubmitting(true);
    const res = await fetch('/api/reghandler', {
      method: 'POST',
      body: JSON.stringify({
        username: values.user,
        email: values.email,
        password: values.password,
      }),
    }).then((resp) => resp.json());
    if (!res.success) {
      setWrong(true);
      document.querySelector('#registererrormsg').innerText = res.message;
      console.log(res.message);
    } else {
      setWrong(false);
      console.log('Successfully registered.');
      resetForm({ values: '' });
      toggleModal();
    }
    setSubmitting(false);
  };

  return (
    <div
      className="modal fade modalWrapper"
      id="registerModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="registerModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modalContainer registerContainer" role="document">
        <div className="modal-content modalContent">
          <div className="heading">
            <button type="button" id="registerformclosebtn" className="close" data-bs-dismiss="modal" onClick={toggleModal} aria-label="Close">
              <CloseIcon />
            </button>
          </div>

          <div className="modal-body">
            <h5>Register</h5>

            <div className="inputs">
              <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={
                  /* eslint-disable-next-line max-len */
                  async (values, { setSubmitting, resetForm }) => handleFormSubmit(values, setSubmitting, resetForm)
                }
              >
                {({ values, handleChange, isSubmitting }) => (
                  <Form autoComplete="off">
                    <div className="input-style d-flex align-items-center">
                      <input
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        type="text"
                        placeholder="Email"
                        className="input-inner"
                      />
                    </div>

                    <ErrorMessage name="email">
                      {(msg) => <div style={{ color: 'tomato', marginLeft: '1rem' }}>{msg}</div>}
                    </ErrorMessage>

                    <div className="input-style d-flex align-items-center">
                      <input
                        name="user"
                        onChange={handleChange}
                        value={values.user}
                        type="text"
                        placeholder="Username"
                        className="input-inner"
                      />
                    </div>

                    <ErrorMessage name="user">
                      {(msg) => <div style={{ color: 'tomato', marginLeft: '1rem' }}>{msg}</div>}
                    </ErrorMessage>

                    <div className="input-style d-flex align-items-center">
                      <input
                        name="password"
                        type="password"
                        onChange={handleChange}
                        value={values.password}
                        placeholder="Password"
                        className="input-inner"
                      />
                    </div>

                    <ErrorMessage name="password">
                      {(msg) => <div style={{ color: 'tomato', marginLeft: '1rem' }}>{msg}</div>}
                    </ErrorMessage>

                    <div className="input-style d-flex align-items-center">
                      <input
                        name="confirmpass"
                        type="password"
                        onChange={handleChange}
                        value={values.confirmpass}
                        placeholder="Re-enter Password"
                        className="input-inner"
                      />
                    </div>

                    <ErrorMessage name="confirmpass">
                      {(msg) => <div style={{ color: 'tomato', marginLeft: '1rem' }}>{msg}</div>}
                    </ErrorMessage>

                    <div
                      id="registererrormsg"
                      style={{
                        color: 'tomato',
                        textAlign: 'center',
                        display: `${wrong ? 'block' : 'none'}`,
                      }}
                    />

                    <button type="submit" disabled={isSubmitting} className="btn theme-btn">
                      {isSubmitting ? 'Please wait...' : 'Register'}
                    </button>

                    <button type="button" onClick={openLoginModal} className="color-purple regBtn btn">Already have an account?</button>

                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
