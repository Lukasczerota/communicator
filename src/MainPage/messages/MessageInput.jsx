import React from 'react';
import { useState } from 'react';
import { API_URL } from '../../api';
import styles from './MessageInput.module.scss';
import { MdSend } from 'react-icons/md';
import axios from 'axios';

function MessageInput({
  token,
  currentChannelId,
  userId,
  updateMessages,
  currentChannelName,
}) {
  const [messageText, setMessageText] = useState('');
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': token,
      'X-User-Id': userId,
    },
  };
  const sendMessage = function () {
    axios
      .post(
        API_URL + 'chat.sendMessage',
        {
          message: {
            msg: messageText,
            rid: currentChannelId,
          },
        },
        config
      )
      .then((response) => updateMessages());
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
