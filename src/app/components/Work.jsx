import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <div className={styles.work} id="how-it-works">
      <div className={styles.container}>
        <h2 id="work">How to watch Disney Plus on your browser</h2>
        <h3>There are some steps to watch this extension on your browser:-</h3>

        <ul className={styles.content}>
          <li>
            <span>Install</span> the extension
          </li>
          <li>
            Then, after installing it, open it in your browser and{" "}
            <span> sign in to your account</span>
          </li>
          <li>
            Now, browse it and select the movie or TV show that you want to
            <span> watch or share with your friends</span>
          </li>
          <li>
            After selecting the content, click on the browser extension and then{" "}
            <span> initiate the party </span>
          </li>
          <li>
            You can generate a unique URL, and link to the party. Then just copy
            the link and <span> share it with your friends </span>
          </li>
          <li>
            Just <span> invite your friends </span> and share the link with them
          </li>
          <li>
            After inviting them,{" "}
            <span> watch together and join the party. </span> The best part is
            you can chat, audio, and video call while watching a movie
          </li>
          <li>
            At last, sit back and{" "}
            <span>
              {" "}
              just relax while having your favorite show together in real-time.
            </span>{" "}
            No matter how far they are
          </li>
        </ul>

        <p>
          Remember before enjoying the movies together, you need to have a
          subscription.
        </p>
      </div>
    </div>
  );
};

export default Work;
