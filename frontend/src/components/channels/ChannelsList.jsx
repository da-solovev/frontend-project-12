import { useGetChannelsQuery } from '../../store/channelsApi.js';
import Channel from './Channel.jsx';

const ChannelsList = () => {
  const { data: channels, isLoading, error } = useGetChannelsQuery();

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <ul>
      {channels.map((channel) => (<Channel key={channel.id} name={channel.name} />))}
    </ul>
  );
};

export default ChannelsList;
