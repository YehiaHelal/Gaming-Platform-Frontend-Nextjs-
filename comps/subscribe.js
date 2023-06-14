"use client";

import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "./subscribe.module.css";
import Link from "next/link";

import { useEffect, useState } from "react";
// import { useItemsCartContext } from "../../../hooks/useItemsCartContext";
// import { useAuthContext } from "../../../hooks/useAuthContext";
import axios from "axios";

const SubscribeEmail = () => {
  // show to user that added to Subscribed Email service test ^ _ ^
  const [showSubscribedTrue, setShowSubscribedTrue] = useState(false);

  // handle subscribe
  const handleSubscribe = async (e) => {
    e.preventDefault();

    setShowSubscribedTrue(true);

    setTimeout(() => {
      setShowSubscribedTrue(false);
    }, 2000);

    return;
  };

  return (
    <div className={styles.sectionsixthComponent}>
      <div className={styles.sectionsixthTextContent}>
        <h1>Lorem Ipsum</h1>
        <h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>
      </div>

      <div className={styles.sectionsixthTextsubscribe}>
        <div className={styles.sectionsixthTextsubscribefirst}>
          <h1>Stay in the loop</h1>
          <h2>
            Subscribe to receive the latest news and updates about TDA. We
            promise not to spam you!{" "}
          </h2>
        </div>
        <div>
          <form
            className={styles.sectionsixthTextsubscribesecond}
            onSubmit={handleSubscribe}
            // action="/send-data-here"
            // method="post"
          >
            <input
              placeholder="Enter email address"
              required
              type="email"
              name="emailsub"
              minlength="5"
              maxlength="50"
            ></input>
            <button
              type="submit"

              // onClick={() => {
              //   setShowSubscribedTrue(true);

              //   setTimeout(() => {
              //     setShowSubscribedTrue(false);
              //   }, 2000);
              // }}
            >
              Continue
            </button>
          </form>

          {showSubscribedTrue && (
            <div className={styles.subscribeemailStyle}>Subscribed</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscribeEmail;
