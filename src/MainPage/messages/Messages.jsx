import React from 'react';
import { useState, useEffect } from 'react';
import { API_URL } from '../../api';
import avatar from './avatar.png';
import MessageInput from './MessageInput';
import styles from './Messages.module.scss';

function Messages({ token, currentChannelId, userId, currentChannelName }) {
  const [messages, setMessages] = useState([]);
  const updateMessages = () => {
    fetch(API_URL + 'channels.messages?roomId=' + currentChannelId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': token,
        'X-User-Id': userId,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setMessages(response.messages.reverse());
      });
  };

  useEffect(() => {
    updateMessages();
  }, [currentChannelId, token, userId]);

  return (
    <div className={styles.messagesContainer}>
      <div className={styles.channelName}>{currentChannelName}</div>
      <div className={styles.displayedMessages}>
        {messages.map((message) => (
          <div key={message._id} className={styles.messageContainer}>
            <div className={styles.avatarContainer}>
              <img src={avatar} alt="" className={styles.userAvatar} />
            </div>
            <div className={styles.message}>
              <p className={styles.userName}>{message.u.username}</p> <br />{' '}
              {message.msg}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.messageInput}>
        <MessageInput
          token={token}
          currentChannelId={currentChannelId}
          userId={userId}
          updateMessages={updateMessages}
          setMessages={setMessages}
          currentChannelName={currentChannelName}
        />
      </div>
    </div>
  );
}

export default Messages;
