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
              <h2>Enjoy limitless streaming with Hotstar party extension</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Have limitless streaming with Hotstar. This browser extension
                allows you to host virtual parties and watch their favorite
                content from Hotstar which you can watch with your family and
                friends.
              </p>
              <p>
                It also synchronizes the playback so that you can view the same
                thing at the same time. This browser extension has some
                brilliant features like chat and video/audio calls. With these
                features, you can interact and share your thoughts while
                streaming a show.
              </p>
              <p>
                In case you have missed your favorite movie in theaters, then
                with teleparty Disney Plus, you can watch it with your friends
                and family. So, whether it is a popular show or watching the
                latest movies, Disney plus watch party will bring you together
                to have a fun and unlimited entertainment experience.
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
