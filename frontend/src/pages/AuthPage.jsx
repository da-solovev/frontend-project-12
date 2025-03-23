import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import routes from '../routes.js';
import { setCredentials } from '../store/slices/authSlice';

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await axios.post(routes.login, values);
        dispatch(setCredentials(response.data));
        navigation('/', { replace: true });
      } catch (error) {
        console.error('Error login:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

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
      <button
        type="submit"
      >
        Войти
      </button>
    </form>
  );
};

export default AuthPage;
