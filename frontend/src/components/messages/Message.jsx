const Message = (props) => (
  <>
    <div>
      Сообщение:
      {props.text}
    </div>
    <div>
      Автор:
      {props.username}
    </div>
  </>
);

export default Message;
