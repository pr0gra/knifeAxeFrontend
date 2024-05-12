"use client";

import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

interface IProps {
  image: string;
}

export function ImageSection({ image = "" }: IProps) {
  return (
    <Image
      src={image}
      alt="image"
      width={1200}
      height={800}
      className={styles["image"]}
    />
  );
}
