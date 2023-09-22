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
                <h2>Watch Hotstar watch party at the same time</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Have the best showtime with your buddy by simply logging in
                  together and inviting them. This browser extension will allow
                  you to watch movies while having audio and video calls. With
                  these features, you can have fun and watch shows together. So,
                  speed up your buffering and HD video quality on your browser.
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
              <h2>Personalize your party</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Now it’s time to customize your own party with Disney plus watch
                party. It’s just you need to choose a create user icon and
                unlock all the cool features including chat, audio, and video
                calls. Watch your favorite shows with your close ones in your
                comfort zone. It offers top content from all your favorite OTT
                platforms, which provides high-quality shows with fantastic
                features on Disney+group watch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
