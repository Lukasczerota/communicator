import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL } from '../api';
import styles from './ChannelsList.module.scss';
import Popup from '../Popup/Popup';
import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';
import { BiPlus } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import ChannelsListItem from './ChannelsListItem';

function ChannelsList({
  token,
  userId,
  setCurrentChannelId,
  currentChannelId,
  name,
  setCurrentChannelName,
}) {
  const [newChannelName, setNewChannelName] = useState('');
  const [isAddChannelPopupVisible, setIsAddChannelPopupVisible] = useState(
    false
  );
  const [channelsList, setChannelsList] = useState([]);
  const [showChannels, setShowChannels] = useState(false);

  const getChannelsList = () => {
    fetch(API_URL + 'channels.list.joined', {
      method: 'GET',
      headers: {
        'X-Auth-Token': token,
        'X-User-Id': userId,
      },
    })
      .then((response) => response.json())
      .then((response) => setChannelsList(response.channels));
  };
  const createChannel = function () {
    fetch('https://open.rocket.chat/api/v1/channels.create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': token,
        'X-User-Id': userId,
      },
      body: JSON.stringify({
        name: newChannelName,
      }),
    }).then((response) => getChannelsList());
  };

  useEffect(() => {
    getChannelsList();
  }, []);

  const deleteChannel = (roomId) => {
    fetch(API_URL + 'channels.delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': token,
        'X-User-Id': userId,
      },
      body: JSON.stringify({
        roomId,
      }),
    }).then((response) => getChannelsList());
  };

  return (
    <div className={styles.channelsListContainer}>
      <h2 className={styles.channelsListH2}>{name}</h2>
      <div
        className={styles.channelsHeaderContainer}
        onClick={() => {
          setShowChannels(!showChannels);
        }}
      >
        <IoMdArrowDropright
          className={`${styles.dropArrowIcon} ${
            showChannels ? styles.channelsVisible : styles.channelsNotVissible
          }`}
        />

        <h3 className={styles.channelsListH3}>Channels </h3>

        <BiPlus
          className={styles.plusIcon}
          onClick={(e) => {
            setIsAddChannelPopupVisible(true);
            e.stopPropagation();
          }}
        />
      </div>

      {showChannels
        ? channelsList.map((channel) => {
            return (
              <ChannelsListItem
                key={channel._id}
                channel={channel}
                setCurrentChannelId={setCurrentChannelId}
                currentChannelId={currentChannelId}
                setCurrentChannelName={setCurrentChannelName}
                deleteChannel={deleteChannel}
              />
            );
          })
        : ''}

      <Popup
        visible={isAddChannelPopupVisible}
        setIsAddChannelPopupVisible={setIsAddChannelPopupVisible}
        setNewChannelName={setNewChannelName}
        newChannelName={newChannelName}
        createChannel={createChannel}
      ></Popup>
    </div>
  );
}

export default ChannelsList;
