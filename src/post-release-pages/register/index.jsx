/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik } from 'formik';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const formSchema = Yup.object({
  email: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .email('Invalid email address')
    .required('Please enter your email'),
  user: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Please enter a username.'),
  password: Yup.string()
    .min(8, 'Must be atleast 8 characters long.')
    .required('Please enter a password'),
  confirmpass: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match.')
    .required('Please re-type your password.')
});

const initialValues = {
  email: '', user: '', password: '', confirmpass: ''
};

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const { status } = useSession();

  const handleFormSubmit = async (values, setSubmitting, resetForm) => {
    setSubmitting(true);
    const res = await fetch('/api/reghandler', {
      method: 'POST',
      body: JSON.stringify({
        username: values.user,
        email: values.email,
        password: values.password
      })
    })
      .then((resp) => resp.json());
    if (!res.success) {
      setError(true);
      document.querySelector('#registererrormsg').innerText = res.message;
      console.log(res.message);
    } else {
      setError(false);
      console.log('Successfully registered.');
      resetForm({ values: '' });
      router.push('/login');
    }
    setSubmitting(false);
  };

  if (status === 'loading') {
    return (
      <div className="login-pg">
        <div className="p-0">
          <div className="header">
            <div className="row m-0 p-0 postion-relative" />
          </div>
          <div className="container main-container position-relative section-margin">
            <div className="section-margin d-flex justify-content-center flex-column">
              <h2 className="h2 text-center">Loading...</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'authenticated') {
    return (
      <div className="login-pg">
        <div className="p-0">
          <div className="header">
            <div className="row m-0 p-0 postion-relative" />
          </div>
          <div className="container main-container position-relative section-margin">
            <div className="section-margin d-flex justify-content-center flex-column">
              <h2 className="h2 text-center">You are already logged in.</h2>
              <a href="/src/pages">
                <a>
                  <h2 className="h2 text-center text-secondary">Go back to homepage.</h2>
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-pg">
      {/* <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/privacy-bg.png`} className="p-0 desktop w-100 banner" />
      <img src={`${process.env.NEXT_PUBLIC_IMG_URL}img/privacy-bg-mb.png`} className="p-0 mobile w-100 banner" /> */}

      <div className="p-0">
        <div className="header registerHeader">
          <div className="row m-0 p-0 position-relative" />
        </div>

        {/* form */}
        <div className="row m-0 p-0 position-relative section-margin">
          <div className="container registerContainer main-container section-margin">
            <div className="row m-0 p-0 position-relative loginContent registerLoginContent">
              <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => handleFormSubmit(values, setSubmitting, resetForm)}
              >
                {({ values, handleChange, isSubmitting }) => (
                  <Form autoComplete="off">
                    <h5>AsuraScans</h5>

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
                        placeholder="Usename"
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
                        display: `${error ? 'block' : 'none'}`,
                      }}
                    />

                    <button type="submit" disabled={isSubmitting} className="btn theme-btn">
                      {isSubmitting ? 'Please wait...' : 'Register'}
                    </button>

                    <a href="/src/post-release-pages/register">
                      <a className="color-purple reg">Already have an account?</a>
                    </a>
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

export default Register;
