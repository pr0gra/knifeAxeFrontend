"use client";

import React from "react";
import styles from "./styles.module.css";
import sanitizeHtml from "sanitize-html";

export function DescriptionSection({ description }: { description: string }) {
  return (
    <>
      <div
        className={styles["description"]}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(description) }}
      />
    </>
  );
}
