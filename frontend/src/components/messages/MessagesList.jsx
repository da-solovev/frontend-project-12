import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import Message from './Message';
import { useGetMessagesQuery, useAddMessageMutation } from '../../api/messagesApi';
import routes from '../../routes';

const MessagesList = () => {
  const {
    data: messages, isLoading, isError, error,
  } = useGetMessagesQuery();
  const [newMessage] = useAddMessageMutation();
  const activeChannelId = useSelector((state) => state.ui.activeChannelId);
  const username = useSelector((state) => state.auth.username);

  const formik = useFormik({
    initialValues: {
      body: '',
      channelId: activeChannelId,
      username,
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        values.channelId = activeChannelId;
        newMessage(values);
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
      <ul>
        {messages
          .filter((message) => message.channelId === activeChannelId)
          .map((message) => (
            <Message
              key={message.id}
              text={message.body}
              username={message.username}
            />
          ))}
      </ul>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="body"
          name="body"
          type="body"
          onChange={formik.handleChange}
          value={formik.values.body}
        />
        <button
          type="submit"
        >
          Отправить сообщение
        </button>
      </form>
    </>

  );
};

export default MessagesList;
