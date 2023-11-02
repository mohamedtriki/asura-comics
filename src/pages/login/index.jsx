/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import * as Yup from 'yup';
import { ErrorMessage, Form, Formik } from 'formik';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const formSchema = Yup.object({
  user: Yup.string()
    .max(30, 'Must be 30 characters or less')
    .email('Invalid email address')
    .required('Please enter your email'),
  password: Yup.string().required('Please enter your password'),
});

const initialValues = { user: '', password: '' };

const Login = () => {
  const router = useRouter();
  const [wrong, setWrong] = useState(false);
  const { status } = useSession();

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
      resetForm({ values: '' });
    }
    if (res.url) {
      router.push(res.url);
    }
    setSubmitting(false);
  };

  if (status === 'loading') {
    return (
      <div className="login-pg">
        <div className="p-0 ultrawide">
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
        <div className="p-0 ultrawide">
          <div className="header">
            <div className="row m-0 p-0 postion-relative" />
          </div>
          <div className="container main-container position-relative section-margin">
            <div className="section-margin d-flex justify-content-center flex-column">
              <h2 className="h2 text-center">You are already logged in.</h2>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/">
                <h2 className="h2 text-center text-secondary">Go back to homepage.</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="login-pg">
      <div className="p-0 ultrawide">
        <div className="header">
          <div className="row m-0 p-0 position-relative" />
        </div>

        {/* form */}
        <div className="row m-0 p-0 position-relative section-margin">
          <div className="container main-container section-margin">
            <div className="row m-0 p-0 position-relative loginContent">
              <Formik
                initialValues={initialValues}
                validationSchema={formSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => handleFormSubmit(values, setSubmitting, resetForm)}
              >
                {({ values, handleChange, isSubmitting }) => (
                  <Form autoComplete="on">
                    <h5>AsuraScans</h5>

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

                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a href="/register" className="color-purple reg">Dont have an account?</a>

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

export default Login;
