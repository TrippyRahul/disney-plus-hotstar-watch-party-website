import React from "react";
import styles from "../styles/button.module.scss";

const Button = () => {
  return (
    <a
      href="https://chrome.google.com/webstore/detail/hotstar-party/fbddilioagdlbcnhaenjmelhjhcliklj"
      target="_blank"
    >
      <button className={styles.btn}>Add to Chrome</button>
    </a>
  );
};

export default Button;
