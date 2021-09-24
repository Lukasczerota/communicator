import React from 'react';
import { useState } from 'react';
import styles from './MainPage.module.scss';
import ChannelsList from './ChannelsList';
import Messages from './messages/Messages';
import { useSelector } from 'react-redux';

function MainPage() {
  // const [currentChannelId, setCurrentChannelId] = useState('');
  const [currentChannelName, setCurrentChannelName] = useState('');
  const userData = useSelector((state) => state.userData);
  const currentChannelId = useSelector(
    (state) => state.currentChannel.currentChannelId
  );

  const { token, name, userId } = userData;
  return (
    <div className={styles.container}>
      <div className={styles.channelsList}>
        <ChannelsList
          // setCurrentChannelId={setCurrentChannelId}
          // currentChannelId={currentChannelId}
          setCurrentChannelName={setCurrentChannelName}
        />
      </div>
      <div className={styles.messages}>
        {currentChannelId && (
          <Messages
            token={token}
            // currentChannelId={currentChannelId}
            userId={userId}
            currentChannelName={currentChannelName}
          />
        )}
      </div>
    </div>
  );
}

export default MainPage;
