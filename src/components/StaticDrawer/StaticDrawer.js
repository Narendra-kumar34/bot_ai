import React from "react";
import styles from "./StaticDrawer.module.css";
import ProfilePic from "../../assets/profilePic.png";
import { ReactComponent as EditIcon } from "../../assets/editIcon.svg";
import { Link } from "react-router-dom";

export default function StaticDrawer() {
  return (
    <div className={styles.sideWrapper}>
      <Link to="/" style={{ textDecoration: "none", width: "100%" }}>
        <button className={styles.newChatButton}>
          <div className={styles.profilePic}>
            <img src={ProfilePic} alt="ProfilePic" />
          </div>
          <span>New Chat</span>
          <EditIcon />
        </button>
      </Link>
      <Link to="/history">
        <button className={styles.pastConvoButton}>Past Conversations</button>
      </Link>
    </div>
  );
}
