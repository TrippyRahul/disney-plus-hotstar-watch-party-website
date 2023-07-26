"use client";

import React, { useState } from "react";
import styles from "../styles/accordian.module.scss";
import Button from "../components/Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "How to do groupwatch on Disney plus?    ",
    ans: " Start a movie or show, then invite friends through the icon to stream together in real-time.",
  },
  {
    id: 2,
    ques: "Can you screen share Disney Plus?    ",
    ans: "Yes with this extension you can share your screen with it.    ",
  },
  {
    id: 3,
    ques: "How to do a watch party on Disney Plus?    ",
    ans: "To host a party on it, use this browser extension that synchronizes playback and allows chat, then invite friends to join by sharing the party link.",
  },
  {
    id: 4,
    ques: " Can you group-watch Disney Plus on the same account?",
    ans: "Yes, you can group view on it at the same account.    ",
  },
  {
    id: 5,
    ques: "How does Groupwatch on Disney Plus work?",
    ans: "After installing it on your browser, you can activate your account and start exploring your favorite content. You can also share the link with your friends to see movies together.",
  },
  {
    id: 6,
    ques: "How to screen share Disney Plus?    ",
    ans: " Use this extension to activate your account. Where you will get an option to share the link with your best buddy.",
  },
  {
    id: 7,
    ques: "How to share Disney Plus with family?    ",
    ans: "To share this with your family, create separate profiles within your account, or subscribe to the Bundle which includes multiple streaming services to enjoy content on different devices simultaneously for the whole family.",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
    } else {
      setShowAnswer(questionId);
    }
  };

  return (
    <div className={styles.accordian}>
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles["image-container"]}>
                  <Image
                    src="./add-logo.svg"
                    alt="add-logo"
                    fill={true}
                    className={styles.image}
                  />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}

              {/*
               */}
            </li>
          ))}
        </ol>
        <Button />
      </div>
    </div>
  );
};

export default Accordian;
