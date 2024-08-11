import React from "react";
import styles from "@/styles/component/cardservice.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CardService({ icon, title, description }) {
  return (
    <div className={cx("container")}>
      <div className={cx("icon")}>{icon}</div>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}

export default CardService;
