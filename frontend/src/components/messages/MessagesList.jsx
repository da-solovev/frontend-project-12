import Message from './Message';
import { useGetMessagesQuery } from '../../store/messagesApi';

const MessagesList = (props) => {
  const {
    data: messages, isLoading, isError, error,
  } = useGetMessagesQuery();

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
    <ul>
      {messages?.map((message) => (
        <Message
          key={message.id}
          text={message.body}
          username={message.username}
        />
      ))}
    </ul>
  );
};

export default MessagesList;
