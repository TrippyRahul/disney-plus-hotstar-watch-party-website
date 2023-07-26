import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>Sync with Hotstar watch party</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Experience fantastic showtime with your loved ones. Simply log
                  in together and invite your friends. This extension allows you
                  to see shows and movies simultaneously while having audio and
                  video calls, making it a fun and interactive experience. Enjoy
                  fast buffering and HD video quality on your browser for an
                  immersive entertainment session.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./favorite.svg"
                alt="favorite"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles["bottom-left"]}>
            <div className={styles.bg}>
              <div className={styles["bg-image-container"]}>
                <Image
                  src="./customize-bg.svg"
                  alt="customize-bg"
                  fill={true}
                  className={styles["bg-image"]}
                />
              </div>
            </div>
            <div className={styles["image-container"]}>
              <Image
                src="./customize.svg"
                alt="customize"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            <div className={styles.headings}>
              <h2>Customize your perfect party</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Get ready to personalize your party with this awesome extension.
                Choose a creative user icon and unlock cool features like chat,
                audio calls, and video calls. Stream your favorite movies with
                your loved ones, all from the comfort of your own space. This
                extension offers top-notch content from your favorite OTT
                platforms, providing high-quality streaming with fantastic
                features enjoy Disney+group watch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
