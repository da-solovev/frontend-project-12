const Message = ({ text, username }) => (
  <>
    <div>
      Сообщение:
      {text}
    </div>
    <div>
      Автор:
      {username}
    </div>
  </>
);

export default Message;
