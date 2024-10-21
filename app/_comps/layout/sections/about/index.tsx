import React from "react";
import styles from "./styles.module.css";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-white/35">Get to know me</span>
        <h3 className="text-5xl font-bold my-3">About Me</h3>
        <div className={styles.animatedBar} />
      </div>
    </div>
  );
};

export default About;
