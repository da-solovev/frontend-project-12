import { useEffect } from 'react';
import axios from 'axios';
import { useGetChannelsQuery } from '../store/slices/channelsApi.js';

const ChannelsList = () => {
  const { data: channels, isLoading, error } = useGetChannelsQuery();
  console.log(channels);
};

export default ChannelsList;
