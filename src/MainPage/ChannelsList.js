import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_URL } from '../api';
import styles from './ChannelsList.module.scss';
import Popup from '../Popup/Popup';
import { IoMdArrowDropright, IoMdArrowDropdown } from 'react-icons/io';
import { BiPlus } from 'react-icons/bi';
import ChannelsListItem from './ChannelsListItem';
import { useSelector } from 'react-redux';

function ChannelsList({
  // setCurrentChannelId,
  // currentChannelId,
  setCurrentChannelName,
}) {
  const userData = useSelector((state) => state.userData);
  // const currentChannelId = useSelector((state) => state.currentChannelId);
  const { name, token, userId } = userData;
  const [newChannelName, setNewChannelName] = useState('');
  const [isAddChannelPopupVisible, setIsAddChannelPopupVisible] = useState(
    false
  );
  const [channelsList, setChannelsList] = useState([]);
  const [showChannels, setShowChannels] = useState(false);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': token,
      'X-User-Id': userId,
    },
  };
  const getChannelsList = () => {
    axios
      .get(API_URL + 'channels.list.joined', config)
      .then((response) => setChannelsList(response.data.channels));
  };

  const createChannel = function () {
    axios
      .post(
        API_URL + 'channels.create',
        {
          name: newChannelName,
        },
        config
      )
      .then((response) => getChannelsList());
  };

  useEffect(() => {
    getChannelsList();
  }, []);

  const deleteChannel = (roomId) => {
    axios
      .post(
        API_URL + 'channels.delete',
        {
          roomId,
        },
        config
      )
      .then((response) => getChannelsList());
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
                // setCurrentChannelId={setCurrentChannelId}
                // currentChannelId={currentChannelId}
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
