import React from "react";
import styles from "@/styles/component/footerinfo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function FooterInfo() {
  return (
    <footer className={cx("ctn")}>
      <p>© Rezilla – All rights reserved</p>
      <div className={cx("ctn-item")}>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <p>Disclaimer</p>
      </div>
    </footer>
  );
}

export default FooterInfo;
