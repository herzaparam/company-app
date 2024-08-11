import React from "react";
import styles from "@/styles/landing.module.scss";
import classNames from "classnames/bind";
import CardService from "../CardService";
import { promises as fs } from "fs";
import { readJsonFile } from "@/helpers/utils";

const cx = classNames.bind(styles);

async function Service() {
  const data = await readJsonFile("/src/data/service.json");

  return (
    <section className={cx("sect-service")}>
      <h5 className={cx("service-heading")}>OUR SERVICES</h5>
      <h2 className={cx("service-title")}>Donec porttitor euismod dignissim</h2>
      {data.map((item) => (
        <CardService
          key={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </section>
  );
}

export default Service;
