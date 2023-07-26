import React from "react";
import styles from "../styles/benefits.module.scss";
import Button from "./Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits} id="features">
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles["image-container"]}>
            <Image
              src="./benefits.svg"
              alt="benefits"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h2>
                Enjoy limitless streaming on multiple websites with Hotstar
                party extension
              </h2>
            </div>
            <div className={styles.desc}>
              <p>
                Have limitless streaming on multiple websites with Hotstar. This
                fantastic extension allows users to host virtual parties and
                stream their favorite content from various websites, including
                Hotstar, with friends and family.
              </p>
              <p>
                It synchronizes the playback, so everyone views the same thing
                simultaneously, no matter where they are located. The extension
                also offers a chat feature with audio and video calls, making it
                easy for participants to interact and share their thoughts
                during the streaming session.
              </p>
              <p>
                With teleparty Disney plus, users can create memorable shared
                experiences, making streaming more enjoyable and social for
                everyone involved. Whether it's binge popular shows or catching
                the latest movies, this extension brings people together for a
                fun and immersive entertainment experience.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
