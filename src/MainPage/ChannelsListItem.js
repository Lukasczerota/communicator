import React from 'react';
import { MdDelete } from 'react-icons/md';
import styles from './ChannelsListItem.module.scss';

function ChannelsListItem({
  channel,
  setCurrentChannelId,
  currentChannelId,
  setCurrentChannelName,
  deleteChannel,
}) {
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
          setCurrentChannelId(channel._id);
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
