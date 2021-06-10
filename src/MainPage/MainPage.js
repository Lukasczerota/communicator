import React from 'react';
import { useState, useEffect } from 'react';
import styles from './MainPage.module.scss';
import ChannelsList from './ChannelsList';
import Messages from './messages/Messages';

function MainPage({ token, userId, name }) {
  const [currentChannelId, setCurrentChannelId] = useState('');
  const [currentChannelName, setCurrentChannelName] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.channelsList}>
        <ChannelsList
          token={token}
          userId={userId}
          name={name}
          setCurrentChannelId={setCurrentChannelId}
          currentChannelId={currentChannelId}
          setCurrentChannelName={setCurrentChannelName}
        />
      </div>
      <div className={styles.messages}>
        {currentChannelId && (
          <Messages
            token={token}
            currentChannelId={currentChannelId}
            userId={userId}
            currentChannelName={currentChannelName}
          />
        )}
      </div>
    </div>
  );
}

export default MainPage;
