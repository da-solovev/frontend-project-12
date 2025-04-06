import { useFormik } from 'formik';
import { useGetChannelsQuery, useAddChannelsMutation } from '../../api/channelsApi.js';
import Channel from './Channel.jsx';

const ChannelsList = () => {
  const {
    data: channels, isLoading, error, isError,
  } = useGetChannelsQuery();

  const [addChannel] = useAddChannelsMutation();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        addChannel(values);
      } catch (error) {
        console.error('Error login:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return (
      <div>
        Ошибка:
        {error.message}
      </div>
    );
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <button
          type="submit"
        >
          +
        </button>
      </form>
      <ul>
        {channels.map((item) => (
          <Channel key={item.id} name={item.name} id={item.id} />
        ))}
      </ul>

    </>

  );
};

export default ChannelsList;
