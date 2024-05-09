import React from "react";
import styles from "./MessageBox.module.css";
import { useState } from "react";

export default function MessageBox({ handleAsk, handleSave }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAsk(text);
    setText("");
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className={styles.wrapper}>
      <input type="text" onChange={(e) => setText(e.target.value)} value={text} className={styles.inputField} />
      <input type="submit" value="Ask" className={styles.buttonStyle} />
      <button onClick={handleSave} className={styles.buttonStyle}>Save</button>
    </form>
  );
}
