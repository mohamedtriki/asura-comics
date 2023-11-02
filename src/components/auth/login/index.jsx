/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRouter } from 'next/router';
import { ErrorMessage, Form, Formik } from 'formik';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import * as Yup from 'yup';
import CloseIcon from '../../../asset/svgs/CloseIcon';

const formSchema = Yup.object({
  user: Yup.string()
    .max(50, 'Must be 50 characters or less')
    .email('Invalid email address')
    .required('Please enter your email'),
  password: Yup.string().required('Please enter your password'),
});

const initialValues = { user: '', password: '' };

const LoginModal = () => {
  const router = useRouter();
  const [wrong, setWrong] = useState(false);

  const toggleModal = () => {
    const loginModal = document.getElementById('loginModal');
    loginModal.click();
  };

  const openRegisterModal = () => {
    toggleModal();

    const registerModalBtn = document.getElementById('registerModalBtn');
    registerModalBtn.click();
  };

  const handleFormSubmit = async (values, setSubmitting, resetForm) => {
    const res = await signIn('credentials', {
      redirect: false,
      email: values.user,
      password: values.password,
      callbackUrl: window.location.origin,
    });
    if (res?.error) {
      setWrong(true);
    } else {
      setWrong(false);
      document.getElementById('loginformclosebtn').click();
      resetForm({ values: '' });
    }
    if (res.url) {
      router.push(res.url);
    }
    setSubmitting(false);
  };

  return (
    <div
      className="modal fade modalWrapper"
      id="loginModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="loginModalTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modalContainer" role="document">
        <div className="modal-content modalContent">
          <div className="heading">
            <button type="button" id="loginformclosebtn" className="close" data-bs-dismiss="modal" onClick={toggleModal} aria-label="Close">
              <CloseIcon />
            </button>
          </div>

          <div className="modal-body">
            <h5>Login</h5>

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
                  <Form autoComplete="on">
                    <div className="input-style d-flex align-items-center">
                      <input
                        name="user"
                        onChange={handleChange}
                        value={values.user}
                        type="text"
                        placeholder="Email"
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

                    <div
                      style={{
                        color: 'tomato',
                        textAlign: 'center',
                        display: `${wrong ? 'block' : 'none'}`,
                      }}
                    >
                      Invalid Email and Password pair.
                    </div>

                    <button type="submit" disabled={isSubmitting} className="btn theme-btn">
                      {isSubmitting ? 'Please wait...' : 'Log In'}
                    </button>

                    <button type="button" onClick={openRegisterModal} className="color-purple regBtn btn">Dont have an account?</button>
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

export default LoginModal;
