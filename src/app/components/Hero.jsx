import React from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>Stream Your Favorites Together with Disney plus watch party</h1>{" "}
            <p>
              Stream your favorite shows and movies together with Hotstar watch
              party. This awesome extension allows you to see your top picks
              with friends and family simultaneously, no matter the distance
              between you. Enjoy a fun and interactive movie experience, all
              from the comfort of your own homes.
            </p>
            <Button />
          </div>
          <div className={styles.right}>
            <div className={styles[`image-container`]}>
              <Image
                src={`/hero-img.svg`}
                alt="hero-img"
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <p>
              You can start a virtual party and invite others to join. Everyone
              sees the same thing on their screens and can use{" "}
              <span> Disneyplus chat </span>feature together while streaming.
              It&apos;s a fun way to enjoy classics and new releases, bringing
              people closer and making the streaming experience more social.
              Whether you want to relive old memories or discover new magic, the
              Disney Plus extension lets you have a great time with your loved
              ones, no matter how far apart you are.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
