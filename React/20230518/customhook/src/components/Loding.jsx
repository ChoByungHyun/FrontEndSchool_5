import React from "react";
import loadingImg from "../images/loading.gif";
import styles from "./Loding.module.css";

export default function Loding() {
  return <img className={styles.imgLoading} src={loadingImg}></img>;
}
