import React from 'react';
import { MdDelete } from 'react-icons/md';
import styles from './ChannelsListItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentChannelId } from '../store/currentChannelReducer';

function ChannelsListItem({
  channel,
  // setCurrentChannelId,
  // currentChannelId,
  setCurrentChannelName,
  deleteChannel,
}) {
  const dispatch = useDispatch();
  const currentChannelId = useSelector(
    (state) => state.currentChannel.currentChannelId
  );
  return (
    <div
      className={`${styles.channelContainer} ${
        channel._id === currentChannelId ? styles.currentChannel : ''
      }`}
    >
      <h4
        className={`${styles.channelsListTitle} 
  }`}
        key={channel._id}
        onClick={() => {
          // console.log('bb');
          dispatch(setCurrentChannelId(channel._id));
          // setCurrentChannelId(channel._id);
          setCurrentChannelName(channel.name);
        }}
      >
        # {channel.name}
      </h4>
      <span
        className={`${styles.deleteIconContainer} ${
          channel._id === currentChannelId ? styles.currentChannel : ''
        }`}
        onClick={(e) => {
          e.stopPropagation();
          deleteChannel(channel._id);
        }}
      >
        <MdDelete className={styles.deleteIcon} />
      </span>
    </div>
  );
}

export default ChannelsListItem;
