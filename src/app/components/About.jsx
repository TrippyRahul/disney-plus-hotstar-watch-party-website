import React from "react";
import styles from "../styles/about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>About</h2>
            </div>
            <div className={styles.desc}>
              <p>
                This extension provides an{" "}
                <span>
                  {" "}
                  amazing streaming experience for it’s subscribers.{" "}
                </span>{" "}
                You can <span> watch together Disney Plus </span>for movies and
                TV shows with your loved ones in real time, no matter where they
                are. Synchronize your playback and use chat, audio, and video
                calls to interact while seeing from different places. It's a fun
                and enjoyable way to share content, even when you're far apart.
              </p>

              <p>
                To use it, simply have an account and install the browser
                extension. The extension will generate a special URL that the
                host shares with friends or family to invite them to the party.
                Once everyone is connected, the host starts the movie or show,
                and all screens sync up, so everyone views together at the same
                time. It's a seamless and delightful way to enjoy{" "}
                <span> Disney plus groupwatch. </span>
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./about.svg"
                alt="about"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
