import { useDispatch } from 'react-redux';
import { toggleChannel } from '../../store/slices/uiSlice.js';

const Channel = ({ id, name }) => {
  const dispatch = useDispatch();

  const handleChannelToggle = () => dispatch(toggleChannel(id));

  return <div onClick={handleChannelToggle}>{name}</div>;
};

export default Channel;
