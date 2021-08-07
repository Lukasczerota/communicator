import React from 'react';
import styles from './Popup.module.scss';
import { RiCloseFill } from 'react-icons/ri';

function Popup({
  children,
  visible,
  setIsAddChannelPopupVisible,
  setNewChannelName,
  newChannelName,
  createChannel,
}) {
  if (visible) {
    return (
      <div className={styles.outerPopup}>
        <div className={styles.innerPopup}>
          <div className={styles.popupContent}>
            <h3 className={styles.popupH3}>Create a channel</h3>
            <h5 className={styles.popupH5}>
              Channels are where your team communicates. They’re best when
              organized around a topic — #marketing, for example.
            </h5>
            <label className={styles.label} htmlFor="channelName">
              Name
            </label>
            <br />
            <input
              type="text"
              id="channelName"
              value={newChannelName}
              onChange={(e) => {
                setNewChannelName(e.target.value);
              }}
            ></input>
            <label className={styles.label} htmlFor="description">
              <span className={styles.inputDescription}>Description</span>{' '}
              {'(optional)'}
            </label>
            <br />
            <input type="text" id="description"></input>
            <p>{"What's is this channel about?"}</p>
            <button
              className={styles.createChannelButton}
              onClick={() => {
                createChannel();
                setIsAddChannelPopupVisible();
                setNewChannelName('');
              }}
            >
              Create
            </button>
          </div>
          <button
            className={styles.closeButton}
            onClick={() => {
              setIsAddChannelPopupVisible(false);
              setNewChannelName('');
            }}
          >
            <RiCloseFill />
          </button>
        </div>
      </div>
    );
  } else {
    return '';
  }
}

export default Popup;
