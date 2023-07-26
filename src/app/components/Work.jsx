import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <div className={styles.work} id="how-it-works">
      <div className={styles.container}>
        <h2 id="work">How to view Disney Plus on a browser</h2>
        <h3>To see this extension on your browser, follow these steps:</h3>

        <ul className={styles.content}>
          <li>
            <span>Install Extension:</span> First, you need to install this
            browser extension that supports it’s features.{" "}
          </li>
          <li>
            <span>Open Website:</span> After installing the extension, open your
            web browser and navigate to the website and sign in to your account.
          </li>
          <li>
            <span>Choose Content:</span> Browse through the library and select
            the movie or TV show you want to share with your friends.
          </li>
          <li>
            <span>Start Party: </span>Once you've chosen the content, click on
            the browser extension icon in your browser's toolbar. This will
            initiate the party session.
          </li>
          <li>
            <span>Generate Link:</span> The extension will generate a unique URL
            link to your party. You can copy this link and share it with your
            friends or family members whom you want to invite to the party.
          </li>
          <li>
            <span>Invite Friends:</span> Share the party link with your loved
            ones.
          </li>
          <li>
            <span> View Together:</span> As your friends join the party, the
            movie or show will start playing simultaneously for all
            participants. You can chat and audio and video call while viewing a
            movie.
          </li>
          <li>
            <span>Enjoy the Experience: </span>Sit back, relax, and enjoy
            streaming your favorite content together with your friends in real
            time, even if you are not physically in the same place
          </li>
        </ul>

        <p>
          But to enjoy the movies together, you need to have a valid
          subscription on it.
        </p>
      </div>
    </div>
  );
};

export default Work;
