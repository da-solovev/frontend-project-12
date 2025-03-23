import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../store/slices/authSlice';

const AuthPage = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const dispatch = useDispatch();

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="username"
        name="username"
        type="username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {/* onClick={() => dispatch(setCredentials({user: 'vasya', token: '123'}))} */}
      <button type="submit">Войти</button>
    </form>
  );
};

export default AuthPage;
