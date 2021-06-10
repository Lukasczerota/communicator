import React from 'react';
import { useEffect, useState } from 'react';
import { API_URL } from '../../api';
import styles from './MessageInput.module.scss';
import { MdSend } from 'react-icons/md';

function MessageInput({
  token,
  currentChannelId,
  userId,
  updateMessages,
  setMessages,
  currentChannelName,
}) {
  const [messageText, setMessageText] = useState('');
  const sendMessage = function () {
    fetch(API_URL + 'chat.sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': token,
        'X-User-Id': userId,
      },
      body: JSON.stringify({
        message: {
          msg: messageText,
          rid: currentChannelId,
        },
      }),
    }).then((response) => updateMessages());
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={messageText}
          placeholder={`Send a message to ${currentChannelName}`}
          onChange={(e) => {
            setMessageText(e.target.value);
          }}
          className={styles.inputMessage}
        />
        <button
          className={styles.sendMessageButton}
          onClick={() => {
            sendMessage();
            setMessageText('');
          }}
        >
          <MdSend />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
