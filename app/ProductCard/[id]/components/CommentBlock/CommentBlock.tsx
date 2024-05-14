"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import userIcon from "@/app/assets/icons/user-avatar.svg";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import commentTail from "@/app/assets/icons/comment-tail.svg";
import commentTailSmall from "@/app/assets/icons/comment-tail-small.svg";

interface IComment {
  id: number;
  post: number;
  parent: number;
  author: number;
  author_name: string;
  author_url: string;
  date: string;
  date_gmt: string;
  content: {
    rendered: string;
  };
  link: string;
  status: string;
  type: string;
  author_avatar_urls: {
    [key: string]: string;
  };

  _links: {
    self: [
      {
        [key: string]: string;
      }
    ];
    collection: [
      {
        [key: string]: string;
      }
    ];
    up: [
      {
        embeddable: boolean;
        post_typ: string;
        href: string;
      }
    ];
  };
}

export function CommentBlock() {
  const { id } = useParams();
  const [commentData, setCommentData] = useState<IComment[]>([]);

  async function getCommentData() {
    try {
      const response = await fetch(
        `https://nozhtopor.na4u.ru/wp-json/wp/v2/comments?post=${id}`
      );
      const data = await response.json();
      setCommentData(data);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCommentData();
  }, []);

  console.log(commentData, "commentData");
  return (
    <div className={styles["comment-container"]}>
      {commentData &&
        commentData.map((comment, index) => {
          return (
            <div
              className={styles["comment-container-box"]}
              key={comment.id}
              style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
            >
              <div className={styles["user-icon-container"]}>
                <Image
                  src={userIcon}
                  width={126}
                  height={126}
                  alt="user icon"
                  className={styles["user-icon"]}
                />
                <p>{comment.author_name}</p>
              </div>
              <div className={styles["comment-block"]}>
                <Image
                  src={commentTail}
                  height={59}
                  width={116}
                  alt="comment-tail"
                  className={styles["comment-tail"]}
                  style={{
                    transform: `scaleX(${index % 2 === 0 ? "1" : "-1"})`,
                    right: index % 2 === 0 ? "" : "-14px",
                    left: index % 2 === 0 ? "-20px" : "",
                  }}
                />

                <h3>{comment.date_gmt}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(comment.content.rendered),
                  }}
                />
              </div>
            </div>
          );
        })}

      <form className={styles["subscribe-container"]}>
        <input
          id="text"
          placeholder="Email"
          className={styles["input"]}
          type="text"
        />
        <input
          id="text"
          placeholder="Имя"
          className={styles["input"]}
          type="text"
        />
        <input
          id="text"
          placeholder="Текст отзыва"
          className={styles["input"]}
          type="text"
        />
        <button className={styles["button"]}>Подписаться</button>
      </form>
    </div>
  );
}
